import * as _orpc_contract from '@orpc/contract';
import { z } from 'zod';

declare const ProductPriceSchema: z.ZodObject<{
    id: z.ZodString;
    amountType: z.ZodEnum<["FIXED", "CUSTOM"]>;
    priceAmount: z.ZodNullable<z.ZodNumber>;
    currency: z.ZodEnum<["USD", "SAT"]>;
}, "strip", z.ZodTypeAny, {
    currency: "USD" | "SAT";
    priceAmount: number | null;
    id: string;
    amountType: "FIXED" | "CUSTOM";
}, {
    currency: "USD" | "SAT";
    priceAmount: number | null;
    id: string;
    amountType: "FIXED" | "CUSTOM";
}>;
declare const ProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    recurringInterval: z.ZodNullable<z.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
    prices: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        amountType: z.ZodEnum<["FIXED", "CUSTOM"]>;
        priceAmount: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodEnum<["USD", "SAT"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "USD" | "SAT";
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM";
    }, {
        currency: "USD" | "SAT";
        priceAmount: number | null;
        id: string;
        amountType: "FIXED" | "CUSTOM";
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
        amountType: "FIXED" | "CUSTOM";
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
        amountType: "FIXED" | "CUSTOM";
    }[];
}>;
declare const ListProductsOutputSchema: z.ZodObject<{
    products: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        recurringInterval: z.ZodNullable<z.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
        prices: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amountType: z.ZodEnum<["FIXED", "CUSTOM"]>;
            priceAmount: z.ZodNullable<z.ZodNumber>;
            currency: z.ZodEnum<["USD", "SAT"]>;
        }, "strip", z.ZodTypeAny, {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
        }, {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
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
            amountType: "FIXED" | "CUSTOM";
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
            amountType: "FIXED" | "CUSTOM";
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    products: {
        name: string;
        id: string;
        description: string | null;
        recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
        prices: {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
        }[];
    }[];
}, {
    products: {
        name: string;
        id: string;
        description: string | null;
        recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
        prices: {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
        }[];
    }[];
}>;
type Product = z.infer<typeof ProductSchema>;
type ProductPrice = z.infer<typeof ProductPriceSchema>;
declare const listProductsContract: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
    products: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
        recurringInterval: z.ZodNullable<z.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
        prices: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            amountType: z.ZodEnum<["FIXED", "CUSTOM"]>;
            priceAmount: z.ZodNullable<z.ZodNumber>;
            currency: z.ZodEnum<["USD", "SAT"]>;
        }, "strip", z.ZodTypeAny, {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
        }, {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
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
            amountType: "FIXED" | "CUSTOM";
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
            amountType: "FIXED" | "CUSTOM";
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    products: {
        name: string;
        id: string;
        description: string | null;
        recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
        prices: {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
        }[];
    }[];
}, {
    products: {
        name: string;
        id: string;
        description: string | null;
        recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
        prices: {
            currency: "USD" | "SAT";
            priceAmount: number | null;
            id: string;
            amountType: "FIXED" | "CUSTOM";
        }[];
    }[];
}>, Record<never, never>, Record<never, never>>;
declare const products: {
    list: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>, z.ZodObject<{
        products: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
            recurringInterval: z.ZodNullable<z.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
            prices: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                amountType: z.ZodEnum<["FIXED", "CUSTOM"]>;
                priceAmount: z.ZodNullable<z.ZodNumber>;
                currency: z.ZodEnum<["USD", "SAT"]>;
            }, "strip", z.ZodTypeAny, {
                currency: "USD" | "SAT";
                priceAmount: number | null;
                id: string;
                amountType: "FIXED" | "CUSTOM";
            }, {
                currency: "USD" | "SAT";
                priceAmount: number | null;
                id: string;
                amountType: "FIXED" | "CUSTOM";
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
                amountType: "FIXED" | "CUSTOM";
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
                amountType: "FIXED" | "CUSTOM";
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        products: {
            name: string;
            id: string;
            description: string | null;
            recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
            prices: {
                currency: "USD" | "SAT";
                priceAmount: number | null;
                id: string;
                amountType: "FIXED" | "CUSTOM";
            }[];
        }[];
    }, {
        products: {
            name: string;
            id: string;
            description: string | null;
            recurringInterval: "MONTH" | "QUARTER" | "YEAR" | null;
            prices: {
                currency: "USD" | "SAT";
                priceAmount: number | null;
                id: string;
                amountType: "FIXED" | "CUSTOM";
            }[];
        }[];
    }>, Record<never, never>, Record<never, never>>;
};

export { ListProductsOutputSchema, type Product, type ProductPrice, ProductPriceSchema, ProductSchema, listProductsContract, products };
