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
  contract: () => contract
});
module.exports = __toCommonJS(index_exports);

// src/contracts/checkout.ts
var import_contract = require("@orpc/contract");
var import_zod4 = require("zod");

// src/schemas/checkout.ts
var import_zod3 = require("zod");

// src/schemas/invoice.ts
var import_zod = require("zod");
var BaseInvoiceSchema = import_zod.z.object({
  invoice: import_zod.z.string(),
  expiresAt: import_zod.z.date(),
  paymentHash: import_zod.z.string(),
  amountSats: import_zod.z.number().nullable(),
  amountSatsReceived: import_zod.z.number().nullable(),
  currency: import_zod.z.string(),
  fiatAmount: import_zod.z.number().nullable(),
  btcPrice: import_zod.z.number().nullable()
});
var FixedAmountPendingInvoiceSchema = BaseInvoiceSchema.extend({
  amountSats: import_zod.z.number(),
  fiatAmount: import_zod.z.number(),
  btcPrice: import_zod.z.number()
});
var DynamicAmountPendingInvoiceSchema = BaseInvoiceSchema;
var PaidInvoiceSchema = FixedAmountPendingInvoiceSchema.extend({
  amountSatsReceived: import_zod.z.number()
});

// src/schemas/product.ts
var import_zod2 = require("zod");
var CheckoutProductPriceSchema = import_zod2.z.object({
  id: import_zod2.z.string(),
  amountType: import_zod2.z.enum(["FIXED", "CUSTOM", "FREE", "METERED"]),
  priceAmount: import_zod2.z.number().nullable(),
  minimumAmount: import_zod2.z.number().nullable(),
  maximumAmount: import_zod2.z.number().nullable(),
  presetAmount: import_zod2.z.number().nullable(),
  unitAmount: import_zod2.z.number().nullable(),
  capAmount: import_zod2.z.number().nullable(),
  meterId: import_zod2.z.string().nullable()
});
var CheckoutProductSchema = import_zod2.z.object({
  id: import_zod2.z.string(),
  name: import_zod2.z.string(),
  description: import_zod2.z.string().nullable(),
  recurringInterval: import_zod2.z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
  prices: import_zod2.z.array(CheckoutProductPriceSchema)
});

