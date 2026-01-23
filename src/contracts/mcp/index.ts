/**
 * MCP Contract namespace - separate from SDK contract.
 *
 * This contract is used by MCP tools for organization management.
 * It uses OAuth authentication (not API key auth) and provides
 * CRUD operations for customers, products, orders, and checkouts.
 *
 * NOTE: This is deliberately NOT exported to the SDK. It's only
 * consumed by the MCP server via the dedicated /rpc/mcp endpoint.
 */

export { customers } from "./customers";
export { products } from "./products";
export { orders } from "./orders";
export { checkouts } from "./checkouts";
