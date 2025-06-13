import { oc } from "@orpc/contract";
import { z } from "zod";
import { CheckoutSchema } from "../schemas/checkout";

export const CreateCheckoutInputSchema = z.object({
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
	requireCustomerFields: z
		.object({
			customerName: z.boolean().optional(),
			customerEmail: z.boolean().optional(),
		})
		.optional(),
});

export const ConfirmCheckoutInputSchema = z.object({
	checkoutId: z.string(),
	customerName: z.string().nonempty().optional(),
	customerEmail: z.string().email().optional(),
	customerIpAddress: z.string().ip().optional(),
	customerExternalId: z.string().nonempty().optional(),
	products: z
		.array(
			z.object({
				productId: z.string(),
				priceAmount: z.number().optional(),
			}),
		)
		.optional(),
});

export const ApplyDiscountCodeInputSchema = z.object({
	checkoutId: z.string(),
	discountCode: z.string(),
});

export const RegisterInvoiceInputSchema = z.object({
	nodeId: z.string(),
	checkoutId: z.string(),
	invoice: z.string(),
	paymentHash: z.string(),
	invoiceExpiresAt: z.date(),
});

export const PaymentReceivedInputSchema = z.object({
	payments: z.array(
		z.object({
			paymentHash: z.string(),
			amountSats: z.number(),
		}),
	),
});

export const GetCheckoutInputSchema = z.object({ id: z.string() });

export type CreateCheckout = z.infer<typeof CreateCheckoutInputSchema>;
export type ConfirmCheckout = z.infer<typeof ConfirmCheckoutInputSchema>;
export type RegisterInvoice = z.infer<typeof RegisterInvoiceInputSchema>;
export type PaymentReceived = z.infer<typeof PaymentReceivedInputSchema>;

export const createCheckoutContract = oc
	.input(CreateCheckoutInputSchema)
	.output(CheckoutSchema);
export const applyDiscountCodeContract = oc
	.input(ApplyDiscountCodeInputSchema)
	.output(CheckoutSchema);
export const confirmCheckoutContract = oc
	.input(ConfirmCheckoutInputSchema)
	.output(CheckoutSchema);
export const registerInvoiceContract = oc
	.input(RegisterInvoiceInputSchema)
	.output(CheckoutSchema);
export const getCheckoutContract = oc
	.input(GetCheckoutInputSchema)
	.output(CheckoutSchema);

export const paymentReceivedContract = oc
	.input(PaymentReceivedInputSchema)
	.output(z.object({ ok: z.boolean() }));

export const checkout = {
	get: getCheckoutContract,
	create: createCheckoutContract,
	confirm: confirmCheckoutContract,
	registerInvoice: registerInvoiceContract,
	paymentReceived: paymentReceivedContract,
};
