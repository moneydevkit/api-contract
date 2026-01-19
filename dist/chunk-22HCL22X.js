import {
  CheckoutProductSchema
} from "./chunk-CD4U22RQ.js";
import {
  BaseInvoiceSchema,
  DynamicAmountPendingInvoiceSchema,
  FixedAmountPendingInvoiceSchema,
  PaidInvoiceSchema
} from "./chunk-TGG53ETU.js";
import {
  CurrencySchema
} from "./chunk-6M6LFZ3U.js";

// src/schemas/checkout.ts
import { z } from "zod";
var CustomerFieldSchema = z.string().min(1);
var CustomerOutputSchema = z.object({
  name: z.string().nullish(),
  email: z.string().email().nullish(),
  externalId: z.string().nullish()
}).catchall(z.string());
var BaseCheckoutSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  clientSecret: z.string(),
  type: z.enum(["PRODUCTS", "AMOUNT", "TOP_UP"]),
  status: z.enum([
    "UNCONFIRMED",
    "CONFIRMED",
    "PENDING_PAYMENT",
    "PAYMENT_RECEIVED",
    "EXPIRED"
  ]),
  organizationId: z.string(),
  expiresAt: z.date(),
  userMetadata: z.record(z.any()).nullable(),
  customFieldData: z.record(z.any()).nullable(),
  currency: CurrencySchema,
  allowDiscountCodes: z.boolean(),
  /**
   * Array of customer fields required at checkout.
   * @example ['email'] - email required
   * @example ['email', 'name'] - both required
   */
  requireCustomerData: z.array(CustomerFieldSchema).nullable(),
  successUrl: z.string().nullable(),
  /**
   * Customer data associated with this checkout.
   */
  customer: CustomerOutputSchema.nullable(),
  customerBillingAddress: z.record(z.any()).nullable(),
  products: z.array(CheckoutProductSchema).nullable(),
  /**
   * The selected product ID (from the products array).
   * For PRODUCTS checkouts, this is the product the customer has chosen.
   * null for AMOUNT/TOP_UP checkouts.
   */
  productId: z.string().nullable(),
  /**
   * The selected product price ID.
   * References a price from the selected product's prices array.
   * null for AMOUNT/TOP_UP checkouts.
   */
  productPriceId: z.string().nullable(),
  /**
   * User-provided amount for CUSTOM price products.
   * Only set when the selected price has amountType: CUSTOM.
   */
  customAmount: z.number().nullable(),
  /**
   * The selected product with full details (convenience field).
   * Same shape as items in the products array.
   * null if no product is selected.
   */
  product: CheckoutProductSchema.nullable(),
  providedAmount: z.number().nullable(),
  totalAmount: z.number().nullable(),
  discountAmount: z.number().nullable(),
  netAmount: z.number().nullable(),
  taxAmount: z.number().nullable(),
  invoiceAmountSats: z.number().nullable(),
  invoiceScid: z.string().nullable(),
  btcPrice: z.number().nullable(),
  invoice: BaseInvoiceSchema.nullable()
});
var AmountFieldsSchema = z.object({
  totalAmount: z.number(),
  discountAmount: z.number(),
  netAmount: z.number(),
  taxAmount: z.number(),
  invoiceAmountSats: z.number(),
  btcPrice: z.number()
});
var ExpiredCheckoutSchema = BaseCheckoutSchema.extend({
  status: z.literal("EXPIRED"),
  type: z.enum(["PRODUCTS", "AMOUNT", "TOP_UP"])
});
var UnconfirmedCheckoutSchema = z.discriminatedUnion("type", [
  BaseCheckoutSchema.extend({
    status: z.literal("UNCONFIRMED"),
    type: z.literal("PRODUCTS"),
    products: z.array(CheckoutProductSchema).nonempty()
  }),
  BaseCheckoutSchema.extend({
    status: z.literal("UNCONFIRMED"),
    type: z.literal("AMOUNT"),
    providedAmount: z.number()
  }),
  BaseCheckoutSchema.extend({
    status: z.literal("UNCONFIRMED"),
    type: z.literal("TOP_UP")
  })
]);
var ConfirmedCheckoutSchema = z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal("CONFIRMED"),
    type: z.literal("PRODUCTS"),
    products: z.array(CheckoutProductSchema).nonempty()
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal("CONFIRMED"),
    type: z.literal("AMOUNT"),
    providedAmount: z.number()
  }),
  BaseCheckoutSchema.extend({
    status: z.literal("CONFIRMED"),
    type: z.literal("TOP_UP")
  })
]);
var PendingPaymentCheckoutSchema = z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal("PENDING_PAYMENT"),
    type: z.literal("PRODUCTS"),
    products: z.array(CheckoutProductSchema).nonempty(),
    invoice: FixedAmountPendingInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal("PENDING_PAYMENT"),
    type: z.literal("AMOUNT"),
    providedAmount: z.number(),
    invoice: FixedAmountPendingInvoiceSchema
  }),
  BaseCheckoutSchema.extend({
    status: z.literal("PENDING_PAYMENT"),
    type: z.literal("TOP_UP"),
    invoice: DynamicAmountPendingInvoiceSchema
  })
]);
var PaymentReceivedCheckoutSchema = z.discriminatedUnion("type", [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal("PAYMENT_RECEIVED"),
    type: z.literal("PRODUCTS"),
    products: z.array(CheckoutProductSchema).nonempty(),
    invoice: PaidInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal("PAYMENT_RECEIVED"),
    type: z.literal("AMOUNT"),
    providedAmount: z.number(),
    invoice: PaidInvoiceSchema
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal("PAYMENT_RECEIVED"),
    type: z.literal("TOP_UP"),
    invoice: PaidInvoiceSchema
  })
]);
var CheckoutSchema = z.union([
  UnconfirmedCheckoutSchema,
  ConfirmedCheckoutSchema,
  PendingPaymentCheckoutSchema,
  PaymentReceivedCheckoutSchema,
  ExpiredCheckoutSchema
]);

export {
  ExpiredCheckoutSchema,
  UnconfirmedCheckoutSchema,
  ConfirmedCheckoutSchema,
  PendingPaymentCheckoutSchema,
  PaymentReceivedCheckoutSchema,
  CheckoutSchema
};
