import { z } from "zod";
import { FixedAmountPendingInvoiceSchema, DynamicAmountPendingInvoiceSchema, PaidInvoiceSchema, BaseInvoiceSchema } from "./invoice";
import { CheckoutProductSchema } from "./product";

const BaseCheckoutSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  clientSecret: z.string(),
  type: z.enum(['PRODUCTS', 'AMOUNT', 'TOP_UP']),
  status: z.enum(['UNCONFIRMED', 'CONFIRMED', 'PENDING_PAYMENT', 'PAYMENT_RECEIVED', 'EXPIRED']),
  organizationId: z.string(),
  expiresAt: z.date(),
  userMetadata: z.record(z.any()).nullable(),
  customFieldData: z.record(z.any()).nullable(),
  customerMetadata: z.record(z.any()).nullable(),
  currency: z.string(),
  allowDiscountCodes: z.boolean(),
  requireCustomerFields: z.object({
    customerName: z.boolean().optional(),
    customerEmail: z.boolean().optional(),
  }).nullable(),
  successUrl: z.string().nullable(),
  customerId: z.string().nullable(),
  customerExternalId: z.string().nullable(),
  customerName: z.string().nullable(),
  customerEmail: z.string().email().nullable(),
  customerIpAddress: z.string().nullable(),
  customerBillingAddress: z.record(z.any()).nullable(),
  products: z.array(CheckoutProductSchema).nullable(),
  providedAmount: z.number().nullable(),
  totalAmount: z.number().nullable(),
  discountAmount: z.number().nullable(),
  netAmount: z.number().nullable(),
  taxAmount: z.number().nullable(),
  invoiceAmountSats: z.number().nullable(),
  btcPrice: z.number().nullable(),
  invoice: BaseInvoiceSchema.nullable(),
})

const AmountFieldsSchema = z.object({
  totalAmount: z.number(),
  discountAmount: z.number(),
  netAmount: z.number(),
  taxAmount: z.number(),
  invoiceAmountSats: z.number(),
  btcPrice: z.number(),
});

export const ExpiredCheckoutSchema = BaseCheckoutSchema.extend({
  status: z.literal('EXPIRED'),
  customerId: z.string().nullable(),
  type: z.enum(['PRODUCTS', 'AMOUNT', 'TOP_UP']),
})

export const UnconfirmedCheckoutSchema = z.discriminatedUnion('type', [
  BaseCheckoutSchema.extend({
    status: z.literal('UNCONFIRMED'),
    type: z.literal('PRODUCTS'),
    products: z.array(CheckoutProductSchema).nonempty(),
  }),
  BaseCheckoutSchema.extend({
    status: z.literal('UNCONFIRMED'),
    type: z.literal('AMOUNT'),
    providedAmount: z.number(),
  }),
  BaseCheckoutSchema.extend({
    status: z.literal('UNCONFIRMED'),
    type: z.literal('TOP_UP'),
  })
])

export const ConfirmedCheckoutSchema = z.discriminatedUnion('type', [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal('CONFIRMED'),
    type: z.literal('PRODUCTS'),
    products: z.array(CheckoutProductSchema).nonempty(),
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal('CONFIRMED'),
    type: z.literal('AMOUNT'),
    providedAmount: z.number(),
  }),
  BaseCheckoutSchema.extend({
    status: z.literal('CONFIRMED'),
    type: z.literal('TOP_UP'),
  }),
])

export const PendingPaymentCheckoutSchema = z.discriminatedUnion('type', [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal('PENDING_PAYMENT'),
    type: z.literal('PRODUCTS'),
    products: z.array(CheckoutProductSchema).nonempty(),
    invoice: FixedAmountPendingInvoiceSchema,
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal('PENDING_PAYMENT'),
    type: z.literal('AMOUNT'),
    providedAmount: z.number(),
    invoice: FixedAmountPendingInvoiceSchema,
  }),
  BaseCheckoutSchema.extend({
    status: z.literal('PENDING_PAYMENT'),
    type: z.literal('TOP_UP'),
    invoice: DynamicAmountPendingInvoiceSchema,
  }),
])

export const PaymentReceivedCheckoutSchema = z.discriminatedUnion('type', [
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal('PAYMENT_RECEIVED'),
    type: z.literal('PRODUCTS'),
    products: z.array(CheckoutProductSchema).nonempty(),
    invoice: PaidInvoiceSchema,
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal('PAYMENT_RECEIVED'),
    type: z.literal('AMOUNT'),
    providedAmount: z.number(),
    invoice: PaidInvoiceSchema,
  }),
  BaseCheckoutSchema.merge(AmountFieldsSchema).extend({
    status: z.literal('PAYMENT_RECEIVED'),
    type: z.literal('TOP_UP'),
    invoice: PaidInvoiceSchema,
  }),
])

export const CheckoutSchema = z.union([
  UnconfirmedCheckoutSchema,
  ConfirmedCheckoutSchema,
  PendingPaymentCheckoutSchema,
  PaymentReceivedCheckoutSchema,
  ExpiredCheckoutSchema,
]);

export type Checkout = z.infer<typeof CheckoutSchema>
