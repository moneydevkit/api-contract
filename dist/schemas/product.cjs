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

// src/schemas/product.ts
var product_exports = {};
__export(product_exports, {
  CheckoutProductPriceSchema: () => CheckoutProductPriceSchema,
  CheckoutProductSchema: () => CheckoutProductSchema
});
module.exports = __toCommonJS(product_exports);
var import_zod = require("zod");
var CheckoutProductPriceSchema = import_zod.z.object({
  id: import_zod.z.string(),
  amountType: import_zod.z.enum(["FIXED", "CUSTOM", "FREE", "METERED"]),
  priceAmount: import_zod.z.number().nullable(),
  minimumAmount: import_zod.z.number().nullable(),
  maximumAmount: import_zod.z.number().nullable(),
  presetAmount: import_zod.z.number().nullable(),
  unitAmount: import_zod.z.number().nullable(),
  capAmount: import_zod.z.number().nullable(),
  meterId: import_zod.z.string().nullable()
});
var CheckoutProductSchema = import_zod.z.object({
  id: import_zod.z.string(),
  name: import_zod.z.string(),
  description: import_zod.z.string().nullable(),
  recurringInterval: import_zod.z.enum(["MONTH", "QUARTER", "YEAR"]).nullable(),
  prices: import_zod.z.array(CheckoutProductPriceSchema)
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckoutProductPriceSchema,
  CheckoutProductSchema
});
