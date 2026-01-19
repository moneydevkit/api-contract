/**
 * Generic Result type for operations that can succeed or fail.
 *
 * This is a discriminated union that provides type-safe error handling
 * without throwing exceptions. The `ok` property acts as the discriminator.
 *
 * @example
 * ```typescript
 * function divide(a: number, b: number): Result<number, string> {
 *   if (b === 0) {
 *     return { ok: false, error: 'Division by zero' }
 *   }
 *   return { ok: true, value: a / b }
 * }
 *
 * const result = divide(10, 2)
 * if (result.ok) {
 *   console.log(result.value) // TypeScript knows result.value exists
 * } else {
 *   console.error(result.error) // TypeScript knows result.error exists
 * }
 * ```
 */
type Result<T, E = Error> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
/**
 * Creates a successful Result
 */
declare function ok<T>(value: T): Result<T, never>;
/**
 * Creates a failed Result
 */
declare function err<E>(error: E): Result<never, E>;

export { type Result, err, ok };
