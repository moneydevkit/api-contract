import { z } from 'zod';

declare const ExpiredCheckoutSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"EXPIRED">;
    type: z.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
}, "strip", z.ZodTypeAny, {
    status: "EXPIRED";
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "EXPIRED";
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>;
declare const UnconfirmedCheckoutSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"UNCONFIRMED">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    status: "UNCONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "UNCONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"UNCONFIRMED">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "UNCONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "UNCONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"UNCONFIRMED">;
    type: z.ZodLiteral<"TOP_UP">;
}, "strip", z.ZodTypeAny, {
    status: "UNCONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "UNCONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>]>;
declare const ConfirmedCheckoutSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"CONFIRMED">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    status: "CONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "CONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"CONFIRMED">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "CONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "CONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"CONFIRMED">;
    type: z.ZodLiteral<"TOP_UP">;
}, "strip", z.ZodTypeAny, {
    status: "CONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "CONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>]>;
declare const PendingPaymentCheckoutSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PENDING_PAYMENT">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PENDING_PAYMENT";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PENDING_PAYMENT";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PENDING_PAYMENT">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PENDING_PAYMENT";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PENDING_PAYMENT";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
} & {
    status: z.ZodLiteral<"PENDING_PAYMENT">;
    type: z.ZodLiteral<"TOP_UP">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PENDING_PAYMENT";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "PENDING_PAYMENT";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>]>;
declare const PaymentReceivedCheckoutSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PAYMENT_RECEIVED">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PAYMENT_RECEIVED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PAYMENT_RECEIVED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PAYMENT_RECEIVED">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PAYMENT_RECEIVED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PAYMENT_RECEIVED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PAYMENT_RECEIVED">;
    type: z.ZodLiteral<"TOP_UP">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PAYMENT_RECEIVED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PAYMENT_RECEIVED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>]>;
declare const CheckoutSchema: z.ZodUnion<[z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"UNCONFIRMED">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    status: "UNCONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "UNCONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"UNCONFIRMED">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "UNCONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "UNCONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"UNCONFIRMED">;
    type: z.ZodLiteral<"TOP_UP">;
}, "strip", z.ZodTypeAny, {
    status: "UNCONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "UNCONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>]>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"CONFIRMED">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    status: "CONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "CONFIRMED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"CONFIRMED">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "CONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "CONFIRMED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"CONFIRMED">;
    type: z.ZodLiteral<"TOP_UP">;
}, "strip", z.ZodTypeAny, {
    status: "CONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "CONFIRMED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>]>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PENDING_PAYMENT">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PENDING_PAYMENT";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PENDING_PAYMENT";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PENDING_PAYMENT">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PENDING_PAYMENT";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PENDING_PAYMENT";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
} & {
    status: z.ZodLiteral<"PENDING_PAYMENT">;
    type: z.ZodLiteral<"TOP_UP">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PENDING_PAYMENT";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "PENDING_PAYMENT";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>]>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PAYMENT_RECEIVED">;
    type: z.ZodLiteral<"PRODUCTS">;
    products: z.ZodArray<z.ZodObject<{
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PAYMENT_RECEIVED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PAYMENT_RECEIVED";
    type: "PRODUCTS";
    currency: "USD" | "SAT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PAYMENT_RECEIVED">;
    type: z.ZodLiteral<"AMOUNT">;
    providedAmount: z.ZodNumber;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PAYMENT_RECEIVED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PAYMENT_RECEIVED";
    type: "AMOUNT";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    totalAmount: z.ZodNumber;
    discountAmount: z.ZodNumber;
    netAmount: z.ZodNumber;
    taxAmount: z.ZodNumber;
    invoiceAmountSats: z.ZodNumber;
    btcPrice: z.ZodNumber;
} & {
    status: z.ZodLiteral<"PAYMENT_RECEIVED">;
    type: z.ZodLiteral<"TOP_UP">;
    invoice: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    status: "PAYMENT_RECEIVED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    status: "PAYMENT_RECEIVED";
    type: "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    };
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}>]>, z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodEnum<["USD", "SAT"]>;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerData: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
    successUrl: z.ZodNullable<z.ZodString>;
    customer: z.ZodNullable<z.ZodObject<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodString, z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip">>>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    productId: z.ZodNullable<z.ZodString>;
    productPriceId: z.ZodNullable<z.ZodString>;
    customAmount: z.ZodNullable<z.ZodNumber>;
    product: z.ZodNullable<z.ZodObject<{
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
    }>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    totalAmount: z.ZodNullable<z.ZodNumber>;
    discountAmount: z.ZodNullable<z.ZodNumber>;
    netAmount: z.ZodNullable<z.ZodNumber>;
    taxAmount: z.ZodNullable<z.ZodNumber>;
    invoiceAmountSats: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    btcPrice: z.ZodNullable<z.ZodNumber>;
    invoice: z.ZodNullable<z.ZodObject<{
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
    }>>;
} & {
    status: z.ZodLiteral<"EXPIRED">;
    type: z.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
}, "strip", z.ZodTypeAny, {
    status: "EXPIRED";
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectOutputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    status: "EXPIRED";
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    currency: "USD" | "SAT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customer: z.objectInputType<{
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        externalId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.ZodString, "strip"> | null;
    requireCustomerData: string[] | null;
    productId: string | null;
    invoice: {
        currency: "USD" | "SAT";
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    } | null;
    id: string;
    createdAt: Date;
    clientSecret: string;
    organizationId: string;
    expiresAt: Date;
    userMetadata: Record<string, any> | null;
    customFieldData: Record<string, any> | null;
    customerBillingAddress: Record<string, any> | null;
    productPriceId: string | null;
    customAmount: number | null;
    product: {
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
    } | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}>]>;
type Checkout = z.infer<typeof CheckoutSchema>;

export { type Checkout, CheckoutSchema, ConfirmedCheckoutSchema, ExpiredCheckoutSchema, PaymentReceivedCheckoutSchema, PendingPaymentCheckoutSchema, UnconfirmedCheckoutSchema };
