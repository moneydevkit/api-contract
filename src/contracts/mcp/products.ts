import { oc } from "@orpc/contract";
import { z } from "zod";
import {
	PaginationInputSchema,
	PaginationOutputSchema,
} from "../../schemas/pagination";
import { ProductPriceInputSchema } from "../../schemas/product-price-input";
import { ProductPriceSchema, ProductSchema } from "../products";

// Output schema - product with its active price
// Note: Uses modifiedAt to match Prisma schema naming
const ProductWithPriceSchema = ProductSchema.omit({ prices: true }).extend({
	price: ProductPriceSchema.nullable(),
	userMetadata: z.record(z.string(), z.any()).nullable(),
	createdAt: z.date(),
	modifiedAt: z.date().nullable(),
});

const ListProductsOutputSchema = PaginationOutputSchema.extend({
	products: z.array(ProductWithPriceSchema),
});

// Create input - NO benefitIds (not exposed on dashboard MCP)
const CreateProductInputSchema = z.object({
	name: z.string().min(1),
	description: z.string().optional(),
	price: ProductPriceInputSchema,
	userMetadata: z.record(z.string(), z.string()).optional(),
});

// Update input - includes price (matches dashboard updateProduct), NO benefitIds
const UpdateProductInputSchema = z.object({
	id: z.string(),
	name: z.string().min(1).optional(),
	description: z.string().optional(),
	price: ProductPriceInputSchema.optional(), // Can update pricing (immutable pattern applies)
	userMetadata: z.record(z.string(), z.string()).optional(),
});

export const listProductsContract = oc
	.input(PaginationInputSchema)
	.output(ListProductsOutputSchema);

export const getProductContract = oc
	.input(z.object({ id: z.string() }))
	.output(ProductWithPriceSchema);

export const createProductContract = oc
	.input(CreateProductInputSchema)
	.output(ProductWithPriceSchema);

export const updateProductContract = oc
	.input(UpdateProductInputSchema)
	.output(ProductWithPriceSchema);

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
