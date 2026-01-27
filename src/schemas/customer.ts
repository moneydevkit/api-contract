import { z } from "zod";
import { CurrencySchema } from "./currency";
import {
	RecurringIntervalSchema,
	SubscriptionStatusSchema,
} from "./subscription";

/**
 * Summary of a subscription for the customer response.
 * Contains the essential fields needed for displaying subscription status.
 */
export const CustomerSubscriptionSchema = z.object({
	id: z.string(),
	productId: z.string(),
	status: SubscriptionStatusSchema,
	currentPeriodStart: z.string().datetime(),
	currentPeriodEnd: z.string().datetime(),
	cancelAtPeriodEnd: z.boolean().optional(),
	amount: z.number(),
	currency: CurrencySchema,
	recurringInterval: RecurringIntervalSchema,
});

/**
 * Customer data with their subscriptions.
 * Returned by the SDK customer.get endpoint.
 */
export const CustomerSchema = z.object({
	id: z.string(),
	email: z.string().nullable().optional(),
	name: z.string().nullable().optional(),
	externalId: z.string().nullable().optional(),
	subscriptions: z.array(CustomerSubscriptionSchema),
});

/**
 * Input for getting a customer via SDK.
 * Requires exactly one of: externalId, email, or customerId.
 */
export const GetCustomerInputSchema = z
	.object({
		externalId: z.string().optional(),
		email: z.string().optional(),
		customerId: z.string().optional(),
	})
	.refine(
		(data) => {
			const fields = [data.externalId, data.email, data.customerId].filter(
				Boolean,
			);
			return fields.length === 1;
		},
		{
			message:
				"Exactly one of externalId, email, or customerId must be provided",
		},
	);

/**
 * Customer schema for MCP API responses.
 * Represents a customer in the organization (admin view).
 * Note: Uses modifiedAt to match Prisma schema naming.
 */
export const McpCustomerSchema = z.object({
	id: z.string(),
	name: z.string().nullable(),
	email: z.string().nullable(),
	emailVerified: z.boolean(),
	externalId: z.string().nullable(),
	userMetadata: z.record(z.string(), z.any()).nullable(),
	organizationId: z.string(),
	createdAt: z.date(),
	modifiedAt: z.date().nullable(),
});

export type CustomerSubscription = z.infer<typeof CustomerSubscriptionSchema>;
export type Customer = z.infer<typeof CustomerSchema>;
export type McpCustomer = z.infer<typeof McpCustomerSchema>;
export type GetCustomerInput = z.infer<typeof GetCustomerInputSchema>;