// src/schemas/checkout.ts
var BaseCheckoutSchema = import_zod3.z.object({
  id: import_zod3.z.string(),
  createdAt: import_zod3.z.date(),
  clientSecret: import_zod3.z.string(),
  type: import_zod3.z.enum(["PRODUCTS", "AMOUNT", "TOP_UP"]),
  status: import_zod3.z.enum([
    "UNCONFIRMED",
    "CONFIRMED",
    "PENDING_PAYMENT",
    "PAYMENT_RECEIVED",
    "EXPIRED"
  ]),
  organizationId: import_zod3.z.string(),
  expiresAt: import_zod3.z.date(),
  userMetadata: import_zod3.z.record(import_zod3.z.any()).nullable(),
  customFieldData: import_zod3.z.record(import_zod3.z.any()).nullable(),
  customerMetadata: import_zod3.z.record(import_zod3.z.any()).nullable(),
  currency: import_zod3.z.string(),
  allowDiscountCodes: import_zod3.z.boolean(),
  requireCustomerFields: import_zod3.z.object({
    customerName: import_zod3.z.boolean().optional(),
    customerEmail: import_zod3.z.boolean().optional()
  }).nullable(),
  successUrl: import_zod3.z.string().nullable(),
  customerId: import_zod3.z.string().nullable(),
  customerExternalId: import_zod3.z.string().nullable(),
  customerName: import_zod3.z.string().nullable(),
  customerEmail: import_zod3.z.string().email().nullable(),
  customerIpAddress: import_zod3.z.string().nullable(),
  customerBillingAddress: import_zod3.z.record(import_zod3.z.any()).nullable(),
  products: import_zod3.z.array(CheckoutProductSchema).nullable(),
  providedAmount: import_zod3.z.number().nullable(),
  totalAmount: import_zod3.z.number().nullable(),
  discountAmount: import_zod3.z.number().nullable(),
  netAmount: import_zod3.z.number().nullable(),
  taxAmount: import_zod3.z.number().nullable(),
  invoiceAmountSats: import_zod3.z.number().nullable(),
  invoiceScid: import_zod3.z.string().nullable(),
  btcPrice: import_zod3.z.number().nullable(),
  invoice: BaseInvoiceSchema.nullable()
});
var AmountFieldsSchema = import_zod3.z.object({
  totalAmount: import_zod3.z.number(),
  discountAmount: import_zod3.z.number(),
  netAmount: import_zod3.z.number(),
  taxAmount: import_zod3.z.number(),
  invoiceAmountSats: import_zod3.z.number(),
  btcPrice: import_zod3.z.number()
});
var ExpiredCheckoutSchema = BaseCheckoutSchema.extend({
  status: import_zod3.z.literal("EXPIRED"),
  customerId: import_zod3.z.string().nullable(),
  type: import_zod3.z.enum(["PRODUCTS", "AMOUNT", "TOP_UP"])
});
var UnconfirmedCheckoutSchema = import_zod3.z.discriminatedUnion("type", [
  BaseCheckoutSchema.extend({
    status: import_zod3.z.literal("UNCONFIRMED"),
    type: import_zod3.z.literal("PRODUCTS"),
    products: import_zod3.z.array(CheckoutProductSchema).nonempty()
  }),
  BaseCheckoutSchema.extend({
    status: import_zod3.z.literal("UNCONFIRMED"),
    type: import_zod3.z.literal("AMOUNT"),
    providedAmount: import_zod3.z.number()
  }),
  BaseCheckoutSchema.extend({
    status: import_zod3.z.literal("UNCONFIRMED"),
    type: import_zod3.z.literal("TOP_UP")
  })
]);
var ConfirmedCheckoutSchema = import_zod3.z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod3.z.literal("CONFIRMED"),
    type: import_zod3.z.literal("PRODUCTS"),
    products: import_zod3.z.array(CheckoutProductSchema).nonempty()
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod3.z.literal("CONFIRMED"),
    type: import_zod3.z.literal("AMOUNT"),
    providedAmount: import_zod3.z.number()
  }),
  BaseCheckoutSchema.extend({
    status: import_zod3.z.literal("CONFIRMED"),
    type: import_zod3.z.literal("TOP_UP")
  })
]);
var PendingPaymentCheckoutSchema = import_zod3.z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod3.z.literal("PENDING_PAYMENT"),
    type: import_zod3.z.literal("PRODUCTS"),
    products: import_zod3.z.array(CheckoutProductSchema).nonempty(),
    invoice: FixedAmountPendingInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod3.z.literal("PENDING_PAYMENT"),
    type: import_zod3.z.literal("AMOUNT"),
    providedAmount: import_zod3.z.number(),
    invoice: FixedAmountPendingInvoiceSchema
  }),
  BaseCheckoutSchema.extend({
    status: import_zod3.z.literal("PENDING_PAYMENT"),
    type: import_zod3.z.literal("TOP_UP"),
    invoice: DynamicAmountPendingInvoiceSchema
  })
]);
var PaymentReceivedCheckoutSchema = import_zod3.z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod3.z.literal("PAYMENT_RECEIVED"),
    type: import_zod3.z.literal("PRODUCTS"),
    products: import_zod3.z.array(CheckoutProductSchema).nonempty(),
    invoice: PaidInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod3.z.literal("PAYMENT_RECEIVED"),
    type: import_zod3.z.literal("AMOUNT"),
    providedAmount: import_zod3.z.number(),
    invoice: PaidInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: import_zod3.z.literal("PAYMENT_RECEIVED"),
    type: import_zod3.z.literal("TOP_UP"),
    invoice: PaidInvoiceSchema
  })
]);
var CheckoutSchema = import_zod3.z.union([
  UnconfirmedCheckoutSchema,
  ConfirmedCheckoutSchema,
  PendingPaymentCheckoutSchema,
  PaymentReceivedCheckoutSchema,
  ExpiredCheckoutSchema
]);

