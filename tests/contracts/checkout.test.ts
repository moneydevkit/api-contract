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
        customer: {
          name: 'John Doe',
          email: 'john@example.com',
          plan: 'pro',
        },
        requireCustomerData: ['email', 'name'],
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should validate requireCustomerData with just email', () => {
      const input = {
        nodeId: 'node_123',
        requireCustomerData: ['email'],
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should validate requireCustomerData with custom field', () => {
      const input = {
        nodeId: 'node_123',
        requireCustomerData: ['email', 'company'],
        customer: {
          email: 'john@example.com',
          company: 'Acme Inc',
        },
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should accept any non-empty string in requireCustomerData (custom fields)', () => {
      const input = {
        nodeId: 'node_123',
        requireCustomerData: ['email', 'company', 'billingAddress'],
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should reject empty string in requireCustomerData', () => {
      const input = {
        nodeId: 'node_123',
        requireCustomerData: ['email', ''],
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should reject invalid email format in customer', () => {
      const input = {
        nodeId: 'node_123',
        customer: {
          email: 'invalid-email',
        },
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(false);
    });

    test('should transform empty string for customer name to undefined', () => {
      const input = {
        nodeId: 'node_123',
        customer: {
          name: '',
        },
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.customer?.name).toBeUndefined();
      }
    });

    test('should validate create checkout with customer custom fields', () => {
      const input = {
        nodeId: 'node_123',
        customer: {
          userId: 'user_123',
          plan: 'pro',
          accountRef: 'acct_456',
        },
      };

      const result = CreateCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
    });

    test('should only accept string values in custom fields', () => {
      const validInput = {
        nodeId: 'node_123',
        customer: {
          userId: 'user_123',
          company: 'Acme Inc',
        },
      };

      const invalidInput = {
        nodeId: 'node_123',
        customer: {
          userId: 'user_123',
          count: 42, // numbers not allowed
        },
      };

      expect(CreateCheckoutInputSchema.safeParse(validInput).success).toBe(true);
      expect(CreateCheckoutInputSchema.safeParse(invalidInput).success).toBe(false);
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
        customer: {
          name: 'John Doe',
          email: 'john@example.com',
        },
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
        customer: {
          name: 'John Doe',
        },
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

    test('should accept custom fields from confirm input (form fields)', () => {
      // Custom fields are accepted at confirm time - they come from the form
      const input = {
        checkoutId: 'checkout_123',
        customer: {
          name: 'John Doe',
          billingAddress: '123 Main St',
          planId: 'pro',
        },
      };

      const result = ConfirmCheckoutInputSchema.safeParse(input);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.customer).toHaveProperty('name');
        expect(result.data.customer).toHaveProperty('billingAddress');
        expect(result.data.customer).toHaveProperty('planId');
      }
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

    test('should allow sandbox flag on payment', () => {
      const input = {
        payments: [{
          paymentHash: 'hash-sandbox',
          amountSats: 1500,
          sandbox: true,
        }],
      };

      const result = PaymentReceivedInputSchema.safeParse(input);
      expect(result.success).toBe(true);
      expect(result.success && result.data.payments[0]?.sandbox).toBe(true);
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
