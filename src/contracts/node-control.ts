import { eventIterator, oc } from "@orpc/contract";
import { z } from "zod";
import {
	InvoiceBolt11ResultSchema,
	InvoiceBolt12OfferResultSchema,
	InvoiceCreateBolt11InputSchema,
	InvoiceCreateBolt12OfferInputSchema,
	NodeEventSchema,
	PayoutInputSchema,
	PayoutResultSchema,
} from "../schemas/node-control";

/**
 * Node control contract used over a WebSocket between mdk.com (RPC client) and
 * a merchant's running lightning-js node (RPC handler).
 *
 * The connection is initiated by the merchant function dialing OUT to mdk.com
 * (Vercel does not support inbound WebSockets). mdk.com grants a single-active
 * lease per appId via a DB row before the node is constructed. See:
 * /Users/martinsaposnic/.claude/plans/delegated-jumping-peach.md
 */
export const payoutContract = oc
	.input(PayoutInputSchema)
	.output(PayoutResultSchema);

export const invoiceCreateBolt11Contract = oc
	.input(InvoiceCreateBolt11InputSchema)
	.output(InvoiceBolt11ResultSchema);

export const invoiceCreateBolt12OfferContract = oc
	.input(InvoiceCreateBolt12OfferInputSchema)
	.output(InvoiceBolt12OfferResultSchema);

/**
 * Server-pushed event stream. mdk.com calls this once per session and consumes
 * the AsyncIterable for the lifetime of the connection. Single subscriber per
 * session, buffered from session start, FIFO.
 */
export const nodeEventsContract = oc
	.input(z.void())
	.output(eventIterator(NodeEventSchema));

export const nodeControl = {
	payout: payoutContract,
	invoice: {
		createBolt11: invoiceCreateBolt11Contract,
		createBolt12Offer: invoiceCreateBolt12OfferContract,
	},
	events: nodeEventsContract,
};