// src/contracts/checkout.ts
var CreateCheckoutInputSchema = import_zod4.z.object({
  nodeId: import_zod4.z.string(),
  amount: import_zod4.z.number().optional(),
  currency: import_zod4.z.string().optional(),
  products: import_zod4.z.array(import_zod4.z.string()).optional(),
  successUrl: import_zod4.z.string().optional(),
  allowDiscountCodes: import_zod4.z.boolean().optional(),
  metadata: import_zod4.z.record(import_zod4.z.string(), import_zod4.z.any()).optional(),
  customerName: import_zod4.z.string().nonempty().optional(),
  customerEmail: import_zod4.z.string().email().optional(),
  customerIpAddress: import_zod4.z.string().ip().optional(),
  customerExternalId: import_zod4.z.string().nonempty().optional(),
  requireCustomerFields: import_zod4.z.object({
    customerName: import_zod4.z.boolean().optional(),
    customerEmail: import_zod4.z.boolean().optional()
  }).optional()
});
var ConfirmCheckoutInputSchema = import_zod4.z.object({
  checkoutId: import_zod4.z.string(),
  customerName: import_zod4.z.string().nonempty().optional(),
  customerEmail: import_zod4.z.string().email().optional(),
  customerIpAddress: import_zod4.z.string().ip().optional(),
  customerExternalId: import_zod4.z.string().nonempty().optional(),
  products: import_zod4.z.array(
    import_zod4.z.object({
      productId: import_zod4.z.string(),
      priceAmount: import_zod4.z.number().optional()
    })
  ).optional()
});
var ApplyDiscountCodeInputSchema = import_zod4.z.object({
  checkoutId: import_zod4.z.string(),
  discountCode: import_zod4.z.string()
});
var RegisterInvoiceInputSchema = import_zod4.z.object({
  nodeId: import_zod4.z.string(),
  scid: import_zod4.z.string(),
  checkoutId: import_zod4.z.string(),
  invoice: import_zod4.z.string(),
  paymentHash: import_zod4.z.string(),
  invoiceExpiresAt: import_zod4.z.date()
});
var PaymentReceivedInputSchema = import_zod4.z.object({
  payments: import_zod4.z.array(
    import_zod4.z.object({
      paymentHash: import_zod4.z.string(),
      amountSats: import_zod4.z.number()
    })
  )
});
var GetCheckoutInputSchema = import_zod4.z.object({ id: import_zod4.z.string() });
var createCheckoutContract = import_contract.oc.input(CreateCheckoutInputSchema).output(CheckoutSchema);
var applyDiscountCodeContract = import_contract.oc.input(ApplyDiscountCodeInputSchema).output(CheckoutSchema);
var confirmCheckoutContract = import_contract.oc.input(ConfirmCheckoutInputSchema).output(CheckoutSchema);
var registerInvoiceContract = import_contract.oc.input(RegisterInvoiceInputSchema).output(CheckoutSchema);
var getCheckoutContract = import_contract.oc.input(GetCheckoutInputSchema).output(CheckoutSchema);
var paymentReceivedContract = import_contract.oc.input(PaymentReceivedInputSchema).output(import_zod4.z.object({ ok: import_zod4.z.boolean() }));
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
var import_zod5 = require("zod");
var StartDeviceAuthInputSchema = import_zod5.z.object({
  clientDisplayName: import_zod5.z.string().optional(),
  webhookUrl: import_zod5.z.string().url().optional(),
  forceNewWebhook: import_zod5.z.boolean().optional()
});
var StartDeviceAuthOutputSchema = import_zod5.z.object({
  deviceCode: import_zod5.z.string(),
  userCode: import_zod5.z.string(),
  verificationUri: import_zod5.z.string().url(),
  expiresIn: import_zod5.z.number().int().positive(),
  interval: import_zod5.z.number().int().positive()
});
var PollDeviceAuthInputSchema = import_zod5.z.object({
  deviceCode: import_zod5.z.string()
});
var PollDeviceAuthOutputSchema = import_zod5.z.discriminatedUnion("status", [
  import_zod5.z.object({
    status: import_zod5.z.literal("pending"),
    expiresIn: import_zod5.z.number().int().nonnegative()
  }),
  import_zod5.z.object({
    status: import_zod5.z.literal("authorized"),
    bootstrapToken: import_zod5.z.string(),
    expiresIn: import_zod5.z.number().int().nonnegative().optional()
  }),
  import_zod5.z.object({
    status: import_zod5.z.literal("expired")
  }),
  import_zod5.z.object({
    status: import_zod5.z.literal("denied")
  })
]);
var BootstrapInputSchema = import_zod5.z.object({
  bootstrapToken: import_zod5.z.string(),
  webhookUrl: import_zod5.z.string().url().optional(),
  projectName: import_zod5.z.string().optional(),
  forceNewWebhook: import_zod5.z.boolean().optional()
});
var BootstrapOutputSchema = import_zod5.z.object({
  apiKey: import_zod5.z.string(),
  apiKeyPreview: import_zod5.z.string(),
  apiKeyId: import_zod5.z.string(),
  webhookId: import_zod5.z.string(),
  webhookSecret: import_zod5.z.string(),
  organizationId: import_zod5.z.string(),
  webhookUrl: import_zod5.z.string().url()
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

// src/index.ts
var contract = { checkout, onboarding };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckoutSchema,
  contract
});
