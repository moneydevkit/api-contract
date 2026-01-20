"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CheckoutSchema: () => CheckoutSchema,
  CurrencySchema: () => CurrencySchema,
  ListProductsOutputSchema: () => ListProductsOutputSchema,
  MAX_KEY_COUNT: () => MAX_KEY_COUNT,
  MAX_KEY_LENGTH: () => MAX_KEY_LENGTH,
  MAX_METADATA_SIZE_BYTES: () => MAX_METADATA_SIZE_BYTES,
  ProductPriceSchema: () => ProductPriceSchema,
  ProductSchema: () => ProductSchema,
  contract: () => contract,
  validateMetadata: () => validateMetadata
});
module.exports = __toCommonJS(index_exports);

// src/contracts/checkout.ts
var import_contract = require("@orpc/contract");
var import_zod5 = require("zod");

// src/schemas/checkout.ts
var import_zod4 = require("zod");

// src/schemas/currency.ts
var import_zod = require("zod");
var CurrencySchema = import_zod.z.enum(["USD", "SAT"]);

// src/schemas/invoice.ts
var import_zod2 = require("zod");
var BaseInvoiceSchema = import_zod2.z.object({
  invoice: import_zod2.z.string(),
  expiresAt: import_zod2.z.date(),
  paymentHash: import_zod2.z.string(),
  amountSats: import_zod2.z.number().nullable(),
  amountSatsReceived: import_zod2.z.number().nullable(),
  currency: CurrencySchema,
  fiatAmount: import_zod2.z.number().nullable(),
  btcPrice: import_zod2.z.number().nullable()
});
var FixedAmountPendingInvoiceSchema = BaseInvoiceSchema.extend({
  amountSats: import_zod2.z.number(),
  fiatAmount: import_zod2.z.number(),
  btcPrice: import_zod2.z.number()
});
var DynamicAmountPendingInvoiceSchema = BaseInvoiceSchema;
var PaidInvoiceSchema = FixedAmountPendingInvoiceSchema.extend({
  amountSatsReceived: import_zod2.z.number()
});

// src/schemas/product.ts
var import_zod3 = require("zod");
var CheckoutProductPriceSchema = import_zod3.z.object({
  id: import_zod3.z.string(),
  amountType: import_zod3.z.enum(["FIXED", "CUSTOM"]),
  priceAmount: import_zod3.z.number().nullable(),
  currency: CurrencySchema
});
var CheckoutProductSchema = import_zod3.z.object({
  id: import_zod3.z.string(),
  name: import_zod3.z.string(),
  description: import_zod3.z.string().nullable(),
  recurringInterval: import_zod3.z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
  prices: import_zod3.z.array(CheckoutProductPriceSchema)
});

