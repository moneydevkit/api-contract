import { z } from 'zod';

declare const StartDeviceAuthInputSchema: z.ZodObject<{
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
}>;
declare const StartDeviceAuthOutputSchema: z.ZodObject<{
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
}>;
declare const PollDeviceAuthInputSchema: z.ZodObject<{
    deviceCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    deviceCode: string;
}, {
    deviceCode: string;
}>;
declare const PollDeviceAuthOutputSchema: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
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
}>]>;
declare const BootstrapInputSchema: z.ZodObject<{
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
}>;
declare const BootstrapOutputSchema: z.ZodObject<{
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
}>;

export { BootstrapInputSchema, BootstrapOutputSchema, PollDeviceAuthInputSchema, PollDeviceAuthOutputSchema, StartDeviceAuthInputSchema, StartDeviceAuthOutputSchema };
