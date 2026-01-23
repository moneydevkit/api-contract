import { oc } from "@orpc/contract";
import { z } from "zod";
import {
	PaginationInputSchema,
	PaginationOutputSchema,
} from "../../schemas/pagination";
import { CustomerSchema } from "../../schemas/customer";
import { CurrencySchema } from "../../schemas/currency";

/**
 * Checkout status enum.
 * NOTE: This is "checkouts.*" namespace for read APIs (list/get),
 * distinct from "checkout.*" namespace which handles the SDK create/confirm flow.
 */
const CheckoutStatusSchema = z.enum([
	"UNCONFIRMED",
	"CONFIRMED",
	"PENDING_PAYMENT",
	"PAYMENT_RECEIVED",
	"EXPIRED",
]);

// Simplified checkout schema for MCP listing
// Note: Uses modifiedAt to match Prisma schema naming
const CheckoutListItemSchema = z.object({
	id: z.string(),
	status: CheckoutStatusSchema,
	type: z.enum(["PRODUCTS", "AMOUNT", "TOP_UP"]),
	currency: CurrencySchema,
	totalAmount: z.number().nullable(),
	customerId: z.string().nullable(),
	customer: CustomerSchema.nullable(),
	productId: z.string().nullable(),
	organizationId: z.string(),
	expiresAt: z.date(),
	createdAt: z.date(),
	modifiedAt: z.date().nullable(),
});

// Full checkout detail schema
const CheckoutDetailSchema = CheckoutListItemSchema.extend({
	userMetadata: z.record(z.string(), z.any()).nullable(),
	successUrl: z.string().nullable(),
	discountAmount: z.number().nullable(),
	netAmount: z.number().nullable(),
	taxAmount: z.number().nullable(),
});

const ListCheckoutsInputSchema = PaginationInputSchema.extend({
	status: CheckoutStatusSchema.optional(),
});

const ListCheckoutsOutputSchema = PaginationOutputSchema.extend({
	checkouts: z.array(CheckoutListItemSchema),
});

export const listCheckoutsContract = oc
	.input(ListCheckoutsInputSchema)
	.output(ListCheckoutsOutputSchema);

export const getCheckoutContract = oc
	.input(z.object({ id: z.string() }))
	.output(CheckoutDetailSchema);

export const checkouts = {
	list: listCheckoutsContract,
	get: getCheckoutContract,
};
