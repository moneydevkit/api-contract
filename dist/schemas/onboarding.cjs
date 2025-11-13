"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/schemas/onboarding.ts
var onboarding_exports = {};
__export(onboarding_exports, {
  BootstrapInputSchema: () => BootstrapInputSchema,
  BootstrapOutputSchema: () => BootstrapOutputSchema,
  PollDeviceAuthInputSchema: () => PollDeviceAuthInputSchema,
  PollDeviceAuthOutputSchema: () => PollDeviceAuthOutputSchema,
  StartDeviceAuthInputSchema: () => StartDeviceAuthInputSchema,
  StartDeviceAuthOutputSchema: () => StartDeviceAuthOutputSchema
});
module.exports = __toCommonJS(onboarding_exports);
var import_zod = require("zod");
var StartDeviceAuthInputSchema = import_zod.z.object({
  clientDisplayName: import_zod.z.string().optional(),
  webhookUrl: import_zod.z.string().url().optional(),
  forceNewWebhook: import_zod.z.boolean().optional()
});
var StartDeviceAuthOutputSchema = import_zod.z.object({
  deviceCode: import_zod.z.string(),
  userCode: import_zod.z.string(),
  verificationUri: import_zod.z.string().url(),
  expiresIn: import_zod.z.number().int().positive(),
  interval: import_zod.z.number().int().positive()
});
var PollDeviceAuthInputSchema = import_zod.z.object({
  deviceCode: import_zod.z.string()
});
var PollDeviceAuthOutputSchema = import_zod.z.discriminatedUnion("status", [
  import_zod.z.object({
    status: import_zod.z.literal("pending"),
    expiresIn: import_zod.z.number().int().nonnegative()
  }),
  import_zod.z.object({
    status: import_zod.z.literal("authorized"),
    bootstrapToken: import_zod.z.string(),
    expiresIn: import_zod.z.number().int().nonnegative().optional()
  }),
  import_zod.z.object({
    status: import_zod.z.literal("expired")
  }),
  import_zod.z.object({
    status: import_zod.z.literal("denied")
  })
]);
var BootstrapInputSchema = import_zod.z.object({
  bootstrapToken: import_zod.z.string(),
  webhookUrl: import_zod.z.string().url().optional(),
  projectName: import_zod.z.string().optional(),
  forceNewWebhook: import_zod.z.boolean().optional()
});
var BootstrapOutputSchema = import_zod.z.object({
  apiKey: import_zod.z.string(),
  apiKeyPreview: import_zod.z.string(),
  apiKeyId: import_zod.z.string(),
  webhookId: import_zod.z.string(),
  webhookSecret: import_zod.z.string(),
  organizationId: import_zod.z.string(),
  webhookUrl: import_zod.z.string().url()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BootstrapInputSchema,
  BootstrapOutputSchema,
  PollDeviceAuthInputSchema,
  PollDeviceAuthOutputSchema,
  StartDeviceAuthInputSchema,
  StartDeviceAuthOutputSchema
});
