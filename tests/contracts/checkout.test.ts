import { describe, test, expect } from 'vitest';
import {
  checkout,
  CreateCheckoutInputSchema,
  ConfirmCheckoutInputSchema,
  ApplyDiscountCodeInputSchema,
  RegisterInvoiceInputSchema,
  PaymentReceivedInputSchema,
  GetCheckoutInputSchema,
} from '../../src/contracts/checkout';
import { CheckoutSchema } from '../../src/schemas/checkout';

describe('Checkout Contracts', () => {
  describe('Contract Structure', () => {
    test('should have all expected contract methods', () => {
      expect(checkout.get).toBeDefined();
      expect(checkout.create).toBeDefined();
      expect(checkout.confirm).toBeDefined();
      expect(checkout.registerInvoice).toBeDefined();
      expect(checkout.paymentReceived).toBeDefined();
    });

    test('should export contracts as ORPC contract objects', () => {
      // These are ORPC contracts created with oc.input().output()
      expect(typeof checkout.get).toBe('object');
      expect(typeof checkout.create).toBe('object');
      expect(typeof checkout.confirm).toBe('object');
      expect(typeof checkout.registerInvoice).toBe('object');
      expect(typeof checkout.paymentReceived).toBe('object');
    });

    test('should export input schemas separately for direct validation', () => {
      // Test that the individual input schemas are available for direct use
      expect(CreateCheckoutInputSchema).toBeDefined();
      expect(ConfirmCheckoutInputSchema).toBeDefined();
      expect(ApplyDiscountCodeInputSchema).toBeDefined();
      expect(RegisterInvoiceInputSchema).toBeDefined();
      expect(PaymentReceivedInputSchema).toBeDefined();
      expect(GetCheckoutInputSchema).toBeDefined();
    });

    test('should export CheckoutSchema for output validation', () => {
      expect(CheckoutSchema).toBeDefined();
      expect(typeof CheckoutSchema.parse).toBe('function');
    });
  });

  describe('CreateCheckoutInputSchema', () => {
    test('should validate minimal create checkout input', () => {
      const input = {
        nodeId: 'node_123',
      };
      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should validate create checkout input with all fields', () => {
      const input = {
        nodeId: 'node_123',
        amount: 1000,
        currency: 'USD',
        products: ['product_1', 'product_2'],
        successUrl: 'https://example.com/success',
        allowDiscountCodes: true,
        metadata: { orderId: 'order_123' },
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        customerIpAddress: '192.168.1.1',
        customerExternalId: 'customer_ext_123',
        requireCustomerFields: {
          customerName: true,
          customerEmail: false,
        },
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should reject invalid email format', () => {
      const input = {
        customerEmail: 'invalid-email',
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject invalid IP address format', () => {
      const input = {
        customerIpAddress: 'not-an-ip',
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject empty string for customerName', () => {
      const input = {
        customerName: '',
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject empty string for customerExternalId', () => {
      const input = {
        customerExternalId: '',
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should validate IPv4 address', () => {
      const input = {
        nodeId: 'node_123',
        customerIpAddress: '192.168.1.1',
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should validate IPv6 address', () => {
      const input = {
        nodeId: 'node_123',
        customerIpAddress: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });
  });

  describe('ConfirmCheckoutInputSchema', () => {
    test('should validate minimal confirm checkout input', () => {
      const input = {
        checkoutId: 'checkout_123',
      };

      const result = ConfirmCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should validate confirm checkout input with all fields', () => {
      const input = {
        checkoutId: 'checkout_123',
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
        customerIpAddress: '192.168.1.1',
        customerExternalId: 'customer_ext_123',
        products: [
          {
            productId: 'product_1',
            priceAmount: 500,
          },
          {
            productId: 'product_2',
          },
        ],
      };

      const result = ConfirmCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should reject confirm checkout without checkoutId', () => {
      const input = {
        customerName: 'John Doe',
      };

      const result = ConfirmCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should validate products array with optional priceAmount', () => {
      const input = {
        checkoutId: 'checkout_123',
        products: [
          { productId: 'product_1' },
          { productId: 'product_2', priceAmount: 1000 },
        ],
      };

      const result = ConfirmCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });
  });

  describe('ApplyDiscountCodeInputSchema', () => {
    test('should validate apply discount code input', () => {
      const input = {
        checkoutId: 'checkout_123',
        discountCode: 'SAVE20',
      };

      const result = ApplyDiscountCodeInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should reject without checkoutId', () => {
      const input = {
        discountCode: 'SAVE20',
      };

      const result = ApplyDiscountCodeInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject without discountCode', () => {
      const input = {
        checkoutId: 'checkout_123',
      };

      const result = ApplyDiscountCodeInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });
  });

  describe('RegisterInvoiceInputSchema', () => {
    test('should validate register invoice input', () => {
      const input = {
        checkoutId: 'checkout_123',
        nodeId: 'node_123',
        scid: '1x0x0',
        invoice: 'lnbc1500n1pdn4czkpp5ugdqer05qrrxuchrzkcue94th9w2xzasp9qm7d0yqcgqv5p3qjnjn',
        paymentHash: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        invoiceExpiresAt: new Date('2024-01-01T01:00:00Z'),
      };

      const result = RegisterInvoiceInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should reject without required fields', () => {
      const input = {
        checkoutId: 'checkout_123',
        // Missing invoice, paymentHash, invoiceExpiresAt
      };

      const result = RegisterInvoiceInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject invalid date for invoiceExpiresAt', () => {
      const input = {
        checkoutId: 'checkout_123',
        invoice: 'lnbc1500n1...',
        paymentHash: 'hash123',
        invoiceExpiresAt: 'not-a-date',
      };

      const result = RegisterInvoiceInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });
  });

  describe('PaymentReceivedInputSchema', () => {
    test('should validate payment received input', () => {
      const input = {
        payments: [{
        paymentHash: '1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
        amountSats: 1500,
        }],
      };

      const result = PaymentReceivedInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should reject without paymentHash', () => {
      const input = {
        amountSats: 1500,
      };

      const result = PaymentReceivedInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject without amountSats', () => {
      const input = {
        paymentHash: 'hash123',
      };

      const result = PaymentReceivedInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject non-number amountSats', () => {
      const input = {
        paymentHash: 'hash123',
        amountSats: 'not-a-number',
      };

      const result = PaymentReceivedInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });
  });

  describe('GetCheckoutInputSchema', () => {
    test('should validate get checkout input', () => {
      const input = {
        id: 'checkout_123',
      };

      const result = GetCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should reject without id', () => {
      const input = {};

      const result = GetCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject non-string id', () => {
      const input = {
        id: 123,
      };

      const result = GetCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });
  });

  describe('Type consistency', () => {
    test('should have consistent types between input schemas and exported types', () => {
      // This test ensures that the exported types match the actual schemas
      const createInput = {
        nodeId: 'node_123',
        amount: 1000,
        currency: 'USD',
        customerEmail: 'test@example.com',
      };

      const confirmInput = {
        checkoutId: 'checkout_123',
        customerName: 'John Doe',
      };

      const registerInput = {
        checkoutId: 'checkout_123',
        nodeId: 'node_123',
        scid: '1x0x0',
        invoice: 'lnbc123...',
        paymentHash: 'hash123',
        invoiceExpiresAt: new Date(),
      };

      const paymentInput = {
        payments: [{
        paymentHash: 'hash123',
        amountSats: 1500,
        }],
      };

      // These should all parse successfully
      expect(CreateCheckoutInputSchema.safeParse(createInput).success).toBe(true);
      expect(ConfirmCheckoutInputSchema.safeParse(confirmInput).success).toBe(true);
      expect(RegisterInvoiceInputSchema.safeParse(registerInput).success).toBe(true);
      expect(PaymentReceivedInputSchema.safeParse(paymentInput).success).toBe(true);
    });
  });
}); 