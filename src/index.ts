import { checkout } from "./contracts/checkout";
export { CheckoutSchema } from "./schemas/checkout";
export type {
	CreateCheckout,
	ConfirmCheckout,
	RegisterInvoice,
	PaymentReceived,
} from "./contracts/checkout";
export type { Checkout } from "./schemas/checkout";
export const contract = { checkout };
