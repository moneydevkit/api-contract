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

// src/validation/metadata-validation.ts
var metadata_validation_exports = {};
__export(metadata_validation_exports, {
  MAX_KEY_COUNT: () => MAX_KEY_COUNT,
  MAX_KEY_LENGTH: () => MAX_KEY_LENGTH,
  MAX_METADATA_SIZE_BYTES: () => MAX_METADATA_SIZE_BYTES,
  validateMetadata: () => validateMetadata
});
module.exports = __toCommonJS(metadata_validation_exports);

// src/lib/utils.ts
function ok(value) {
  return { ok: true, value };
}
function err(error) {
  return { ok: false, error };
}

// src/validation/metadata-validation.ts
var MAX_METADATA_SIZE_BYTES = 1024;
var MAX_KEY_LENGTH = 100;
var MAX_KEY_COUNT = 50;
var CONTROL_CHAR_PATTERN = /[\x00-\x08\x0B-\x0C\x0E-\x1F]/;
var VALID_KEY_PATTERN = /^[a-zA-Z0-9_-]+$/;
function validateKeyFormat(key) {
  if (!VALID_KEY_PATTERN.test(key)) {
    const message = key === "" ? "Metadata keys cannot be empty" : `Metadata key "${key}" contains invalid characters. Keys must contain only letters, numbers, underscores, and hyphens.`;
    return err({ type: "invalid_key_format", message });
  }
  return ok(void 0);
}
function validateKeyLength(key) {
  if (key.length > MAX_KEY_LENGTH) {
    return err({
      type: "key_too_long",
      message: `Metadata key "${key}" exceeds maximum length of ${MAX_KEY_LENGTH} characters`
    });
  }
  return ok(void 0);
}
function validateNullBytes(key, value) {
  if (value.includes("\0")) {
    return err({
      type: "control_character",
      message: `Metadata value for key "${key}" cannot contain null bytes`
    });
  }
  return ok(void 0);
}
function validateControlCharacters(key, value) {
  if (CONTROL_CHAR_PATTERN.test(value)) {
    return err({
      type: "control_character",
      message: `Metadata value for key "${key}" cannot contain control characters`
    });
  }
  return ok(void 0);
}
function validateUtf8Encoding(key, value) {
  try {
    const encoded = new TextEncoder().encode(value);
    new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  } catch {
    return err({
      type: "invalid_encoding",
      message: `Metadata value for key "${key}" contains invalid UTF-8 encoding`
    });
  }
  return ok(void 0);
}
function validateMetadataSize(metadata) {
  const serialized = JSON.stringify(metadata);
  const sizeBytes = new TextEncoder().encode(serialized).length;
  if (sizeBytes > MAX_METADATA_SIZE_BYTES) {
    return err({
      type: "size_exceeded",
      message: `Metadata size (${sizeBytes} bytes) exceeds maximum allowed size (${MAX_METADATA_SIZE_BYTES} bytes). To fix this, reduce the size of your metadata values or remove unnecessary fields.`
    });
  }
  return ok(void 0);
}
function validateKey(key) {
  const formatCheck = validateKeyFormat(key);
  if (!formatCheck.ok) return formatCheck;
  const lengthCheck = validateKeyLength(key);
  if (!lengthCheck.ok) return lengthCheck;
  return ok(void 0);
}
function validateValue(key, value) {
  const nullByteCheck = validateNullBytes(key, value);
  if (!nullByteCheck.ok) return nullByteCheck;
  const controlCharCheck = validateControlCharacters(key, value);
  if (!controlCharCheck.ok) return controlCharCheck;
  const encodingCheck = validateUtf8Encoding(key, value);
  if (!encodingCheck.ok) return encodingCheck;
  return ok(void 0);
}
function validateMetadata(metadata) {
  if (!metadata) {
    return ok(void 0);
  }
  const errors = [];
  const keyCount = Object.keys(metadata).length;
  if (keyCount > MAX_KEY_COUNT) {
    errors.push({
      type: "key_count_exceeded",
      message: `Metadata contains ${keyCount} keys, which exceeds the maximum of ${MAX_KEY_COUNT} keys`
    });
  }
  for (const [key, value] of Object.entries(metadata)) {
    const keyCheck = validateKey(key);
    if (!keyCheck.ok) {
      errors.push(keyCheck.error);
    }
    const valueCheck = validateValue(key, value);
    if (!valueCheck.ok) {
      errors.push(valueCheck.error);
    }
  }
  const sizeCheck = validateMetadataSize(metadata);
  if (!sizeCheck.ok) {
    errors.push(sizeCheck.error);
  }
  if (errors.length > 0) {
    return err(errors);
  }
  return ok(void 0);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MAX_KEY_COUNT,
  MAX_KEY_LENGTH,
  MAX_METADATA_SIZE_BYTES,
  validateMetadata
});
