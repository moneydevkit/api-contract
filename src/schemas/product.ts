import { z } from "zod";

export const CheckoutProductPriceSchema = z.object({
	id: z.string(),
	amountType: z.enum(["FIXED", "CUSTOM", "FREE"]),
	priceAmount: z.number().nullable(),
	currency: z.string(),
});

export const CheckoutProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
	price: CheckoutProductPriceSchema.nullable(),
});