// src/schemas/checkout.ts
var CustomerFieldSchema = import_zod4.z.string().min(1);
var CustomerOutputSchema = import_zod4.z.object({
  name: import_zod4.z.string().nullish(),
  email: import_zod4.z.string().email().nullish(),
  externalId: import_zod4.z.string().nullish()
}).catchall(import_zod4.z.string());
var BaseCheckoutSchema = import_zod4.z.object({
  id: import_zod4.z.string(),
  createdAt: import_zod4.z.date(),
  clientSecret: import_zod4.z.string(),
  type: import_zod4.z.enum(["PRODUCTS", "AMOUNT", "TOP_UP"]),
  status: import_zod4.z.enum([
    "UNCONFIRMED",
    "CONFIRMED",
    "PENDING_PAYMENT",
    "PAYMENT_RECEIVED",
    "EXPIRED"
  ]),
  organizationId: import_zod4.z.string(),
  expiresAt: import_zod4.z.date(),
  userMetadata: import_zod4.z.record(import_zod4.z.any()).nullable(),
  customFieldData: import_zod4.z.record(import_zod4.z.any()).nullable(),
  currency: CurrencySchema,
  allowDiscountCodes: import_zod4.z.boolean(),
  /**
   * Array of customer fields required at checkout.
   * @example ['email'] - email required
   * @example ['email', 'name'] - both required
   */
  requireCustomerData: import_zod4.z.array(CustomerFieldSchema).nullable(),
  successUrl: import_zod4.z.string().nullable(),
  /**
   * Customer data associated with this checkout.
   */
  customer: CustomerOutputSchema.nullable(),
  customerBillingAddress: import_zod4.z.record(import_zod4.z.any()).nullable(),
  products: import_zod4.z.array(CheckoutProductSchema).nullable(),
  /**
   * The selected product ID (from the products array).
   * For PRODUCTS checkouts, this is the product the customer has chosen.
   * null for AMOUNT/TOP_UP checkouts.
   */
  productId: import_zod4.z.string().nullable(),
  /**
   * The selected product price ID.
   * References a price from the selected product's prices array.
   * null for AMOUNT/TOP_UP checkouts.
   */
  productPriceId: import_zod4.z.string().nullable(),
  /**
   * User-provided amount for CUSTOM price products.
   * Only set when the selected price has amountType: CUSTOM.
   */
  customAmount: import_zod4.z.number().nullable(),
  /**
   * The selected product with full details (convenience field).
   * Same shape as items in the products array.
   * null if no product is selected.
   */
  product: CheckoutProductSchema.nullable(),
  providedAmount: import_zod4.z.number().nullable(),
  totalAmount: import_zod4.z.number().nullable(),
  discountAmount: import_zod4.z.number().nullable(),
  netAmount: import_zod4.z.number().nullable(),
  taxAmount: import_zod4.z.number().nullable(),
  invoiceAmountSats: import_zod4.z.number().nullable(),
  invoiceScid: import_zod4.z.string().nullable(),
  btcPrice: import_zod4.z.number().nullable(),
  invoice: BaseInvoiceSchema.nullable()
});
var AmountFieldsSchema = import_zod4.z.object({
  totalAmount: import_zod4.z.number(),
  discountAmount: import_zod4.z.number(),
  netAmount: import_zod4.z.number(),
  taxAmount: import_zod4.z.number(),
  invoiceAmountSats: import_zod4.z.number(),
  btcPrice: import_zod4.z.number()
});
var ExpiredCheckoutSchema = BaseCheckoutSchema.extend({
  status: import_zod4.z.literal("EXPIRED"),
  type: import_zod4.z.enum(["PRODUCTS", "AMOUNT", "TOP_UP"])
});
var UnconfirmedCheckoutSchema = import_zod4.z.discriminatedUnion("type", [
  BaseCheckoutSchema.extend({
    status: import_zod4.z.literal("UNCONFIRMED"),
    type: import_zod4.z.literal("PRODUCTS"),
    products: import_zod4.z.array(CheckoutProductSchema).nonempty()
  }),
  BaseCheckoutSchema.extend({
    status: import_zod4.z.literal("UNCONFIRMED"),
    type: import_zod4.z.literal("AMOUNT"),
    providedAmount: import_zod4.z.number()
  }),
  BaseCheckoutSchema.extend({
    status: import_zod4.z.literal("UNCONFIRMED"),
    type: import_zod4.z.literal("TOP_UP")
  })
]);
var ConfirmedCheckoutSchema = import_zod4.z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod4.z.literal("CONFIRMED"),
    type: import_zod4.z.literal("PRODUCTS"),
    products: import_zod4.z.array(CheckoutProductSchema).nonempty()
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod4.z.literal("CONFIRMED"),
    type: import_zod4.z.literal("AMOUNT"),
    providedAmount: import_zod4.z.number()
  }),
  BaseCheckoutSchema.extend({
    status: import_zod4.z.literal("CONFIRMED"),
    type: import_zod4.z.literal("TOP_UP")
  })
]);
var PendingPaymentCheckoutSchema = import_zod4.z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod4.z.literal("PENDING_PAYMENT"),
    type: import_zod4.z.literal("PRODUCTS"),
    products: import_zod4.z.array(CheckoutProductSchema).nonempty(),
    invoice: FixedAmountPendingInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod4.z.literal("PENDING_PAYMENT"),
    type: import_zod4.z.literal("AMOUNT"),
    providedAmount: import_zod4.z.number(),
    invoice: FixedAmountPendingInvoiceSchema
  }),
  BaseCheckoutSchema.extend({
    status: import_zod4.z.literal("PENDING_PAYMENT"),
    type: import_zod4.z.literal("TOP_UP"),
    invoice: DynamicAmountPendingInvoiceSchema
  })
]);
var PaymentReceivedCheckoutSchema = import_zod4.z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod4.z.literal("PAYMENT_RECEIVED"),
    type: import_zod4.z.literal("PRODUCTS"),
    products: import_zod4.z.array(CheckoutProductSchema).nonempty(),
    invoice: PaidInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod4.z.literal("PAYMENT_RECEIVED"),
    type: import_zod4.z.literal("AMOUNT"),
    providedAmount: import_zod4.z.number(),
    invoice: PaidInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod4.z.literal("PAYMENT_RECEIVED"),
    type: import_zod4.z.literal("TOP_UP"),
    invoice: PaidInvoiceSchema
  })
]);
var CheckoutSchema = import_zod4.z.union([
  UnconfirmedCheckoutSchema,
  ConfirmedCheckoutSchema,
  PendingPaymentCheckoutSchema,
  PaymentReceivedCheckoutSchema,
  ExpiredCheckoutSchema
]);

