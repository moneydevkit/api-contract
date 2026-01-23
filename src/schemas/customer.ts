import { z } from "zod";

/**
 * Customer schema for MCP API responses.
 * Represents a customer in the organization.
 * Note: Uses modifiedAt to match Prisma schema naming.
 */
export const CustomerSchema = z.object({
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

export type Customer = z.infer<typeof CustomerSchema>;
