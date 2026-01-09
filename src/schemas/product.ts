import { z } from "zod";

export const CheckoutProductPriceSchema = z.object({
	id: z.string(),
	amountType: z.enum(["FIXED", "CUSTOM", "FREE"]),
	priceAmount: z.number().nullable(),
});

export const CheckoutProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
	prices: z.array(CheckoutProductPriceSchema),
});
