import { z } from "zod";

/**
 * Pagination input schema for list operations.
 * Uses cursor-based pagination for efficient large dataset traversal.
 */
export const PaginationInputSchema = z.object({
	limit: z.number().int().min(1).max(100).default(50),
	cursor: z.string().optional(),
});

export type PaginationInput = z.infer<typeof PaginationInputSchema>;

/**
 * Pagination output schema for list operations.
 * Returns a cursor for the next page, or null if no more results.
 */
export const PaginationOutputSchema = z.object({
	nextCursor: z.string().nullable(),
});

export type PaginationOutput = z.infer<typeof PaginationOutputSchema>;
