import * as _orpc_contract from '@orpc/contract';
import { z } from 'zod';
import { BootstrapInputSchema, BootstrapOutputSchema, PollDeviceAuthInputSchema, PollDeviceAuthOutputSchema, StartDeviceAuthInputSchema, StartDeviceAuthOutputSchema } from '../schemas/onboarding.cjs';

type StartDeviceAuth = z.infer<typeof StartDeviceAuthInputSchema>;
type StartDeviceAuthResponse = z.infer<typeof StartDeviceAuthOutputSchema>;
type PollDeviceAuth = z.infer<typeof PollDeviceAuthInputSchema>;
type PollDeviceAuthResponse = z.infer<typeof PollDeviceAuthOutputSchema>;
type BootstrapOnboarding = z.infer<typeof BootstrapInputSchema>;
type BootstrapOnboardingResponse = z.infer<typeof BootstrapOutputSchema>;
declare const startDeviceAuthContract: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodObject<{
    clientDisplayName: z.ZodOptional<z.ZodString>;
    webhookUrl: z.ZodOptional<z.ZodString>;
    forceNewWebhook: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    clientDisplayName?: string | undefined;
    webhookUrl?: string | undefined;
    forceNewWebhook?: boolean | undefined;
}, {
    clientDisplayName?: string | undefined;
    webhookUrl?: string | undefined;
    forceNewWebhook?: boolean | undefined;
}>, z.ZodObject<{
    deviceCode: z.ZodString;
    userCode: z.ZodString;
    verificationUri: z.ZodString;
    expiresIn: z.ZodNumber;
    interval: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
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
declare const pollDeviceAuthContract: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodObject<{
    deviceCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    deviceCode: string;
}, {
    deviceCode: string;
}>, z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
    status: z.ZodLiteral<"pending">;
    expiresIn: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "pending";
    expiresIn: number;
}, {
    status: "pending";
    expiresIn: number;
}>, z.ZodObject<{
    status: z.ZodLiteral<"authorized">;
    bootstrapToken: z.ZodString;
    expiresIn: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    status: "authorized";
    bootstrapToken: string;
    expiresIn?: number | undefined;
}, {
    status: "authorized";
    bootstrapToken: string;
    expiresIn?: number | undefined;
}>, z.ZodObject<{
    status: z.ZodLiteral<"expired">;
}, "strip", z.ZodTypeAny, {
    status: "expired";
}, {
    status: "expired";
}>, z.ZodObject<{
    status: z.ZodLiteral<"denied">;
}, "strip", z.ZodTypeAny, {
    status: "denied";
}, {
    status: "denied";
}>]>, Record<never, never>, Record<never, never>>;
declare const bootstrapContract: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodObject<{
    bootstrapToken: z.ZodString;
    webhookUrl: z.ZodOptional<z.ZodString>;
    projectName: z.ZodOptional<z.ZodString>;
    forceNewWebhook: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    bootstrapToken: string;
    webhookUrl?: string | undefined;
    forceNewWebhook?: boolean | undefined;
    projectName?: string | undefined;
}, {
    bootstrapToken: string;
    webhookUrl?: string | undefined;
    forceNewWebhook?: boolean | undefined;
    projectName?: string | undefined;
}>, z.ZodObject<{
    apiKey: z.ZodString;
    apiKeyPreview: z.ZodString;
    apiKeyId: z.ZodString;
    webhookId: z.ZodString;
    webhookSecret: z.ZodString;
    organizationId: z.ZodString;
    webhookUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
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
declare const onboarding: {
    startDeviceAuth: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        clientDisplayName: z.ZodOptional<z.ZodString>;
        webhookUrl: z.ZodOptional<z.ZodString>;
        forceNewWebhook: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        clientDisplayName?: string | undefined;
        webhookUrl?: string | undefined;
        forceNewWebhook?: boolean | undefined;
    }, {
        clientDisplayName?: string | undefined;
        webhookUrl?: string | undefined;
        forceNewWebhook?: boolean | undefined;
    }>, z.ZodObject<{
        deviceCode: z.ZodString;
        userCode: z.ZodString;
        verificationUri: z.ZodString;
        expiresIn: z.ZodNumber;
        interval: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
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
    pollDeviceAuth: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        deviceCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        deviceCode: string;
    }, {
        deviceCode: string;
    }>, z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
        status: z.ZodLiteral<"pending">;
        expiresIn: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        status: "pending";
        expiresIn: number;
    }, {
        status: "pending";
        expiresIn: number;
    }>, z.ZodObject<{
        status: z.ZodLiteral<"authorized">;
        bootstrapToken: z.ZodString;
        expiresIn: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        status: "authorized";
        bootstrapToken: string;
        expiresIn?: number | undefined;
    }, {
        status: "authorized";
        bootstrapToken: string;
        expiresIn?: number | undefined;
    }>, z.ZodObject<{
        status: z.ZodLiteral<"expired">;
    }, "strip", z.ZodTypeAny, {
        status: "expired";
    }, {
        status: "expired";
    }>, z.ZodObject<{
        status: z.ZodLiteral<"denied">;
    }, "strip", z.ZodTypeAny, {
        status: "denied";
    }, {
        status: "denied";
    }>]>, Record<never, never>, Record<never, never>>;
    bootstrap: _orpc_contract.ContractProcedureBuilderWithInputOutput<z.ZodObject<{
        bootstrapToken: z.ZodString;
        webhookUrl: z.ZodOptional<z.ZodString>;
        projectName: z.ZodOptional<z.ZodString>;
        forceNewWebhook: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        bootstrapToken: string;
        webhookUrl?: string | undefined;
        forceNewWebhook?: boolean | undefined;
        projectName?: string | undefined;
    }, {
        bootstrapToken: string;
        webhookUrl?: string | undefined;
        forceNewWebhook?: boolean | undefined;
        projectName?: string | undefined;
    }>, z.ZodObject<{
        apiKey: z.ZodString;
        apiKeyPreview: z.ZodString;
        apiKeyId: z.ZodString;
        webhookId: z.ZodString;
        webhookSecret: z.ZodString;
        organizationId: z.ZodString;
        webhookUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
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

export { type BootstrapOnboarding, type BootstrapOnboardingResponse, type PollDeviceAuth, type PollDeviceAuthResponse, type StartDeviceAuth, type StartDeviceAuthResponse, bootstrapContract, onboarding, pollDeviceAuthContract, startDeviceAuthContract };
