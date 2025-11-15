import { checkout } from "./contracts/checkout";
import { onboarding } from "./contracts/onboarding";
export type {
	StartDeviceAuth,
	StartDeviceAuthResponse,
	PollDeviceAuth,
	PollDeviceAuthResponse,
	BootstrapOnboarding,
	BootstrapOnboardingResponse,
} from "./contracts/onboarding";

export type { StartDeviceAuth as StartDeviceAuthInput } from "./contracts/onboarding";
export { CheckoutSchema } from "./schemas/checkout";
export type {
	CreateCheckout,
	ConfirmCheckout,
	RegisterInvoice,
	PaymentReceived,
} from "./contracts/checkout";
export type { Checkout } from "./schemas/checkout";

export const contract = { checkout, onboarding };
