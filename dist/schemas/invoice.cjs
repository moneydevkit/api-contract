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

// src/schemas/invoice.ts
var invoice_exports = {};
__export(invoice_exports, {
  BaseInvoiceSchema: () => BaseInvoiceSchema,
  DynamicAmountPendingInvoiceSchema: () => DynamicAmountPendingInvoiceSchema,
  FixedAmountPendingInvoiceSchema: () => FixedAmountPendingInvoiceSchema,
  PaidInvoiceSchema: () => PaidInvoiceSchema
});
module.exports = __toCommonJS(invoice_exports);
var import_zod2 = require("zod");

// src/schemas/currency.ts
var import_zod = require("zod");
var CurrencySchema = import_zod.z.enum(["USD", "SAT"]);

// src/schemas/invoice.ts
var BaseInvoiceSchema = import_zod2.z.object({
  invoice: import_zod2.z.string(),
  expiresAt: import_zod2.z.date(),
  paymentHash: import_zod2.z.string(),
  amountSats: import_zod2.z.number().nullable(),
  amountSatsReceived: import_zod2.z.number().nullable(),
  currency: CurrencySchema,
  fiatAmount: import_zod2.z.number().nullable(),
  btcPrice: import_zod2.z.number().nullable()
});
var FixedAmountPendingInvoiceSchema = BaseInvoiceSchema.extend({
  amountSats: import_zod2.z.number(),
  fiatAmount: import_zod2.z.number(),
  btcPrice: import_zod2.z.number()
});
var DynamicAmountPendingInvoiceSchema = BaseInvoiceSchema;
var PaidInvoiceSchema = FixedAmountPendingInvoiceSchema.extend({
  amountSatsReceived: import_zod2.z.number()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseInvoiceSchema,
  DynamicAmountPendingInvoiceSchema,
  FixedAmountPendingInvoiceSchema,
  PaidInvoiceSchema
});