// src/contracts/checkout.ts
var emptyStringToUndefined = import_zod5.z.string().transform((val) => val.trim() === "" ? void 0 : val);
var emailOrEmpty = import_zod5.z.string().email().optional().or(import_zod5.z.literal(""));
var CustomerFieldSchema2 = import_zod5.z.string().min(1);
var CustomerInputSchema = import_zod5.z.object({
  name: emptyStringToUndefined.optional(),
  email: emailOrEmpty,
  externalId: emptyStringToUndefined.optional()
}).catchall(import_zod5.z.string());
var CreateCheckoutInputSchema = import_zod5.z.object({
  nodeId: import_zod5.z.string(),
  amount: import_zod5.z.number().optional(),
  currency: CurrencySchema.optional(),
  products: import_zod5.z.array(import_zod5.z.string()).optional(),
  successUrl: import_zod5.z.string().optional(),
  allowDiscountCodes: import_zod5.z.boolean().optional(),
  metadata: import_zod5.z.record(import_zod5.z.string(), import_zod5.z.any()).optional(),
  /**
   * Customer data for this checkout.
   */
  customer: CustomerInputSchema.optional(),
  /**
   * Array of customer fields to require at checkout.
   * If a field is listed here and not provided, the checkout UI will prompt for it.
   * @example ['email'] - require email
   * @example ['email', 'name'] - require both
   */
  requireCustomerData: import_zod5.z.array(CustomerFieldSchema2).optional()
});
var ConfirmCheckoutInputSchema = import_zod5.z.object({
  checkoutId: import_zod5.z.string(),
  /**
   * Customer data provided at confirm time.
   */
  customer: CustomerInputSchema.optional(),
  /**
   * Product selection at confirm time.
   * - undefined or [] = keep current selection
   * - [{ productId }] = change selection to this product
   * - priceAmount required if selected price has amountType: CUSTOM
   *
   * Currently limited to single selection (max 1 item).
   */
  products: import_zod5.z.array(
    import_zod5.z.object({
      productId: import_zod5.z.string(),
      priceAmount: import_zod5.z.number().optional()
    })
  ).max(1).optional()
});
var ApplyDiscountCodeInputSchema = import_zod5.z.object({
  checkoutId: import_zod5.z.string(),
  discountCode: import_zod5.z.string()
});
var RegisterInvoiceInputSchema = import_zod5.z.object({
  nodeId: import_zod5.z.string(),
  scid: import_zod5.z.string(),
  checkoutId: import_zod5.z.string(),
  invoice: import_zod5.z.string(),
  paymentHash: import_zod5.z.string(),
  invoiceExpiresAt: import_zod5.z.date()
});
var PaymentReceivedInputSchema = import_zod5.z.object({
  payments: import_zod5.z.array(
    import_zod5.z.object({
      paymentHash: import_zod5.z.string(),
      amountSats: import_zod5.z.number(),
      sandbox: import_zod5.z.boolean().default(false)
    })
  )
});
var GetCheckoutInputSchema = import_zod5.z.object({ id: import_zod5.z.string() });
var createCheckoutContract = import_contract.oc.input(CreateCheckoutInputSchema).output(CheckoutSchema);
var applyDiscountCodeContract = import_contract.oc.input(ApplyDiscountCodeInputSchema).output(CheckoutSchema);
var confirmCheckoutContract = import_contract.oc.input(ConfirmCheckoutInputSchema).output(CheckoutSchema);
var registerInvoiceContract = import_contract.oc.input(RegisterInvoiceInputSchema).output(CheckoutSchema);
var getCheckoutContract = import_contract.oc.input(GetCheckoutInputSchema).output(CheckoutSchema);
var paymentReceivedContract = import_contract.oc.input(PaymentReceivedInputSchema).output(import_zod5.z.object({ ok: import_zod5.z.boolean() }));
var checkout = {
  get: getCheckoutContract,
  create: createCheckoutContract,
  confirm: confirmCheckoutContract,
  registerInvoice: registerInvoiceContract,
  paymentReceived: paymentReceivedContract
};

