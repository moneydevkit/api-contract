import { checkout } from "./contracts/checkout";
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
export type { Product, ProductPrice } from "./contracts/products";
export {
	ProductSchema,
	ProductPriceSchema,
	ListProductsOutputSchema,
} from "./contracts/products";

export const contract = { checkout, onboarding, products };

export type { MetadataValidationError } from "./validation/metadata-validation";
export {
	MAX_KEY_COUNT,
	MAX_KEY_LENGTH,
	MAX_METADATA_SIZE_BYTES,
	validateMetadata,
} from "./validation/metadata-validation";
