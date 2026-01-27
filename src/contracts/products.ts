import { oc } from "@orpc/contract";
import { z } from "zod";
import { CurrencySchema } from "../schemas/currency";
import { ProductPriceInputSchema } from "../schemas/product-price-input";

export const ProductPriceSchema = z.object({
	id: z.string(),
	amountType: z.enum(["FIXED", "CUSTOM"]),
	priceAmount: z.number().nullable(),
	currency: CurrencySchema,
});

// Products have a prices array to allow future support of metered pricing
// (e.g., base subscription + usage-based charges). Currently only one static price
// (FIXED/CUSTOM) is supported.
export const ProductSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string().nullable(),
	recurringInterval: z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
	prices: z.array(ProductPriceSchema),
});

export const ListProductsOutputSchema = z.object({
	products: z.array(ProductSchema),
});

export type Product = z.infer<typeof ProductSchema>;
export type ProductPrice = z.infer<typeof ProductPriceSchema>;

export const listProductsContract = oc
	.input(z.object({}).optional())
	.output(ListProductsOutputSchema);

// CRUD input schemas
const CreateProductInputSchema = z.object({
	name: z.string().min(1),
	description: z.string().optional(),
	price: ProductPriceInputSchema,
	userMetadata: z.record(z.string(), z.string()).optional(),
});

const UpdateProductInputSchema = z.object({
	id: z.string(),
	name: z.string().min(1).optional(),
	description: z.string().optional(),
	price: ProductPriceInputSchema.optional(),
	userMetadata: z.record(z.string(), z.string()).optional(),
});

export const getProductContract = oc
	.input(z.object({ id: z.string() }))
	.output(ProductSchema);

export const createProductContract = oc
	.input(CreateProductInputSchema)
	.output(ProductSchema);

export const updateProductContract = oc
	.input(UpdateProductInputSchema)
	.output(ProductSchema);

export const deleteProductContract = oc
	.input(z.object({ id: z.string() }))
	.output(z.object({ ok: z.literal(true) }));

export const products = {
	list: listProductsContract,
	get: getProductContract,
	create: createProductContract,
	update: updateProductContract,
	delete: deleteProductContract,
};