// src/contracts/onboarding.ts
var import_contract2 = require("@orpc/contract");

// src/schemas/onboarding.ts
var import_zod6 = require("zod");
var StartDeviceAuthInputSchema = import_zod6.z.object({
  clientDisplayName: import_zod6.z.string().optional(),
  webhookUrl: import_zod6.z.string().url().optional(),
  forceNewWebhook: import_zod6.z.boolean().optional()
});
var StartDeviceAuthOutputSchema = import_zod6.z.object({
  deviceCode: import_zod6.z.string(),
  userCode: import_zod6.z.string(),
  verificationUri: import_zod6.z.string().url(),
  expiresIn: import_zod6.z.number().int().positive(),
  interval: import_zod6.z.number().int().positive()
});
var PollDeviceAuthInputSchema = import_zod6.z.object({
  deviceCode: import_zod6.z.string()
});
var PollDeviceAuthOutputSchema = import_zod6.z.discriminatedUnion("status", [
  import_zod6.z.object({
    status: import_zod6.z.literal("pending"),
    expiresIn: import_zod6.z.number().int().nonnegative()
  }),
  import_zod6.z.object({
    status: import_zod6.z.literal("authorized"),
    bootstrapToken: import_zod6.z.string(),
    expiresIn: import_zod6.z.number().int().nonnegative().optional()
  }),
  import_zod6.z.object({
    status: import_zod6.z.literal("expired")
  }),
  import_zod6.z.object({
    status: import_zod6.z.literal("denied")
  })
]);
var BootstrapInputSchema = import_zod6.z.object({
  bootstrapToken: import_zod6.z.string(),
  webhookUrl: import_zod6.z.string().url().optional(),
  projectName: import_zod6.z.string().optional(),
  forceNewWebhook: import_zod6.z.boolean().optional()
});
var BootstrapOutputSchema = import_zod6.z.object({
  apiKey: import_zod6.z.string(),
  apiKeyPreview: import_zod6.z.string(),
  apiKeyId: import_zod6.z.string(),
  webhookId: import_zod6.z.string(),
  webhookSecret: import_zod6.z.string(),
  organizationId: import_zod6.z.string(),
  webhookUrl: import_zod6.z.string().url()
});

// src/contracts/onboarding.ts
var startDeviceAuthContract = import_contract2.oc.input(StartDeviceAuthInputSchema).output(StartDeviceAuthOutputSchema);
var pollDeviceAuthContract = import_contract2.oc.input(PollDeviceAuthInputSchema).output(PollDeviceAuthOutputSchema);
var bootstrapContract = import_contract2.oc.input(BootstrapInputSchema).output(BootstrapOutputSchema);
var onboarding = {
  startDeviceAuth: startDeviceAuthContract,
  pollDeviceAuth: pollDeviceAuthContract,
  bootstrap: bootstrapContract
};

// src/contracts/products.ts
var import_contract3 = require("@orpc/contract");
var import_zod7 = require("zod");
var ProductPriceSchema = import_zod7.z.object({
  id: import_zod7.z.string(),
  amountType: import_zod7.z.enum(["FIXED", "CUSTOM"]),
  priceAmount: import_zod7.z.number().nullable(),
  currency: CurrencySchema
});
var ProductSchema = import_zod7.z.object({
  id: import_zod7.z.string(),
  name: import_zod7.z.string(),
  description: import_zod7.z.string().nullable(),
  recurringInterval: import_zod7.z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
  prices: import_zod7.z.array(ProductPriceSchema)
});
var ListProductsOutputSchema = import_zod7.z.object({
  products: import_zod7.z.array(ProductSchema)
});
var listProductsContract = import_contract3.oc.input(import_zod7.z.object({}).optional()).output(ListProductsOutputSchema);
var products = {
  list: listProductsContract
};

// src/lib/utils.ts
function ok(value) {
  return { ok: true, value };
}
function err(error) {
  return { ok: false, error };
}

