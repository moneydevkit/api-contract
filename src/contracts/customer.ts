import { oc } from "@orpc/contract";
import { z } from "zod";
import {
	CustomerSchema,
	CustomerWithSubscriptionsSchema,
	GetCustomerInputSchema as SdkGetCustomerInputSchema,
} from "../schemas/customer";
import {
	PaginatedInputSchema,
	PaginationOutputSchema,
} from "../schemas/pagination";

// Simple list (no pagination)
export const ListCustomersOutputSchema = z.object({
	customers: z.array(CustomerSchema),
});
export type ListCustomersOutput = z.infer<typeof ListCustomersOutputSchema>;

// Paginated list (no additional filters for customers)
export const ListCustomersPaginatedInputSchema = PaginatedInputSchema;
export type ListCustomersPaginatedInput = z.infer<
	typeof ListCustomersPaginatedInputSchema
>;

export const ListCustomersPaginatedOutputSchema = PaginationOutputSchema.extend(
	{
		customers: z.array(CustomerSchema),
	},
);
export type ListCustomersPaginatedOutput = z.infer<
	typeof ListCustomersPaginatedOutputSchema
>;

// Flexible customer lookup - exactly one of id, email, or externalId
// Base shape without refinement (for MCP tool schemas)
export const CustomerLookupBaseSchema = z.object({
	id: z.string().optional().describe("The customer ID"),
	email: z.string().optional().describe("The customer email address"),
	externalId: z
		.string()
		.optional()
		.describe("The external ID from your system"),
});

// With refinement for runtime validation
export const CustomerLookupInputSchema = CustomerLookupBaseSchema.refine(
	(data) => [data.id, data.email, data.externalId].filter(Boolean).length === 1,
	{ message: "Exactly one of id, email, or externalId must be provided" },
);
export type CustomerLookupInput = z.infer<typeof CustomerLookupInputSchema>;

// Aliases for specific operations
export const GetCustomerInputSchema = CustomerLookupBaseSchema;
export type GetCustomerInput = z.infer<typeof GetCustomerInputSchema>;

export const DeleteCustomerInputSchema = CustomerLookupBaseSchema;
export type DeleteCustomerInput = z.infer<typeof DeleteCustomerInputSchema>;

export const CreateCustomerInputSchema = z.object({
	name: z.string().min(1).describe("Customer name"),
	email: z.string().email().describe("Customer email address"),
	externalId: z
		.string()
		.optional()
		.describe("External ID from your system for linking"),
});

export const UpdateCustomerInputSchema = z.object({
	id: z.string().describe("The customer ID to update"),
	name: z.string().optional().describe("New customer name"),
	email: z.string().email().optional().describe("New customer email address"),
	externalId: z
		.string()
		.optional()
		.describe("External ID from your system for linking"),
	userMetadata: z
		.record(z.string(), z.string())
		.optional()
		.describe("Custom metadata key-value pairs"),
});

export type CreateCustomerInput = z.infer<typeof CreateCustomerInputSchema>;
export type UpdateCustomerInput = z.infer<typeof UpdateCustomerInputSchema>;

// SDK contract - uses flexible lookup (externalId/email/customerId)
export const getSdkCustomerContract = oc
	.input(SdkGetCustomerInputSchema)
	.output(CustomerWithSubscriptionsSchema);

// Contracts
export const listCustomersContract = oc
	.input(z.object({}))
	.output(ListCustomersOutputSchema);

export const listCustomersPaginatedContract = oc
	.input(ListCustomersPaginatedInputSchema)
	.output(ListCustomersPaginatedOutputSchema);

export const getCustomerContract = oc
	.input(GetCustomerInputSchema)
	.output(CustomerSchema);

export const createCustomerContract = oc
	.input(CreateCustomerInputSchema)
	.output(CustomerSchema);

export const updateCustomerContract = oc
	.input(UpdateCustomerInputSchema)
	.output(CustomerSchema);

export const deleteCustomerContract = oc
	.input(DeleteCustomerInputSchema)
	.output(z.void());

export const customer = {
	list: listCustomersContract,
	listPaginated: listCustomersPaginatedContract,
	get: getCustomerContract,
	getSdk: getSdkCustomerContract,
	create: createCustomerContract,
	update: updateCustomerContract,
	delete: deleteCustomerContract,
};
