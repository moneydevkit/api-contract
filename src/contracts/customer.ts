import { oc } from "@orpc/contract";
import { z } from "zod";
import { CustomerSchema } from "../schemas/customer";
import {
	PaginationInputSchema,
	PaginationOutputSchema,
} from "../schemas/pagination";

const ListCustomersInputSchema = PaginationInputSchema;
const ListCustomersOutputSchema = PaginationOutputSchema.extend({
	customers: z.array(CustomerSchema),
});

const GetCustomerInputSchema = z.object({ id: z.string() });

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

export const listCustomersContract = oc
	.input(ListCustomersInputSchema)
	.output(ListCustomersOutputSchema);

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
	.output(z.object({ ok: z.literal(true) }));

export const customer = {
	list: listCustomersContract,
	get: getCustomerContract,
	create: createCustomerContract,
	update: updateCustomerContract,
	delete: deleteCustomerContract,
};
