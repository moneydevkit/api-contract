import { oc } from "@orpc/contract";
import { z } from "zod";
import {
	CustomerSchema,
	McpCustomerSchema,
	GetCustomerInputSchema as SdkGetCustomerInputSchema,
} from "../schemas/customer";
import {
	PaginationInputSchema,
	PaginationOutputSchema,
} from "../schemas/pagination";

// MCP-specific schemas
const ListCustomersInputSchema = PaginationInputSchema;
const ListCustomersOutputSchema = PaginationOutputSchema.extend({
	customers: z.array(McpCustomerSchema),
});

const McpGetCustomerInputSchema = z.object({ id: z.string() });

const CreateCustomerInputSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
});

const UpdateCustomerInputSchema = z.object({
	id: z.string(),
	name: z.string().optional(),
	email: z.string().email().optional(),
	userMetadata: z.record(z.string(), z.string()).optional(),
});

const DeleteCustomerInputSchema = z.object({ id: z.string() });

// SDK contract - uses flexible lookup (externalId/email/customerId)
export const getSdkCustomerContract = oc
	.input(SdkGetCustomerInputSchema)
	.output(CustomerSchema);

// MCP contracts
export const listCustomersContract = oc
	.input(ListCustomersInputSchema)
	.output(ListCustomersOutputSchema);

export const getCustomerContract = oc
	.input(McpGetCustomerInputSchema)
	.output(McpCustomerSchema);

export const createCustomerContract = oc
	.input(CreateCustomerInputSchema)
	.output(McpCustomerSchema);

export const updateCustomerContract = oc
	.input(UpdateCustomerInputSchema)
	.output(McpCustomerSchema);

export const deleteCustomerContract = oc
	.input(DeleteCustomerInputSchema)
	.output(z.object({ ok: z.literal(true) }));

export const customer = {
	list: listCustomersContract,
	get: getCustomerContract,
	getSdk: getSdkCustomerContract,
	create: createCustomerContract,
	update: updateCustomerContract,
	delete: deleteCustomerContract,
};
