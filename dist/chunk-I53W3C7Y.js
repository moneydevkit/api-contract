// src/schemas/invoice.ts
import { z } from "zod";
var BaseInvoiceSchema = z.object({
  invoice: z.string(),
  expiresAt: z.date(),
  paymentHash: z.string(),
  amountSats: z.number().nullable(),
  amountSatsReceived: z.number().nullable(),
  currency: z.string(),
  fiatAmount: z.number().nullable(),
  btcPrice: z.number().nullable()
});
var FixedAmountPendingInvoiceSchema = BaseInvoiceSchema.extend({
  amountSats: z.number(),
  fiatAmount: z.number(),
  btcPrice: z.number()
});
var DynamicAmountPendingInvoiceSchema = BaseInvoiceSchema;
var PaidInvoiceSchema = FixedAmountPendingInvoiceSchema.extend({
  amountSatsReceived: z.number()
});

export {
  BaseInvoiceSchema,
  FixedAmountPendingInvoiceSchema,
  DynamicAmountPendingInvoiceSchema,
  PaidInvoiceSchema
};
