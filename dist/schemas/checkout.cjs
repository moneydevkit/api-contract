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

// src/schemas/checkout.ts
var checkout_exports = {};
__export(checkout_exports, {
  CheckoutSchema: () => CheckoutSchema,
  ConfirmedCheckoutSchema: () => ConfirmedCheckoutSchema,
  ExpiredCheckoutSchema: () => ExpiredCheckoutSchema,
  PaymentReceivedCheckoutSchema: () => PaymentReceivedCheckoutSchema,
  PendingPaymentCheckoutSchema: () => PendingPaymentCheckoutSchema,
  UnconfirmedCheckoutSchema: () => UnconfirmedCheckoutSchema
});
module.exports = __toCommonJS(checkout_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckoutSchema,
  ConfirmedCheckoutSchema,
  ExpiredCheckoutSchema,
  PaymentReceivedCheckoutSchema,
  PendingPaymentCheckoutSchema,
  UnconfirmedCheckoutSchema
});
