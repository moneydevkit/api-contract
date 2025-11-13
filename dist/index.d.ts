import * as _orpc_contract from '@orpc/contract';
import * as zod from 'zod';
export { BootstrapOnboarding, BootstrapOnboardingResponse, PollDeviceAuth, PollDeviceAuthResponse, StartDeviceAuth, StartDeviceAuth as StartDeviceAuthInput, StartDeviceAuthResponse } from './contracts/onboarding.js';
export { Checkout, CheckoutSchema } from './schemas/checkout.js';
export { ConfirmCheckout, CreateCheckout, PaymentReceived, RegisterInvoice } from './contracts/checkout.js';
import './schemas/onboarding.js';

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
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            customerId: zod.ZodNullable<zod.ZodString>;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, Record<never, never>, Record<never, never>>;
        create: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            nodeId: zod.ZodString;
            amount: zod.ZodOptional<zod.ZodNumber>;
            currency: zod.ZodOptional<zod.ZodString>;
            products: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
            successUrl: zod.ZodOptional<zod.ZodString>;
            allowDiscountCodes: zod.ZodOptional<zod.ZodBoolean>;
            metadata: zod.ZodOptional<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerName: zod.ZodOptional<zod.ZodString>;
            customerEmail: zod.ZodOptional<zod.ZodString>;
            customerIpAddress: zod.ZodOptional<zod.ZodString>;
            customerExternalId: zod.ZodOptional<zod.ZodString>;
            requireCustomerFields: zod.ZodOptional<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
        }, "strip", zod.ZodTypeAny, {
            nodeId: string;
            amount?: number | undefined;
            currency?: string | undefined;
            products?: string[] | undefined;
            successUrl?: string | undefined;
            allowDiscountCodes?: boolean | undefined;
            metadata?: Record<string, any> | undefined;
            customerName?: string | undefined;
            customerEmail?: string | undefined;
            customerIpAddress?: string | undefined;
            customerExternalId?: string | undefined;
            requireCustomerFields?: {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            } | undefined;
        }, {
            nodeId: string;
            amount?: number | undefined;
            currency?: string | undefined;
            products?: string[] | undefined;
            successUrl?: string | undefined;
            allowDiscountCodes?: boolean | undefined;
            metadata?: Record<string, any> | undefined;
            customerName?: string | undefined;
            customerEmail?: string | undefined;
            customerIpAddress?: string | undefined;
            customerExternalId?: string | undefined;
            requireCustomerFields?: {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            } | undefined;
        }>, zod.ZodUnion<[zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            customerId: zod.ZodNullable<zod.ZodString>;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, Record<never, never>, Record<never, never>>;
        confirm: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            checkoutId: zod.ZodString;
            customerName: zod.ZodOptional<zod.ZodString>;
            customerEmail: zod.ZodOptional<zod.ZodString>;
            customerIpAddress: zod.ZodOptional<zod.ZodString>;
            customerExternalId: zod.ZodOptional<zod.ZodString>;
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
            customerName?: string | undefined;
            customerEmail?: string | undefined;
            customerIpAddress?: string | undefined;
            customerExternalId?: string | undefined;
        }, {
            checkoutId: string;
            products?: {
                productId: string;
                priceAmount?: number | undefined;
            }[] | undefined;
            customerName?: string | undefined;
            customerEmail?: string | undefined;
            customerIpAddress?: string | undefined;
            customerExternalId?: string | undefined;
        }>, zod.ZodUnion<[zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            customerId: zod.ZodNullable<zod.ZodString>;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"PRODUCTS">;
            products: zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"AMOUNT">;
            providedAmount: zod.ZodNumber;
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"UNCONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            providedAmount: zod.ZodNullable<zod.ZodNumber>;
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoiceScid: zod.ZodNullable<zod.ZodString>;
            invoice: zod.ZodNullable<zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNullable<zod.ZodNumber>;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"CONFIRMED">;
            type: zod.ZodLiteral<"TOP_UP">;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                amountSatsReceived: zod.ZodNullable<zod.ZodNumber>;
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
            } & {
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodDiscriminatedUnion<"type", [zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
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
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
            invoice: zod.ZodObject<{
                invoice: zod.ZodString;
                expiresAt: zod.ZodDate;
                paymentHash: zod.ZodString;
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerId: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                amountSats: zod.ZodNumber;
                fiatAmount: zod.ZodNumber;
                btcPrice: zod.ZodNumber;
            } & {
                amountSatsReceived: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
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
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, zod.ZodObject<{
            id: zod.ZodString;
            createdAt: zod.ZodDate;
            clientSecret: zod.ZodString;
            organizationId: zod.ZodString;
            expiresAt: zod.ZodDate;
            userMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customFieldData: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            customerMetadata: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            currency: zod.ZodString;
            allowDiscountCodes: zod.ZodBoolean;
            requireCustomerFields: zod.ZodNullable<zod.ZodObject<{
                customerName: zod.ZodOptional<zod.ZodBoolean>;
                customerEmail: zod.ZodOptional<zod.ZodBoolean>;
            }, "strip", zod.ZodTypeAny, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }, {
                customerName?: boolean | undefined;
                customerEmail?: boolean | undefined;
            }>>;
            successUrl: zod.ZodNullable<zod.ZodString>;
            customerExternalId: zod.ZodNullable<zod.ZodString>;
            customerName: zod.ZodNullable<zod.ZodString>;
            customerEmail: zod.ZodNullable<zod.ZodString>;
            customerIpAddress: zod.ZodNullable<zod.ZodString>;
            customerBillingAddress: zod.ZodNullable<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
            products: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodString;
                description: zod.ZodNullable<zod.ZodString>;
                recurringInterval: zod.ZodNullable<zod.ZodEnum<["MONTH", "QUARTER", "YEAR"]>>;
                prices: zod.ZodArray<zod.ZodObject<{
                    id: zod.ZodString;
                    amountType: zod.ZodEnum<["FIXED", "CUSTOM", "FREE", "METERED"]>;
                    priceAmount: zod.ZodNullable<zod.ZodNumber>;
                    minimumAmount: zod.ZodNullable<zod.ZodNumber>;
                    maximumAmount: zod.ZodNullable<zod.ZodNumber>;
                    presetAmount: zod.ZodNullable<zod.ZodNumber>;
                    unitAmount: zod.ZodNullable<zod.ZodNumber>;
                    capAmount: zod.ZodNullable<zod.ZodNumber>;
                    meterId: zod.ZodNullable<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
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
            }, "strip", zod.ZodTypeAny, {
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
                currency: zod.ZodString;
                fiatAmount: zod.ZodNullable<zod.ZodNumber>;
                btcPrice: zod.ZodNullable<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
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
            status: zod.ZodLiteral<"EXPIRED">;
            customerId: zod.ZodNullable<zod.ZodString>;
            type: zod.ZodEnum<["PRODUCTS", "AMOUNT", "TOP_UP"]>;
        }, "strip", zod.ZodTypeAny, {
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
        }>]>, Record<never, never>, Record<never, never>>;
        paymentReceived: _orpc_contract.ContractProcedureBuilderWithInputOutput<zod.ZodObject<{
            payments: zod.ZodArray<zod.ZodObject<{
                paymentHash: zod.ZodString;
                amountSats: zod.ZodNumber;
            }, "strip", zod.ZodTypeAny, {
                paymentHash: string;
                amountSats: number;
            }, {
                paymentHash: string;
                amountSats: number;
            }>, "many">;
        }, "strip", zod.ZodTypeAny, {
            payments: {
                paymentHash: string;
                amountSats: number;
            }[];
        }, {
            payments: {
                paymentHash: string;
                amountSats: number;
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
};

export { contract };
