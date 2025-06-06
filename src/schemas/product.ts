import { z } from "zod";

export const CheckoutProductPriceSchema = z.object({
	id: z.string(),
	amountType: z.enum(["FIXED", "CUSTOM", "FREE", "METERED"]),
	priceAmount: z.number().nullable(),
	minimumAmount: z.number().nullable(),
	maximumAmount: z.number().nullable(),
	presetAmount: z.number().nullable(),
	unitAmount: z.number().nullable(),
	capAmount: z.number().nullable(),
	meterId: z.string().nullable(),
});

export const CheckoutProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
	prices: z.array(CheckoutProductPriceSchema),
});
