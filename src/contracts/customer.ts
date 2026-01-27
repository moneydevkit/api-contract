import { oc } from "@orpc/contract";
import { CustomerSchema, GetCustomerInputSchema } from "../schemas/customer";

export const getCustomerContract = oc
	.input(GetCustomerInputSchema)
	.output(CustomerSchema);

export const customer = {
	get: getCustomerContract,
};
