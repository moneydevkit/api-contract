// src/schemas/currency.ts
import { z } from "zod";
var CurrencySchema = z.enum(["USD", "SAT"]);

export {
  CurrencySchema
};
