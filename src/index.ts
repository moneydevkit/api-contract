import { checkout } from "./contracts/checkout";
import { customer } from "./contracts/customer";
import { onboarding } from "./contracts/onboarding";
import { order } from "./contracts/order";
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
	McpCustomer,
} from "./schemas/customer";
export {
	CustomerSchema,
	CustomerSubscriptionSchema,
	GetCustomerInputSchema,
	McpCustomerSchema,
} from "./schemas/customer";

// New MCP schemas
export type { Order, OrderItem, OrderStatus } from "./schemas/order";
export {
	OrderSchema,
	OrderItemSchema,
	OrderStatusSchema,
} from "./schemas/order";
export type { PaginationInput, PaginationOutput } from "./schemas/pagination";
export {
	PaginationInputSchema,
	PaginationOutputSchema,
} from "./schemas/pagination";
export type {
	ProductPriceInput,
	RecurringIntervalInput,
} from "./schemas/product-price-input";
export {
	ProductPriceInputSchema,
	RecurringIntervalInputSchema,
} from "./schemas/product-price-input";

// Unified contract - contains all methods from both SDK and MCP
export const contract = {
	checkout,
	customer,
	onboarding,
	order,
	products,
	subscription,
};

// SDK contract - only the methods the SDK router implements
export const sdkContract = {
	checkout: {
		get: checkout.get,
		create: checkout.create,
		confirm: checkout.confirm,
		registerInvoice: checkout.registerInvoice,
		paymentReceived: checkout.paymentReceived,
	},
	customer: {
		get: customer.getSdk,
	},
	onboarding,
	products: {
		list: products.list,
	},
	subscription,
};

// MCP contract - only the methods the MCP router implements
export const mcpContract = {
	customer,
	order,
	checkout: {
		list: checkout.listSummary,
		get: checkout.getSummary,
	},
	products,
};

export type { MetadataValidationError } from "./validation/metadata-validation";
export {
	MAX_KEY_COUNT,
	MAX_KEY_LENGTH,
	MAX_METADATA_SIZE_BYTES,
	validateMetadata,
} from "./validation/metadata-validation";
