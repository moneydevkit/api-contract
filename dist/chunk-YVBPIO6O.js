import {
  CheckoutSchema
} from "./chunk-U4ZSQE34.js";

// src/contracts/checkout.ts
import { oc } from "@orpc/contract";
import { z } from "zod";
var CreateCheckoutInputSchema = z.object({
  nodeId: z.string(),
  amount: z.number().optional(),
  currency: z.string().optional(),
  products: z.array(z.string()).optional(),
  successUrl: z.string().optional(),
  allowDiscountCodes: z.boolean().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
  customerName: z.string().nonempty().optional(),
  customerEmail: z.string().email().optional(),
  customerIpAddress: z.string().ip().optional(),
  customerExternalId: z.string().nonempty().optional(),
  requireCustomerFields: z.object({
    customerName: z.boolean().optional(),
    customerEmail: z.boolean().optional()
  }).optional()
});
var ConfirmCheckoutInputSchema = z.object({
  checkoutId: z.string(),
  customerName: z.string().nonempty().optional(),
  customerEmail: z.string().email().optional(),
  customerIpAddress: z.string().ip().optional(),
  customerExternalId: z.string().nonempty().optional(),
  products: z.array(
    z.object({
      productId: z.string(),
      priceAmount: z.number().optional()
    })
  ).optional()
});
var ApplyDiscountCodeInputSchema = z.object({
  checkoutId: z.string(),
  discountCode: z.string()
});
var RegisterInvoiceInputSchema = z.object({
  nodeId: z.string(),
  scid: z.string(),
  checkoutId: z.string(),
  invoice: z.string(),
  paymentHash: z.string(),
  invoiceExpiresAt: z.date()
});
var PaymentReceivedInputSchema = z.object({
  payments: z.array(
    z.object({
      paymentHash: z.string(),
      amountSats: z.number()
    })
  )
});
var GetCheckoutInputSchema = z.object({ id: z.string() });
var createCheckoutContract = oc.input(CreateCheckoutInputSchema).output(CheckoutSchema);
var applyDiscountCodeContract = oc.input(ApplyDiscountCodeInputSchema).output(CheckoutSchema);
var confirmCheckoutContract = oc.input(ConfirmCheckoutInputSchema).output(CheckoutSchema);
var registerInvoiceContract = oc.input(RegisterInvoiceInputSchema).output(CheckoutSchema);
var getCheckoutContract = oc.input(GetCheckoutInputSchema).output(CheckoutSchema);
var paymentReceivedContract = oc.input(PaymentReceivedInputSchema).output(z.object({ ok: z.boolean() }));
var checkout = {
  get: getCheckoutContract,
  create: createCheckoutContract,
  confirm: confirmCheckoutContract,
  registerInvoice: registerInvoiceContract,
  paymentReceived: paymentReceivedContract
};

export {
  CreateCheckoutInputSchema,
  ConfirmCheckoutInputSchema,
  ApplyDiscountCodeInputSchema,
  RegisterInvoiceInputSchema,
  PaymentReceivedInputSchema,
  GetCheckoutInputSchema,
  createCheckoutContract,
  applyDiscountCodeContract,
  confirmCheckoutContract,
  registerInvoiceContract,
  getCheckoutContract,
  paymentReceivedContract,
  checkout
};
