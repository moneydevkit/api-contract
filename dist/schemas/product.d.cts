import { z } from 'zod';

declare const CheckoutProductPriceSchema: z.ZodObject<{
    id: z.ZodString;
    amountType: z.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
    priceAmount: z.ZodNullable<z.ZodNumber>;
    currency: z.ZodEnum<["USD", "SAT"]>;
}, "strip", z.ZodTypeAny, {
    currency: "USD" | "SAT";
    priceAmount: number | null;
    id: string;
    amountType: "FIXED" | "CUSTOM" | "FREE";
}, {
    currency: "USD" | "SAT";
    priceAmount: number | null;
    id: string;
    amountType: "FIXED" | "CUSTOM" | "FREE";
}>;
declare const CheckoutProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    recurringInterval: z.ZodNullable<z.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
    prices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        amountType: z.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
        priceAmount: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodEnum<["USD", "SAT"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "USD" | "SAT";
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE";
    }, {
        currency: "USD" | "SAT";
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    description: string | null;
    recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
    prices: {
        currency: "USD" | "SAT";
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE";
    }[];
}, {
    name: string;
    id: string;
    description: string | null;
    recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
    prices: {
        currency: "USD" | "SAT";
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE";
    }[];
}>;

export { CheckoutProductPriceSchema, CheckoutProductSchema };
