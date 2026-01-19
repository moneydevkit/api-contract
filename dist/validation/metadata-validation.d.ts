import { Result } from '../lib/utils.js';

declare const MAX_METADATA_SIZE_BYTES = 1024;
declare const MAX_KEY_LENGTH = 100;
declare const MAX_KEY_COUNT = 50;
type MetadataValidationError = {
    type: string;
    message: string;
};
/**
 * Validates checkout metadata against all security constraints.
 * Returns all validation errors found, allowing users to fix multiple issues at once.
 *
 * @param metadata - The metadata object to validate, or undefined
 * @returns A Result containing either success (ok: true) or an array of validation errors (ok: false)
 */
declare function validateMetadata(metadata: Record<string, string> | undefined): Result<void, MetadataValidationError[]>;

export { MAX_KEY_COUNT, MAX_KEY_LENGTH, MAX_METADATA_SIZE_BYTES, type MetadataValidationError, validateMetadata };
