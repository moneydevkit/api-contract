import { oc } from "@orpc/contract";
import { z } from "zod";

export const ProductPriceSchema = z.object({
	id: z.string(),
	amountType: z.enum(["FIXED", "CUSTOM", "FREE"]),
	priceAmount: z.number().nullable(),
	currency: z.string(),
});

export const ProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
	price: ProductPriceSchema.nullable(),
});

export const ListProductsOutputSchema = z.object({
	products: z.array(ProductSchema),
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductPrice = z.infer<typeof ProductPriceSchema>;

export const listProductsContract = oc
	.input(z.object({}).optional())
	.output(ListProductsOutputSchema);

export const products = {
	list: listProductsContract,
};
