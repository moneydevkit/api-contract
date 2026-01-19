import { z } from 'zod';

declare const BaseInvoiceSchema: z.ZodObject<{
    invoice: z.ZodString;
    expiresAt: z.ZodDate;
    paymentHash: z.ZodString;
    amountSats: z.ZodNullable<z.ZodNumber>;
    amountSatsReceived: z.ZodNullable<z.ZodNumber>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    fiatAmount: z.ZodNullable<z.ZodNumber>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number | null;
    expiresAt: Date;
    btcPrice: number | null;
    amountSatsReceived: number | null;
    fiatAmount: number | null;
}, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number | null;
    expiresAt: Date;
    btcPrice: number | null;
    amountSatsReceived: number | null;
    fiatAmount: number | null;
}>;
declare const FixedAmountPendingInvoiceSchema: z.ZodObject<{
    invoice: z.ZodString;
    expiresAt: z.ZodDate;
    paymentHash: z.ZodString;
    amountSatsReceived: z.ZodNullable<z.ZodNumber>;
    currency: z.ZodEnum<["USD", "SAT"]>;
} & {
    amountSats: z.ZodNumber;
    fiatAmount: z.ZodNumber;
    btcPrice: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number;
    expiresAt: Date;
    btcPrice: number;
    amountSatsReceived: number | null;
    fiatAmount: number;
}, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number;
    expiresAt: Date;
    btcPrice: number;
    amountSatsReceived: number | null;
    fiatAmount: number;
}>;
declare const DynamicAmountPendingInvoiceSchema: z.ZodObject<{
    invoice: z.ZodString;
    expiresAt: z.ZodDate;
    paymentHash: z.ZodString;
    amountSats: z.ZodNullable<z.ZodNumber>;
    amountSatsReceived: z.ZodNullable<z.ZodNumber>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    fiatAmount: z.ZodNullable<z.ZodNumber>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number | null;
    expiresAt: Date;
    btcPrice: number | null;
    amountSatsReceived: number | null;
    fiatAmount: number | null;
}, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number | null;
    expiresAt: Date;
    btcPrice: number | null;
    amountSatsReceived: number | null;
    fiatAmount: number | null;
}>;
declare const PaidInvoiceSchema: z.ZodObject<{
    invoice: z.ZodString;
    expiresAt: z.ZodDate;
    paymentHash: z.ZodString;
    currency: z.ZodEnum<["USD", "SAT"]>;
    amountSats: z.ZodNumber;
    fiatAmount: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    amountSatsReceived: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number;
    expiresAt: Date;
    btcPrice: number;
    amountSatsReceived: number;
    fiatAmount: number;
}, {
    currency: "USD" | "SAT";
    invoice: string;
    paymentHash: string;
    amountSats: number;
    expiresAt: Date;
    btcPrice: number;
    amountSatsReceived: number;
    fiatAmount: number;
}>;

export { BaseInvoiceSchema, DynamicAmountPendingInvoiceSchema, FixedAmountPendingInvoiceSchema, PaidInvoiceSchema };
