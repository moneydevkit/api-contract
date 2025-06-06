import { z } from "zod"

export const BaseInvoiceSchema = z.object({
  invoice: z.string(),
  expiresAt: z.date(),
  paymentHash: z.string(),
  amountSats: z.number().nullable(),
  amountSatsReceived: z.number().nullable(),
  currency: z.string(),
  fiatAmount: z.number().nullable(),
  btcPrice: z.number().nullable(),
})

export const FixedAmountPendingInvoiceSchema = BaseInvoiceSchema.extend({
  amountSats: z.number(),
  fiatAmount: z.number(),
  btcPrice: z.number(),
})

export const DynamicAmountPendingInvoiceSchema = BaseInvoiceSchema

export const PaidInvoiceSchema = FixedAmountPendingInvoiceSchema.extend({
  amountSatsReceived: z.number(),
})