import { oc } from "@orpc/contract";
import { z } from "zod";
import { CheckoutSchema } from "../schemas/checkout";
import { CurrencySchema } from "../schemas/currency";

/**
 * Helper to treat empty strings as undefined (not provided).
 * This allows clients to pass empty strings without validation errors.
 */
const emptyStringToUndefined = z
	.string()
	.transform((val) => (val.trim() === "" ? undefined : val));

/**
 * Email field that accepts empty strings (treated as undefined) or valid emails.
 */
const emailOrEmpty = z.string().email().optional().or(z.literal(""));

/**
 * Valid fields that can be required at checkout time.
 * - Standard fields: 'email', 'name' (checked against customer.email/name)
 * - Any other string is a custom field (checked against customer[field])
 *
 * @example ['email'] - require email
 * @example ['email', 'name'] - require both email and name
 * @example ['email', 'company'] - require email and company
 */
export const CustomerFieldSchema = z.string().min(1);
export type CustomerField = string;

/**
 * Customer data object for checkout.
 * Flat structure - standard fields (name, email, externalId) plus any custom string fields.
 * Empty strings are treated as undefined (not provided).
 *
 * @example { name: "John", email: "john@example.com", externalId: "user_123", company: "Acme" }
 */
export const CustomerInputSchema = z
	.object({
		name: emptyStringToUndefined.optional(),
		email: emailOrEmpty,
		externalId: emptyStringToUndefined.optional(),
	})
	.catchall(z.string());

export type CustomerInput = z.infer<typeof CustomerInputSchema>;

export const CreateCheckoutInputSchema = z.object({
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
	requireCustomerData: z.array(CustomerFieldSchema).optional(),
});

export const ConfirmCheckoutInputSchema = z.object({
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
	products: z
		.array(
			z.object({
				productId: z.string(),
				priceAmount: z.number().optional(),
			}),
		)
		.max(1)
		.optional(),
});

export const ApplyDiscountCodeInputSchema = z.object({
	checkoutId: z.string(),
	discountCode: z.string(),
});

export const RegisterInvoiceInputSchema = z.object({
	nodeId: z.string(),
	scid: z.string(),
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
			sandbox: z.boolean().default(false),
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
