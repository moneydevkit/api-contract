import * as _orpc_contract from '@orpc/contract';
import * as zod from 'zod';
export { ConfirmCheckout, CreateCheckout, PaymentReceived, RegisterInvoice } from './contracts/checkout.js';
export { BootstrapOnboarding, BootstrapOnboardingResponse, PollDeviceAuth, PollDeviceAuthResponse, StartDeviceAuth, StartDeviceAuth as StartDeviceAuthInput, StartDeviceAuthResponse } from './contracts/onboarding.js';
export { Checkout, CheckoutSchema } from './schemas/checkout.js';
export { Currency, CurrencySchema } from './schemas/currency.js';
export { ListProductsOutputSchema, Product, ProductPrice, ProductPriceSchema, ProductSchema } from './contracts/products.js';
export { MAX_KEY_COUNT, MAX_KEY_LENGTH, MAX_METADATA_SIZE_BYTES, MetadataValidationError, validateMetadata } from './validation/metadata-validation.js';
import './schemas/onboarding.js';
import './lib/utils.js';

declare const contract: {
    checkout: {
        get: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            id: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>, zod.ZodUnion<[zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, Record<never, never>, Record<never, never>>;
        create: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            nodeId: zod.ZodString;
            amount: zod.ZodOptional<zod.ZodNumber>;
            currency: zod.ZodOptional<zod.ZodEnum<["USD", "SAT"]>>;
            products: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodOptional<zod.ZodString>;
            allowDiscountCodes: zod.ZodOptional<zod.ZodBoolean>;
            metadata: zod.ZodOptional<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customer: zod.ZodOptional<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip">>>;
            requireCustomerData: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
        }, "strip", zod.ZodTypeAny, {
            nodeId: string;
            amount?: number | undefined;
            currency?: "USD" | "SAT" | undefined;
            products?: string[] | undefined;
            successUrl?: string | undefined;
            allowDiscountCodes?: boolean | undefined;
            metadata?: Record<string, any> | undefined;
            customer?: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip"> | undefined;
            requireCustomerData?: string[] | undefined;
        }, {
            nodeId: string;
            amount?: number | undefined;
            currency?: "USD" | "SAT" | undefined;
            products?: string[] | undefined;
            successUrl?: string | undefined;
            allowDiscountCodes?: boolean | undefined;
            metadata?: Record<string, any> | undefined;
            customer?: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip"> | undefined;
            requireCustomerData?: string[] | undefined;
        }>, zod.ZodUnion<[zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, Record<never, never>, Record<never, never>>;
        confirm: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            checkoutId: zod.ZodString;
            customer: zod.ZodOptional<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip">>>;
            products: zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
                productId: zod.ZodString;
                priceAmount: zod.ZodOptional<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
                productId: string;
                priceAmount?: number | undefined;
            }, {
                productId: string;
                priceAmount?: number | undefined;
            }>, "many">>;
        }, "strip", zod.ZodTypeAny, {
            checkoutId: string;
            products?: {
                productId: string;
                priceAmount?: number | undefined;
            }[] | undefined;
            customer?: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip"> | undefined;
        }, {
            checkoutId: string;
            products?: {
                productId: string;
                priceAmount?: number | undefined;
            }[] | undefined;
            customer?: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
                email: zod.ZodUnion<[zod.ZodOptional<zod.ZodString>, zod.ZodLiteral<"">]>;
                externalId: zod.ZodOptional<zod.ZodEffects<zod.ZodString, string | undefined, string>>;
            }, zod.ZodString, "strip"> | undefined;
        }>, zod.ZodUnion<[zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, Record<never, never>, Record<never, never>>;
        registerInvoice: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            nodeId: zod.ZodString;
            scid: zod.ZodString;
            checkoutId: zod.ZodString;
            invoice: zod.ZodString;
            paymentHash: zod.ZodString;
            invoiceExpiresAt: zod.ZodDate;
        }, "strip", zod.ZodTypeAny, {
            nodeId: string;
            checkoutId: string;
            scid: string;
            invoice: string;
            paymentHash: string;
            invoiceExpiresAt: Date;
        }, {
            nodeId: string;
            checkoutId: string;
            scid: string;
            invoice: string;
            paymentHash: string;
            invoiceExpiresAt: Date;
        }>, zod.ZodUnion<[zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
        } & {
            status: zod.ZodLiteral<"PENDING_PAYMENT">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            totalAmount: zod.ZodNumber;
            discountAmount: zod.ZodNumber;
            netAmount: zod.ZodNumber;
            taxAmount: zod.ZodNumber;
            invoiceAmountSats: zod.ZodNumber;
            btcPrice: zod.ZodNumber;
        } & {
            status: zod.ZodLiteral<"PAYMENT_RECEIVED">;
            type: zod.ZodLiteral<"TOP_UP">;
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodEnum<["USD", "SAT"]>;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerData: zod.ZodNullable<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customer: zod.ZodNullable<zod.ZodObject<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodString, zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">, zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip">>>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            productId: zod.ZodNullable<zod.ZodString>;
            productPriceId: zod.ZodNullable<zod.ZodString>;
            customAmount: zod.ZodNullable<zod.ZodNumber>;
            product: zod.ZodNullable<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            totalAmount: zod.ZodNullable<zod.ZodNumber>;
            discountAmount: zod.ZodNullable<zod.ZodNumber>;
            netAmount: zod.ZodNullable<zod.ZodNumber>;
            taxAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceAmountSats: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            btcPrice: zod.ZodNullable<zod.ZodNumber>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodEnum<["USD", "SAT"]>;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
            customer: zod.objectOutputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
            customer: zod.objectInputType<{
                name: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                email: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                externalId: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, zod.ZodString, "strip"> | null;
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
        }>]>, Record<never, never>, Record<never, never>>;
        paymentReceived: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            payments: zod.ZodArray<zod.ZodObject<{
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNumber;
                sandbox: zod.ZodDefault<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                paymentHash: string;
                amountSats: number;
                sandbox: boolean;
            }, {
                paymentHash: string;
                amountSats: number;
                sandbox?: boolean | undefined;
            }>, "many">;
        }, "strip", zod.ZodTypeAny, {
            payments: {
                paymentHash: string;
                amountSats: number;
                sandbox: boolean;
            }[];
        }, {
            payments: {
                paymentHash: string;
                amountSats: number;
                sandbox?: boolean | undefined;
            }[];
        }>, zod.ZodObject<{
            ok: zod.ZodBoolean;
        }, "strip", zod.ZodTypeAny, {
            ok: boolean;
        }, {
            ok: boolean;
        }>, Record<never, never>, Record<never, never>>;
    };
    onboarding: {
        startDeviceAuth: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            clientDisplayName: zod.ZodOptional<zod.ZodString>;
            webhookUrl: zod.ZodOptional<zod.ZodString>;
            forceNewWebhook: zod.ZodOptional<zod.ZodBoolean>;
        }, "strip", zod.ZodTypeAny, {
            clientDisplayName?: string | undefined;
            webhookUrl?: string | undefined;
            forceNewWebhook?: boolean | undefined;
        }, {
            clientDisplayName?: string | undefined;
            webhookUrl?: string | undefined;
            forceNewWebhook?: boolean | undefined;
        }>, zod.ZodObject<{
            deviceCode: zod.ZodString;
            userCode: zod.ZodString;
            verificationUri: zod.ZodString;
            expiresIn: zod.ZodNumber;
            interval: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
            deviceCode: string;
            userCode: string;
            verificationUri: string;
            expiresIn: number;
            interval: number;
        }, {
            deviceCode: string;
            userCode: string;
            verificationUri: string;
            expiresIn: number;
            interval: number;
        }>, Record<never, never>, Record<never, never>>;
        pollDeviceAuth: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            deviceCode: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            deviceCode: string;
        }, {
            deviceCode: string;
        }>, zod.ZodDiscriminatedUnion<"status", [zod.ZodObject<{
            status: zod.ZodLiteral<"pending">;
            expiresIn: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
            status: "pending";
            expiresIn: number;
        }, {
            status: "pending";
            expiresIn: number;
        }>, zod.ZodObject<{
            status: zod.ZodLiteral<"authorized">;
            bootstrapToken: zod.ZodString;
            expiresIn: zod.ZodOptional<zod.ZodNumber>;
        }, "strip", zod.ZodTypeAny, {
            status: "authorized";
            bootstrapToken: string;
            expiresIn?: number | undefined;
        }, {
            status: "authorized";
            bootstrapToken: string;
            expiresIn?: number | undefined;
        }>, zod.ZodObject<{
            status: zod.ZodLiteral<"expired">;
        }, "strip", zod.ZodTypeAny, {
            status: "expired";
        }, {
            status: "expired";
        }>, zod.ZodObject<{
            status: zod.ZodLiteral<"denied">;
        }, "strip", zod.ZodTypeAny, {
            status: "denied";
        }, {
            status: "denied";
        }>]>, Record<never, never>, Record<never, never>>;
        bootstrap: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            bootstrapToken: zod.ZodString;
            webhookUrl: zod.ZodOptional<zod.ZodString>;
            projectName: zod.ZodOptional<zod.ZodString>;
            forceNewWebhook: zod.ZodOptional<zod.ZodBoolean>;
        }, "strip", zod.ZodTypeAny, {
            bootstrapToken: string;
            webhookUrl?: string | undefined;
            forceNewWebhook?: boolean | undefined;
            projectName?: string | undefined;
        }, {
            bootstrapToken: string;
            webhookUrl?: string | undefined;
            forceNewWebhook?: boolean | undefined;
            projectName?: string | undefined;
        }>, zod.ZodObject<{
            apiKey: zod.ZodString;
            apiKeyPreview: zod.ZodString;
            apiKeyId: zod.ZodString;
            webhookId: zod.ZodString;
            webhookSecret: zod.ZodString;
            organizationId: zod.ZodString;
            webhookUrl: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            organizationId: string;
            webhookUrl: string;
            apiKey: string;
            apiKeyPreview: string;
            apiKeyId: string;
            webhookId: string;
            webhookSecret: string;
        }, {
            organizationId: string;
            webhookUrl: string;
            apiKey: string;
            apiKeyPreview: string;
            apiKeyId: string;
            webhookId: string;
            webhookSecret: string;
        }>, Record<never, never>, Record<never, never>>;
    };
    products: {
        list: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodOptional<zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>>, zod.ZodObject<{
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    currency: zod.ZodEnum<["USD", "SAT"]>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            }>, "many">;
        }, "strip", zod.ZodTypeAny, {
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
                    amountType: "FIXED" | "CUSTOM" | "FREE";
                }[];
            }[];
        }>, Record<never, never>, Record<never, never>>;
    };
};

export { contract };
