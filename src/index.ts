import { checkout } from "./contracts/checkout";
import { customer } from "./contracts/customer";
import { onboarding } from "./contracts/onboarding";
import { products } from "./contracts/products";
import { subscription } from "./contracts/subscription";

export type {
	ConfirmCheckout,
	CreateCheckout,
	PaymentReceived,
	RegisterInvoice,
} from "./contracts/checkout";
export type {
	BootstrapOnboarding,
	BootstrapOnboardingResponse,
	PollDeviceAuth,
	PollDeviceAuthResponse,
	StartDeviceAuth,
	StartDeviceAuth as StartDeviceAuthInput,
	StartDeviceAuthResponse,
} from "./contracts/onboarding";
export type {
	CancelSubscriptionInput,
	CreateRenewalCheckout,
	GetSubscriptionInput,
} from "./contracts/subscription";
export type { GetCustomerInput } from "./schemas/customer";
export type { Checkout } from "./schemas/checkout";
export { CheckoutSchema } from "./schemas/checkout";
export type { Currency } from "./schemas/currency";
export { CurrencySchema } from "./schemas/currency";
export type { Product, ProductPrice } from "./contracts/products";
export {
	ProductSchema,
	ProductPriceSchema,
	ListProductsOutputSchema,
} from "./contracts/products";
export type {
	RecurringInterval,
	Subscription,
	SubscriptionStatus,
	SubscriptionWebhookEvent,
	SubscriptionWebhookPayload,
} from "./schemas/subscription";
export {
	RecurringIntervalSchema,
	SubscriptionSchema,
	SubscriptionStatusSchema,
	SubscriptionWebhookEventSchema,
	SubscriptionWebhookPayloadSchema,
} from "./schemas/subscription";
export type {
	Customer,
	CustomerSubscription,
} from "./schemas/customer";
export {
	CustomerSchema,
	CustomerSubscriptionSchema,
	GetCustomerInputSchema,
} from "./schemas/customer";

export const contract = {
	checkout,
	customer,
	onboarding,
	products,
	subscription,
};

export type { MetadataValidationError } from "./validation/metadata-validation";
export {
	MAX_KEY_COUNT,
	MAX_KEY_LENGTH,
	MAX_METADATA_SIZE_BYTES,
	validateMetadata,
} from "./validation/metadata-validation";
