import {
  CurrencySchema
} from "./chunk-6M6LFZ3U.js";

// src/schemas/product.ts
import { z } from "zod";
var CheckoutProductPriceSchema = z.object({
  id: z.string(),
  amountType: z.enum(["FIXED", "CUSTOM", "FREE"]),
  priceAmount: z.number().nullable(),
  currency: CurrencySchema
});
var CheckoutProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
  prices: z.array(CheckoutProductPriceSchema)
});

export {
  CheckoutProductPriceSchema,
  CheckoutProductSchema
};
