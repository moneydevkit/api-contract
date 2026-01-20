"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/contracts/products.ts
var products_exports = {};
__export(products_exports, {
  ListProductsOutputSchema: () => ListProductsOutputSchema,
  ProductPriceSchema: () => ProductPriceSchema,
  ProductSchema: () => ProductSchema,
  listProductsContract: () => listProductsContract,
  products: () => products
});
module.exports = __toCommonJS(products_exports);
var import_contract = require("@orpc/contract");
var import_zod2 = require("zod");

// src/schemas/currency.ts
var import_zod = require("zod");
var CurrencySchema = import_zod.z.enum(["USD", "SAT"]);

// src/contracts/products.ts
var ProductPriceSchema = import_zod2.z.object({
  id: import_zod2.z.string(),
  amountType: import_zod2.z.enum(["FIXED", "CUSTOM"]),
  priceAmount: import_zod2.z.number().nullable(),
  currency: CurrencySchema
});
var ProductSchema = import_zod2.z.object({
  id: import_zod2.z.string(),
  name: import_zod2.z.string(),
  description: import_zod2.z.string().nullable(),
  recurringInterval: import_zod2.z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
  prices: import_zod2.z.array(ProductPriceSchema)
});
var ListProductsOutputSchema = import_zod2.z.object({
  products: import_zod2.z.array(ProductSchema)
});
var listProductsContract = import_contract.oc.input(import_zod2.z.object({}).optional()).output(ListProductsOutputSchema);
var products = {
  list: listProductsContract
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ListProductsOutputSchema,
  ProductPriceSchema,
  ProductSchema,
  listProductsContract,
  products
});
