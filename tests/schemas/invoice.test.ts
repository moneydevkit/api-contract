import { describe, test, expect } from 'vitest';
import {
  BaseInvoiceSchema,
  FixedAmountPendingInvoiceSchema,
  DynamicAmountPendingInvoiceSchema,
  PaidInvoiceSchema,
} from '../../src/schemas/invoice';

const baseInvoiceData = {
  invoice: 'lnbc1500n1pdn4czkpp5ugdqer05qrrxuchrzkcue94th9w2xzasp9qm7d0yqcgqv5p3qjnjnqdpa2fjkzep6yprkcmm',
  expiresAt: new Date('2024-01-01T01:00:00Z'),
  paymentHash: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
  amountSats: null,
  amountSatsReceived: null,
  currency: 'USD',
  fiatAmount: null,
  btcPrice: null,
};

describe('Invoice Schemas', () => {
  describe('BaseInvoiceSchema', () => {
    test('should validate invoice with all nullable fields', () => {
      const result = BaseInvoiceSchema.safeParse(baseInvoiceData);
      expect(result.success).toBe(true);
    });

    test('should validate invoice with populated optional fields', () => {
      const invoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        amountSatsReceived: 1500,
        fiatAmount: 10.50,
        btcPrice: 65000,
      };

      const result = BaseInvoiceSchema.safeParse(invoice);
      expect(result.success).toBe(true);
    });

    test('should reject invoice without required fields', () => {
      const incompleteInvoice = {
        invoice: 'lnbc1500n1...',
        // Missing required fields
      };

      const result = BaseInvoiceSchema.safeParse(incompleteInvoice);
      expect(result.success).toBe(false);
    });

    test('should reject invalid date for expiresAt', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        expiresAt: 'not-a-date',
      };

      const result = BaseInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });

    test('should reject non-string invoice field', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        invoice: 123,
      };

      const result = BaseInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });

    test('should reject non-string currency field', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        currency: 123,
      };

      const result = BaseInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });
  });

  describe('FixedAmountPendingInvoiceSchema', () => {
    test('should validate fixed amount pending invoice', () => {
      const fixedAmountInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        fiatAmount: 10.50,
        btcPrice: 65000,
      };

      const result = FixedAmountPendingInvoiceSchema.safeParse(fixedAmountInvoice);
      expect(result.success).toBe(true);
    });

    test('should reject fixed amount invoice without amountSats', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        fiatAmount: 10.50,
        btcPrice: 65000,
      };

      const result = FixedAmountPendingInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });

    test('should reject fixed amount invoice without fiatAmount', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        btcPrice: 65000,
      };

      const result = FixedAmountPendingInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });

    test('should reject fixed amount invoice without btcPrice', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        fiatAmount: 10.50,
      };

      const result = FixedAmountPendingInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });
  });

  describe('DynamicAmountPendingInvoiceSchema', () => {
    test('should validate dynamic amount pending invoice (same as BaseInvoiceSchema)', () => {
      const result = DynamicAmountPendingInvoiceSchema.safeParse(baseInvoiceData);
      expect(result.success).toBe(true);
    });

    test('should allow null values for amount fields', () => {
      const dynamicInvoice = {
        ...baseInvoiceData,
        amountSats: null,
        fiatAmount: null,
        btcPrice: null,
      };

      const result = DynamicAmountPendingInvoiceSchema.safeParse(dynamicInvoice);
      expect(result.success).toBe(true);
    });
  });

  describe('PaidInvoiceSchema', () => {
    test('should validate paid invoice with amountSatsReceived', () => {
      const paidInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        fiatAmount: 10.50,
        btcPrice: 65000,
        amountSatsReceived: 1500,
      };

      const result = PaidInvoiceSchema.safeParse(paidInvoice);
      expect(result.success).toBe(true);
    });

    test('should reject paid invoice without amountSatsReceived', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        fiatAmount: 10.50,
        btcPrice: 65000,
      };

      const result = PaidInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });

    test('should reject paid invoice without required fixed amount fields', () => {
      const invalidInvoice = {
        ...baseInvoiceData,
        amountSatsReceived: 1500,
      };

      const result = PaidInvoiceSchema.safeParse(invalidInvoice);
      expect(result.success).toBe(false);
    });

    test('should handle overpayment scenario', () => {
      const overpaidInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        fiatAmount: 10.50,
        btcPrice: 65000,
        amountSatsReceived: 1600, // Received more than expected
      };

      const result = PaidInvoiceSchema.safeParse(overpaidInvoice);
      expect(result.success).toBe(true);
    });

    test('should handle underpayment scenario', () => {
      const underpaidInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        fiatAmount: 10.50,
        btcPrice: 65000,
        amountSatsReceived: 1400, // Received less than expected
      };

      const result = PaidInvoiceSchema.safeParse(underpaidInvoice);
      expect(result.success).toBe(true);
    });
  });

  describe('Type consistency', () => {
    test('schemas should have consistent field types', () => {
      const testInvoice = {
        ...baseInvoiceData,
        amountSats: 1500,
        fiatAmount: 10.50,
        btcPrice: 65000,
        amountSatsReceived: 1500,
      };

      // All schemas should parse the same valid data structure
      expect(BaseInvoiceSchema.safeParse(testInvoice).success).toBe(true);
      expect(FixedAmountPendingInvoiceSchema.safeParse(testInvoice).success).toBe(true);
      expect(DynamicAmountPendingInvoiceSchema.safeParse(testInvoice).success).toBe(true);
      expect(PaidInvoiceSchema.safeParse(testInvoice).success).toBe(true);
    });
  });
}); 