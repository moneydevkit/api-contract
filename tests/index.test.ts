import { describe, test, expect } from 'vitest';
import {
  CheckoutSchema,
  contract,
  type CreateCheckout,
  type ConfirmCheckout,
  type RegisterInvoice,
  type PaymentReceived,
  type Checkout,
} from '../src/index';

describe('API Contract Index', () => {
  describe('Exports', () => {
    test('should export CheckoutSchema', () => {
      expect(CheckoutSchema).toBeDefined();
      expect(typeof CheckoutSchema.parse).toBe('function');
    });

    test('should export contract object', () => {
      expect(contract).toBeDefined();
      expect(contract.checkout).toBeDefined();
    });

    test('should export checkout contract methods', () => {
      expect(contract.checkout.get).toBeDefined();
      expect(contract.checkout.create).toBeDefined();
      expect(contract.checkout.confirm).toBeDefined();
      expect(contract.checkout.registerInvoice).toBeDefined();
      expect(contract.checkout.paymentReceived).toBeDefined();
    });
  });

  describe('Schema functionality', () => {
    test('CheckoutSchema should validate valid checkout data', () => {
      const validCheckout = {
        id: 'checkout_123',
        createdAt: new Date(),
        clientSecret: 'secret_123',
        type: 'PRODUCTS' as const,
        status: 'UNCONFIRMED' as const,
        organizationId: 'org_123',
        expiresAt: new Date(),
        userMetadata: null,
        customFieldData: null,
        currency: 'USD',
        allowDiscountCodes: false,
        requireCustomerData: null,
        successUrl: null,
        customer: null,
        customerBillingAddress: null,
        products: [{
          id: 'product_123',
          name: 'Test Product',
          description: null,
          recurringInterval: null,
          prices: [{
            id: 'price_123',
            amountType: 'FIXED' as const,
            priceAmount: 1000,
            currency: 'USD',
          }],
        }],
        productId: null,
        productPriceId: null,
        customAmount: null,
        product: null,
        providedAmount: null,
        totalAmount: null,
        discountAmount: null,
        netAmount: null,
        taxAmount: null,
        invoiceAmountSats: null,
        invoiceScid: null,
        btcPrice: null,
        invoice: null,
      };

      const result = CheckoutSchema.safeParse(validCheckout);
      expect(result.success).toBe(true);
    });

    test('CheckoutSchema should reject invalid checkout data', () => {
      const invalidCheckout = {
        id: 'checkout_123',
        // Missing required fields
      };

      const result = CheckoutSchema.safeParse(invalidCheckout);
      expect(result.success).toBe(false);
    });
  });

  describe('Contract functionality', () => {
    test('should have all expected contract methods defined', () => {
      expect(contract.checkout.create).toBeDefined();
      expect(contract.checkout.get).toBeDefined();
      expect(contract.checkout.confirm).toBeDefined();
      expect(contract.checkout.registerInvoice).toBeDefined();
      expect(contract.checkout.paymentReceived).toBeDefined();
    });

    test('contracts should be ORPC contract instances', () => {
      // These are ORPC contracts created with oc.input().output()
      expect(typeof contract.checkout.create).toBe('object');
      expect(typeof contract.checkout.get).toBe('object');
      expect(typeof contract.checkout.confirm).toBe('object');
      expect(typeof contract.checkout.registerInvoice).toBe('object');
      expect(typeof contract.checkout.paymentReceived).toBe('object');
    });
  });

  describe('Type exports', () => {
    test('should be able to use exported types', () => {
      // This test ensures that the types are properly exported and can be used
      const createCheckout: CreateCheckout = {
        nodeId: 'node_123',
        amount: 1000,
        currency: 'USD',
        customerEmail: 'test@example.com',
      };

      const confirmCheckout: ConfirmCheckout = {
        checkoutId: 'checkout_123',
        customerName: 'John Doe',
      };

      const registerInvoice: RegisterInvoice = {
        nodeId: 'node_123',
        scid: 'scid_123',
        checkoutId: 'checkout_123',
        invoice: 'lnbc123...',
        paymentHash: 'hash123',
        invoiceExpiresAt: new Date(),
      };

      const paymentReceived: PaymentReceived = {
        payments: [{
          paymentHash: 'hash123',
          amountSats: 1500,
        }],
      };

      // Basic type checks - these should not throw TypeScript errors
      expect(typeof createCheckout.amount).toBe('number');
      expect(typeof confirmCheckout.checkoutId).toBe('string');
      expect(typeof registerInvoice.invoice).toBe('string');
      expect(typeof paymentReceived.payments[0].amountSats).toBe('number');
    });
  });

  describe('Integration', () => {
    test('should work together as a complete API contract', () => {
      // Test that we can create type-safe input objects that match the contract requirements
      
      // 1. Create valid input objects
      const createInput: CreateCheckout = {
        nodeId: 'node_123',
        amount: 1000,
        currency: 'USD',
        products: ['product_1'],
        customerEmail: 'test@example.com',
      };
      
      const confirmInput: ConfirmCheckout = {
        checkoutId: 'checkout_123',
        customerName: 'John Doe',
      };
      
      const registerInput: RegisterInvoice = {
        nodeId: 'node_123',
        scid: 'scid_123',
        checkoutId: 'checkout_123',
        invoice: 'lnbc123...',
        paymentHash: 'hash123',
        invoiceExpiresAt: new Date(),
      };
      
      const paymentInput: PaymentReceived = {
        payments: [{
          paymentHash: 'hash123',
          amountSats: 1500,
        }],
      };

      // 2. Verify types are consistent with contracts
      expect(typeof createInput.amount).toBe('number');
      expect(typeof confirmInput.checkoutId).toBe('string');
      expect(typeof registerInput.invoice).toBe('string');
      expect(typeof paymentInput.payments[0].amountSats).toBe('number');
      
      // 3. Verify contracts exist and are properly structured
      expect(contract.checkout.create).toBeDefined();
      expect(contract.checkout.confirm).toBeDefined();
      expect(contract.checkout.registerInvoice).toBeDefined();
      expect(contract.checkout.paymentReceived).toBeDefined();
    });
  });
}); 
