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
 * Returned by the customer.get endpoint.
 */
export const CustomerSchema = z.object({
	id: z.string(),
	email: z.string().nullable().optional(),
	name: z.string().nullable().optional(),
	externalId: z.string().nullable().optional(),
	subscriptions: z.array(CustomerSubscriptionSchema),
});

/**
 * Input for getting a customer.
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

export type CustomerSubscription = z.infer<typeof CustomerSubscriptionSchema>;
export type Customer = z.infer<typeof CustomerSchema>;
export type GetCustomerInput = z.infer<typeof GetCustomerInputSchema>;
