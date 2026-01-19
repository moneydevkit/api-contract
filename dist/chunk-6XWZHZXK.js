import {
  CheckoutSchema
} from "./chunk-7EZSTHMJ.js";
import {
  CurrencySchema
} from "./chunk-6M6LFZ3U.js";

// src/contracts/checkout.ts
import { oc } from "@orpc/contract";
import { z } from "zod";
var emptyStringToUndefined = z.string().transform((val) => val.trim() === "" ? void 0 : val);
var emailOrEmpty = z.string().email().optional().or(z.literal(""));
var CustomerFieldSchema = z.string().min(1);
var CustomerInputSchema = z.object({
  name: emptyStringToUndefined.optional(),
  email: emailOrEmpty,
  externalId: emptyStringToUndefined.optional()
}).catchall(z.string());
var CreateCheckoutInputSchema = z.object({
  nodeId: z.string(),
  amount: z.number().optional(),
  currency: CurrencySchema.optional(),
  products: z.array(z.string()).optional(),
  successUrl: z.string().optional(),
  allowDiscountCodes: z.boolean().optional(),
  metadata: z.record(z.string(), z.any()).optional(),
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
  requireCustomerData: z.array(CustomerFieldSchema).optional()
});
var ConfirmCheckoutInputSchema = z.object({
  checkoutId: z.string(),
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
  products: z.array(
    z.object({
      productId: z.string(),
      priceAmount: z.number().optional()
    })
  ).max(1).optional()
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
      amountSats: z.number(),
      sandbox: z.boolean().default(false)
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
  CustomerFieldSchema,
  CustomerInputSchema,
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
