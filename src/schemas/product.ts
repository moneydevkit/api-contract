import { z } from "zod";
import { CurrencySchema } from "./currency";

export const CheckoutProductPriceSchema = z.object({
	id: z.string(),
	amountType: z.enum(["FIXED", "CUSTOM"]),
	priceAmount: z.number().nullable(),
	currency: CurrencySchema,
});

// Checkout products have a prices array to allow future support of metered pricing
// (e.g., base subscription + usage-based charges). Currently only one static price
// (FIXED/CUSTOM) is supported.
export const CheckoutProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
	prices: z.array(CheckoutProductPriceSchema),
});
