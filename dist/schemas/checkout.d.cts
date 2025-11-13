import { z } from 'zod';

declare const ExpiredCheckoutSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    clientSecret: z.ZodString;
    organizationId: z.ZodString;
    expiresAt: z.ZodDate;
    userMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customFieldData: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    customerId: z.ZodNullable<z.ZodString>;
    type: z.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    status: "EXPIRED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    status: "EXPIRED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "UNCONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "UNCONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "AMOUNT";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "AMOUNT";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "TOP_UP";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "TOP_UP";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        amountSats: z.ZodNullable<z.ZodNumber>;
        amountSatsReceived: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "CONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "CONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        amountSats: z.ZodNullable<z.ZodNumber>;
        amountSatsReceived: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "AMOUNT";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "AMOUNT";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "TOP_UP";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "TOP_UP";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        amountSatsReceived: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodString;
    } & {
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "PENDING_PAYMENT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "PENDING_PAYMENT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
    } & {
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "AMOUNT";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "AMOUNT";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "TOP_UP";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "TOP_UP";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        currency: z.ZodString;
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    } & {
        amountSatsReceived: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "PAYMENT_RECEIVED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "PAYMENT_RECEIVED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    } & {
        amountSatsReceived: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "AMOUNT";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "AMOUNT";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    } & {
        amountSatsReceived: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "TOP_UP";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "TOP_UP";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "UNCONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "UNCONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "AMOUNT";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "AMOUNT";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "TOP_UP";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "TOP_UP";
    status: "UNCONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    providedAmount: z.ZodNullable<z.ZodNumber>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        amountSats: z.ZodNullable<z.ZodNumber>;
        amountSatsReceived: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    }>, "atleastone">;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "CONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "CONFIRMED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    invoiceScid: z.ZodNullable<z.ZodString>;
    invoice: z.ZodNullable<z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        amountSats: z.ZodNullable<z.ZodNumber>;
        amountSatsReceived: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "AMOUNT";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "AMOUNT";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    currency: string;
    type: "TOP_UP";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "TOP_UP";
    status: "CONFIRMED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        amountSatsReceived: z.ZodNullable<z.ZodNumber>;
        currency: z.ZodString;
    } & {
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "PENDING_PAYMENT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "PENDING_PAYMENT";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
    } & {
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number | null;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "AMOUNT";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "AMOUNT";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "TOP_UP";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "TOP_UP";
    status: "PENDING_PAYMENT";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
    }>, "atleastone">;
    invoice: z.ZodObject<{
        invoice: z.ZodString;
        expiresAt: z.ZodDate;
        paymentHash: z.ZodString;
        currency: z.ZodString;
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    } & {
        amountSatsReceived: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS";
    status: "PAYMENT_RECEIVED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "PRODUCTS";
    status: "PAYMENT_RECEIVED";
    products: [{
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
    }, ...{
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
    }[]];
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    } & {
        amountSatsReceived: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "AMOUNT";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "AMOUNT";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerId: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        amountSats: z.ZodNumber;
        fiatAmount: z.ZodNumber;
        btcPrice: z.ZodNumber;
    } & {
        amountSatsReceived: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number;
        expiresAt: Date;
        btcPrice: number;
        amountSatsReceived: number;
        fiatAmount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "TOP_UP";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number;
    discountAmount: number;
    netAmount: number;
    taxAmount: number;
    invoiceAmountSats: number;
    invoiceScid: string | null;
    btcPrice: number;
}, {
    currency: string;
    type: "TOP_UP";
    status: "PAYMENT_RECEIVED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
    customerMetadata: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    currency: z.ZodString;
    allowDiscountCodes: z.ZodBoolean;
    requireCustomerFields: z.ZodNullable<z.ZodObject<{
        customerName: z.ZodOptional<z.ZodBoolean>;
        customerEmail: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }, {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    }>>;
    successUrl: z.ZodNullable<z.ZodString>;
    customerExternalId: z.ZodNullable<z.ZodString>;
    customerName: z.ZodNullable<z.ZodString>;
    customerEmail: z.ZodNullable<z.ZodString>;
    customerIpAddress: z.ZodNullable<z.ZodString>;
    customerBillingAddress: z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodAny>>;
    products: z.ZodNullable<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
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
        currency: z.ZodString;
        fiatAmount: z.ZodNullable<z.ZodNumber>;
        btcPrice: z.ZodNullable<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        invoice: string;
        paymentHash: string;
        amountSats: number | null;
        expiresAt: Date;
        btcPrice: number | null;
        amountSatsReceived: number | null;
        fiatAmount: number | null;
    }, {
        currency: string;
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
    customerId: z.ZodNullable<z.ZodString>;
    type: z.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    status: "EXPIRED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
    providedAmount: number | null;
    totalAmount: number | null;
    discountAmount: number | null;
    netAmount: number | null;
    taxAmount: number | null;
    invoiceAmountSats: number | null;
    invoiceScid: string | null;
    btcPrice: number | null;
}, {
    currency: string;
    type: "PRODUCTS" | "AMOUNT" | "TOP_UP";
    status: "EXPIRED";
    products: {
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
    }[] | null;
    successUrl: string | null;
    allowDiscountCodes: boolean;
    customerName: string | null;
    customerEmail: string | null;
    customerIpAddress: string | null;
    customerExternalId: string | null;
    requireCustomerFields: {
        customerName?: boolean | undefined;
        customerEmail?: boolean | undefined;
    } | null;
    invoice: {
        currency: string;
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
    customerMetadata: Record<string, any> | null;
    customerId: string | null;
    customerBillingAddress: Record<string, any> | null;
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
