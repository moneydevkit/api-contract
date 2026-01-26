import { checkout } from "./contracts/checkout";
import {
	checkouts as mcpCheckouts,
	customers as mcpCustomers,
	orders as mcpOrders,
	products as mcpProducts,
} from "./contracts/mcp";
import { onboarding } from "./contracts/onboarding";
import { products } from "./contracts/products";

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

// New MCP schemas
export type { Customer } from "./schemas/customer";
export { CustomerSchema } from "./schemas/customer";
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

// SDK contract - consumed by SDK clients
export const contract = { checkout, onboarding, products };

/**
 * MCP contract - separate namespace for MCP tools.
 * NOT consumed by SDK, only by MCP server via /rpc/mcp endpoint.
 * Uses OAuth authentication (not API key auth).
 */
export const mcpContract = {
	customers: mcpCustomers,
	products: mcpProducts,
	orders: mcpOrders,
	checkouts: mcpCheckouts,
};

export type { MetadataValidationError } from "./validation/metadata-validation";
export {
	MAX_KEY_COUNT,
	MAX_KEY_LENGTH,
	MAX_METADATA_SIZE_BYTES,
	validateMetadata,
} from "./validation/metadata-validation";
