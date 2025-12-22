import { describe, test, expect } from 'vitest';
import {
  validateMetadata,
  MAX_METADATA_SIZE_BYTES,
  MAX_KEY_LENGTH,
  MAX_KEY_COUNT,
} from '../../src/validation/metadata-validation';

describe('validateMetadata', () => {
  test('returns ok for undefined metadata', () => {
    const result = validateMetadata(undefined);
    expect(result.ok).toBe(true);
  });

  test('returns ok for empty metadata object', () => {
    const result = validateMetadata({});
    expect(result.ok).toBe(true);
  });

  test('returns ok for valid metadata', () => {
    const metadata = {
      customerName: 'John Doe',
      product: 'Lightning download',
      note: 'Fast checkout',
    };
    const result = validateMetadata(metadata);
    expect(result.ok).toBe(true);
  });

  // Size validation tests
  describe('size validation', () => {
    test('returns error for metadata exceeding 1KB limit', () => {
      const largeValue = 'x'.repeat(MAX_METADATA_SIZE_BYTES);
      const metadata = {
        data: largeValue,
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('size_exceeded');
        expect(result.error[0].message).toContain('exceeds maximum allowed size');
      }
    });

    test('handles multiple fields that together exceed limit', () => {
      const metadata = {
        field1: 'x'.repeat(600),
        field2: 'y'.repeat(600),
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('size_exceeded');
      }
    });

    test('includes actual size in error details', () => {
      const largeValue = 'x'.repeat(MAX_METADATA_SIZE_BYTES + 1);
      const metadata = {
        data: largeValue,
      };

      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('size_exceeded');
        expect(result.error[0].message).toContain('bytes');
      }
    });
  });

  // Key format tests
  describe('key format validation', () => {
    test('rejects key with special characters', () => {
      const metadata = {
        'invalid@key': 'value',
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('invalid_key_format');
        expect(result.error[0].message).toContain('invalid characters');
        expect(result.error[0].message).toContain('invalid@key');
      }
    });

    test('rejects key with spaces', () => {
      const metadata = {
        'invalid key': 'value',
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('invalid_key_format');
      }
    });

    test('rejects key with dots', () => {
      const metadata = {
        'invalid.key': 'value',
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('invalid_key_format');
      }
    });

    test('accepts valid key formats', () => {
      const metadata = {
        valid_key: 'value',
        'valid-key': 'value',
        validKey123: 'value',
        VALID_KEY: 'value',
      };
      const result = validateMetadata(metadata);
      expect(result.ok).toBe(true);
    });

    test('rejects empty key', () => {
      const metadata = {
        '': 'value',
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('invalid_key_format');
      }
    });
  });

  // Key length tests
  describe('key length validation', () => {
    test('rejects key exceeding maximum length', () => {
      const longKey = 'x'.repeat(MAX_KEY_LENGTH + 1);
      const metadata = {
        [longKey]: 'value',
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('key_too_long');
        expect(result.error[0].message).toContain('exceeds maximum length');
      }
    });

    test('accepts key at maximum length', () => {
      const maxKey = 'x'.repeat(MAX_KEY_LENGTH);
      const metadata = {
        [maxKey]: 'value',
      };
      const result = validateMetadata(metadata);
      expect(result.ok).toBe(true);
    });
  });

  // Key count tests
  describe('key count validation', () => {
    test('rejects metadata with too many keys', () => {
      const metadata: Record<string, string> = {};
      for (let i = 0; i < MAX_KEY_COUNT + 1; i++) {
        metadata[`key${i}`] = 'value';
      }
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('key_count_exceeded');
        expect(result.error[0].message).toContain('exceeds the maximum');
      }
    });

    test('accepts metadata at maximum key count', () => {
      const metadata: Record<string, string> = {};
      for (let i = 0; i < MAX_KEY_COUNT; i++) {
        metadata[`key${i}`] = 'value';
      }
      const result = validateMetadata(metadata);
      expect(result.ok).toBe(true);
    });
  });

  // Value encoding tests
  describe('value encoding validation', () => {
    test('rejects value with null bytes', () => {
      const metadata = {
        key: 'value\0with\0null',
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('control_character');
        expect(result.error[0].message).toContain('null bytes');
        expect(result.error[0].message).toContain('key');
      }
    });

    test('rejects value with control characters', () => {
      const metadata = {
        key: 'value\x01control',
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBe(1);
        expect(result.error[0].type).toBe('control_character');
      }
    });

    test('accepts value with newline', () => {
      const metadata = {
        note: 'Line 1\nLine 2',
      };
      const result = validateMetadata(metadata);
      expect(result.ok).toBe(true);
    });

    test('accepts value with tab', () => {
      const metadata = {
        note: 'Column1\tColumn2',
      };
      const result = validateMetadata(metadata);
      expect(result.ok).toBe(true);
    });

    test('accepts value with carriage return', () => {
      const metadata = {
        note: 'Line 1\rLine 2',
      };
      const result = validateMetadata(metadata);
      expect(result.ok).toBe(true);
    });

    test('accepts unicode characters', () => {
      const metadata = {
        name: 'José',
        emoji: '⚡',
        chinese: '中文',
      };
      const result = validateMetadata(metadata);
      expect(result.ok).toBe(true);
    });
  });

  // Combined validation tests
  describe('combined validation', () => {
    test('validates all constraints and returns multiple errors', () => {
      const metadata = {
        'invalid@key': 'value\x01control', // Invalid key format and control character
        'another-key': 'x'.repeat(MAX_METADATA_SIZE_BYTES), // Would exceed size
      };
      const result = validateMetadata(metadata);

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.length).toBeGreaterThanOrEqual(2);
        const errorTypes = result.error.map((e) => e.type);
        expect(errorTypes).toContain('invalid_key_format');
        expect(errorTypes).toContain('control_character');
        expect(errorTypes).toContain('size_exceeded');
      }
    });
  });
});

