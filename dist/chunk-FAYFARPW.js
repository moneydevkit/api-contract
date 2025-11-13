import {
  BootstrapInputSchema,
  BootstrapOutputSchema,
  PollDeviceAuthInputSchema,
  PollDeviceAuthOutputSchema,
  StartDeviceAuthInputSchema,
  StartDeviceAuthOutputSchema
} from "./chunk-JAT3OD6J.js";

// src/contracts/onboarding.ts
import { oc } from "@orpc/contract";
var startDeviceAuthContract = oc.input(StartDeviceAuthInputSchema).output(StartDeviceAuthOutputSchema);
var pollDeviceAuthContract = oc.input(PollDeviceAuthInputSchema).output(PollDeviceAuthOutputSchema);
var bootstrapContract = oc.input(BootstrapInputSchema).output(BootstrapOutputSchema);
var onboarding = {
  startDeviceAuth: startDeviceAuthContract,
  pollDeviceAuth: pollDeviceAuthContract,
  bootstrap: bootstrapContract
};

export {
  startDeviceAuthContract,
  pollDeviceAuthContract,
  bootstrapContract,
  onboarding
};
