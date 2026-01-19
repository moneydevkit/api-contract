import {
  CurrencySchema
} from "./chunk-6M6LFZ3U.js";

// src/contracts/products.ts
import { oc } from "@orpc/contract";
import { z } from "zod";
var ProductPriceSchema = z.object({
  id: z.string(),
  amountType: z.enum(["FIXED", "CUSTOM", "FREE"]),
  priceAmount: z.number().nullable(),
  currency: CurrencySchema
});
var ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
  prices: z.array(ProductPriceSchema)
});
var ListProductsOutputSchema = z.object({
  products: z.array(ProductSchema)
});
var listProductsContract = oc.input(z.object({}).optional()).output(ListProductsOutputSchema);
var products = {
  list: listProductsContract
};

export {
  ProductPriceSchema,
  ProductSchema,
  ListProductsOutputSchema,
  listProductsContract,
  products
};
