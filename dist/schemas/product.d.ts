import { z } from 'zod';

declare const CheckoutProductPriceSchema: z.ZodObject<{
    id: z.ZodString;
    amountType: z.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
    priceAmount: z.ZodNullable<z.ZodNumber>;
    minimumAmount: z.ZodNullable<z.ZodNumber>;
    maximumAmount: z.ZodNullable<z.ZodNumber>;
    presetAmount: z.ZodNullable<z.ZodNumber>;
    unitAmount: z.ZodNullable<z.ZodNumber>;
    capAmount: z.ZodNullable<z.ZodNumber>;
    meterId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    priceAmount: number | null;
    id: string;
    amountType: "FIXED" | "CUSTOM" | "FREE" | "METERED";
    minimumAmount: number | null;
    maximumAmount: number | null;
    presetAmount: number | null;
    unitAmount: number | null;
    capAmount: number | null;
    meterId: string | null;
}, {
    priceAmount: number | null;
    id: string;
    amountType: "FIXED" | "CUSTOM" | "FREE" | "METERED";
    minimumAmount: number | null;
    maximumAmount: number | null;
    presetAmount: number | null;
    unitAmount: number | null;
    capAmount: number | null;
    meterId: string | null;
}>;
declare const CheckoutProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    recurringInterval: z.ZodNullable<z.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
    prices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        amountType: z.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
        priceAmount: z.ZodNullable<z.ZodNumber>;
        minimumAmount: z.ZodNullable<z.ZodNumber>;
        maximumAmount: z.ZodNullable<z.ZodNumber>;
        presetAmount: z.ZodNullable<z.ZodNumber>;
        unitAmount: z.ZodNullable<z.ZodNumber>;
        capAmount: z.ZodNullable<z.ZodNumber>;
        meterId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE" | "METERED";
        minimumAmount: number | null;
        maximumAmount: number | null;
        presetAmount: number | null;
        unitAmount: number | null;
        capAmount: number | null;
        meterId: string | null;
    }, {
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE" | "METERED";
        minimumAmount: number | null;
        maximumAmount: number | null;
        presetAmount: number | null;
        unitAmount: number | null;
        capAmount: number | null;
        meterId: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    description: string | null;
    recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
    prices: {
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE" | "METERED";
        minimumAmount: number | null;
        maximumAmount: number | null;
        presetAmount: number | null;
        unitAmount: number | null;
        capAmount: number | null;
        meterId: string | null;
    }[];
}, {
    id: string;
    name: string;
    description: string | null;
    recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
    prices: {
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM" | "FREE" | "METERED";
        minimumAmount: number | null;
        maximumAmount: number | null;
        presetAmount: number | null;
        unitAmount: number | null;
        capAmount: number | null;
        meterId: string | null;
    }[];
}>;

export { CheckoutProductPriceSchema, CheckoutProductSchema };
