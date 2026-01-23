import { oc } from "@orpc/contract";
import { z } from "zod";
import { OrderSchema, OrderItemSchema } from "../../schemas/order";
import {
	PaginationInputSchema,
	PaginationOutputSchema,
} from "../../schemas/pagination";
import { CustomerSchema } from "../../schemas/customer";

// Order with related data for list view
const OrderWithRelationsSchema = OrderSchema.extend({
	customer: CustomerSchema.nullable(),
	orderItems: z.array(OrderItemSchema),
});

// Order with full details for get view
const OrderDetailSchema = OrderWithRelationsSchema;

const ListOrdersInputSchema = PaginationInputSchema.extend({
	customerId: z.string().optional(),
	status: z.string().optional(), // Prisma uses String type for status
});

const ListOrdersOutputSchema = PaginationOutputSchema.extend({
	orders: z.array(OrderWithRelationsSchema),
});

export const listOrdersContract = oc
	.input(ListOrdersInputSchema)
	.output(ListOrdersOutputSchema);

export const getOrderContract = oc
	.input(z.object({ id: z.string() }))
	.output(OrderDetailSchema);

export const orders = {
	list: listOrdersContract,
	get: getOrderContract,
};