// src/validation/metadata-validation.ts
var MAX_METADATA_SIZE_BYTES = 1024;
var MAX_KEY_LENGTH = 100;
var MAX_KEY_COUNT = 50;
var CONTROL_CHAR_PATTERN = /[\x00-\x08\x0B-\x0C\x0E-\x1F]/;
var VALID_KEY_PATTERN = /^[a-zA-Z0-9_-]+$/;
function validateKeyFormat(key) {
  if (!VALID_KEY_PATTERN.test(key)) {
    const message = key === "" ? "Metadata keys cannot be empty" : `Metadata key "${key}" contains invalid characters. Keys must contain only letters, numbers, underscores, and hyphens.`;
    return err({ type: "invalid_key_format", message });
  }
  return ok(void 0);
}
function validateKeyLength(key) {
  if (key.length > MAX_KEY_LENGTH) {
    return err({
      type: "key_too_long",
      message: `Metadata key "${key}" exceeds maximum length of ${MAX_KEY_LENGTH} characters`
    });
  }
  return ok(void 0);
}
function validateNullBytes(key, value) {
  if (value.includes("\0")) {
    return err({
      type: "control_character",
      message: `Metadata value for key "${key}" cannot contain null bytes`
    });
  }
  return ok(void 0);
}
function validateControlCharacters(key, value) {
  if (CONTROL_CHAR_PATTERN.test(value)) {
    return err({
      type: "control_character",
      message: `Metadata value for key "${key}" cannot contain control characters`
    });
  }
  return ok(void 0);
}
function validateUtf8Encoding(key, value) {
  try {
    const encoded = new TextEncoder().encode(value);
    new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  } catch {
    return err({
      type: "invalid_encoding",
      message: `Metadata value for key "${key}" contains invalid UTF-8 encoding`
    });
  }
  return ok(void 0);
}
function validateMetadataSize(metadata) {
  const serialized = JSON.stringify(metadata);
  const sizeBytes = new TextEncoder().encode(serialized).length;
  if (sizeBytes > MAX_METADATA_SIZE_BYTES) {
    return err({
      type: "size_exceeded",
      message: `Metadata size (${sizeBytes} bytes) exceeds maximum allowed size (${MAX_METADATA_SIZE_BYTES} bytes). To fix this, reduce the size of your metadata values or remove unnecessary fields.`
    });
  }
  return ok(void 0);
}
function validateKey(key) {
  const formatCheck = validateKeyFormat(key);
  if (!formatCheck.ok) return formatCheck;
  const lengthCheck = validateKeyLength(key);
  if (!lengthCheck.ok) return lengthCheck;
  return ok(void 0);
}
function validateValue(key, value) {
  const nullByteCheck = validateNullBytes(key, value);
  if (!nullByteCheck.ok) return nullByteCheck;
  const controlCharCheck = validateControlCharacters(key, value);
  if (!controlCharCheck.ok) return controlCharCheck;
  const encodingCheck = validateUtf8Encoding(key, value);
  if (!encodingCheck.ok) return encodingCheck;
  return ok(void 0);
}
function validateMetadata(metadata) {
  if (!metadata) {
    return ok(void 0);
  }
  const errors = [];
  const keyCount = Object.keys(metadata).length;
  if (keyCount > MAX_KEY_COUNT) {
    errors.push({
      type: "key_count_exceeded",
      message: `Metadata contains ${keyCount} keys, which exceeds the maximum of ${MAX_KEY_COUNT} keys`
    });
  }
  for (const [key, value] of Object.entries(metadata)) {
    const keyCheck = validateKey(key);
    if (!keyCheck.ok) {
      errors.push(keyCheck.error);
    }
    const valueCheck = validateValue(key, value);
    if (!valueCheck.ok) {
      errors.push(valueCheck.error);
    }
  }
  const sizeCheck = validateMetadataSize(metadata);
  if (!sizeCheck.ok) {
    errors.push(sizeCheck.error);
  }
  if (errors.length > 0) {
    return err(errors);
  }
  return ok(void 0);
}

// src/index.ts
var contract = { checkout, onboarding, products };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckoutSchema,
  CurrencySchema,
  ListProductsOutputSchema,
  MAX_KEY_COUNT,
  MAX_KEY_LENGTH,
  MAX_METADATA_SIZE_BYTES,
  ProductPriceSchema,
  ProductSchema,
  contract,
  validateMetadata
});
