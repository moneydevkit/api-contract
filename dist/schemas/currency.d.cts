import { z } from 'zod';

/**
 * Supported currencies for pricing and payments.
 * - USD: US Dollars (amounts in cents)
 * - SAT: Satoshis (amounts in whole sats)
 */
declare const CurrencySchema: z.ZodEnum<["USD", "SAT"]>;
type Currency = z.infer<typeof CurrencySchema>;

export { type Currency, CurrencySchema };
