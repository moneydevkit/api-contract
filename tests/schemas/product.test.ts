import { describe, test, expect } from 'vitest';
import {
  CheckoutProductSchema,
  CheckoutProductPriceSchema,
} from '../../src/schemas/product';

const baseProductPriceData = {
  id: 'price_123',
  amountType: 'FIXED' as const,
  priceAmount: null,
  minimumAmount: null,
  maximumAmount: null,
  presetAmount: null,
  unitAmount: null,
  capAmount: null,
  meterId: null,
};

const baseProductData = {
  id: 'product_123',
  name: 'Test Product',
  description: null,
  recurringInterval: null,
  prices: [baseProductPriceData],
};

describe('Product Schemas', () => {
  describe('CheckoutProductPriceSchema', () => {
    test('should validate price with FIXED amount type', () => {
      const fixedPrice = {
        ...baseProductPriceData,
        amountType: 'FIXED' as const,
        priceAmount: 999,
      };

      const result = CheckoutProductPriceSchema.safeParse(fixedPrice);
      expect(result.success).toBe(true);
    });

    test('should validate price with CUSTOM amount type', () => {
      const customPrice = {
        ...baseProductPriceData,
        amountType: 'CUSTOM' as const,
        minimumAmount: 100,
        maximumAmount: 10000,
        presetAmount: 500,
      };

      const result = CheckoutProductPriceSchema.safeParse(customPrice);
      expect(result.success).toBe(true);
    });

    test('should validate price with FREE amount type', () => {
      const freePrice = {
        ...baseProductPriceData,
        amountType: 'FREE' as const,
        priceAmount: 0,
      };

      const result = CheckoutProductPriceSchema.safeParse(freePrice);
      expect(result.success).toBe(true);
    });

    test('should validate price with METERED amount type', () => {
      const meteredPrice = {
        ...baseProductPriceData,
        amountType: 'METERED' as const,
        unitAmount: 50,
        capAmount: 1000,
        meterId: 'meter_123',
      };

      const result = CheckoutProductPriceSchema.safeParse(meteredPrice);
      expect(result.success).toBe(true);
    });

    test('should reject invalid amount type', () => {
      const invalidPrice = {
        ...baseProductPriceData,
        amountType: 'INVALID_TYPE' as any,
      };

      const result = CheckoutProductPriceSchema.safeParse(invalidPrice);
      expect(result.success).toBe(false);
    });

    test('should reject price without required id', () => {
      const priceWithoutId = {
        ...baseProductPriceData,
        id: undefined,
      };

      const result = CheckoutProductPriceSchema.safeParse(priceWithoutId);
      expect(result.success).toBe(false);
    });

    test('should allow null values for optional amount fields', () => {
      const priceWithNulls = {
        ...baseProductPriceData,
        priceAmount: null,
        minimumAmount: null,
        maximumAmount: null,
        presetAmount: null,
        unitAmount: null,
        capAmount: null,
        meterId: null,
      };

      const result = CheckoutProductPriceSchema.safeParse(priceWithNulls);
      expect(result.success).toBe(true);
    });

    test('should reject non-number values for amount fields', () => {
      const invalidPrice = {
        ...baseProductPriceData,
        priceAmount: 'not-a-number',
      };

      const result = CheckoutProductPriceSchema.safeParse(invalidPrice);
      expect(result.success).toBe(false);
    });

    test('should reject non-string meterId', () => {
      const invalidPrice = {
        ...baseProductPriceData,
        meterId: 123,
      };

      const result = CheckoutProductPriceSchema.safeParse(invalidPrice);
      expect(result.success).toBe(false);
    });
  });

  describe('CheckoutProductSchema', () => {
    test('should validate product with basic information', () => {
      const result = CheckoutProductSchema.safeParse(baseProductData);
      expect(result.success).toBe(true);
    });

    test('should validate product with description', () => {
      const productWithDescription = {
        ...baseProductData,
        description: 'This is a test product description',
      };

      const result = CheckoutProductSchema.safeParse(productWithDescription);
      expect(result.success).toBe(true);
    });

    test('should validate product with recurring interval', () => {
      const recurringProduct = {
        ...baseProductData,
        recurringInterval: 'MONTH' as const,
      };

      const result = CheckoutProductSchema.safeParse(recurringProduct);
      expect(result.success).toBe(true);
    });

    test('should validate all recurring interval options', () => {
      const intervals = ['MONTH', 'QUARTER', 'YEAR'] as const;
      
      intervals.forEach(interval => {
        const product = {
          ...baseProductData,
          recurringInterval: interval,
        };
        
        const result = CheckoutProductSchema.safeParse(product);
        expect(result.success).toBe(true);
      });
    });

    test('should validate product with multiple prices', () => {
      const productWithMultiplePrices = {
        ...baseProductData,
        prices: [
          {
            ...baseProductPriceData,
            id: 'price_1',
            amountType: 'FIXED' as const,
            priceAmount: 999,
          },
          {
            ...baseProductPriceData,
            id: 'price_2',
            amountType: 'CUSTOM' as const,
            minimumAmount: 100,
            maximumAmount: 1000,
          },
        ],
      };

      const result = CheckoutProductSchema.safeParse(productWithMultiplePrices);
      expect(result.success).toBe(true);
    });

    test('should reject product without required id', () => {
      const productWithoutId = {
        ...baseProductData,
        id: undefined,
      };

      const result = CheckoutProductSchema.safeParse(productWithoutId);
      expect(result.success).toBe(false);
    });

    test('should reject product without required name', () => {
      const productWithoutName = {
        ...baseProductData,
        name: undefined,
      };

      const result = CheckoutProductSchema.safeParse(productWithoutName);
      expect(result.success).toBe(false);
    });

    test('should reject product without prices array', () => {
      const productWithoutPrices = {
        ...baseProductData,
        prices: undefined,
      };

      const result = CheckoutProductSchema.safeParse(productWithoutPrices);
      expect(result.success).toBe(false);
    });

    test('should allow product with empty prices array', () => {
      const productWithEmptyPrices = {
        ...baseProductData,
        prices: [],
      };

      const result = CheckoutProductSchema.safeParse(productWithEmptyPrices);
      expect(result.success).toBe(true);
    });

    test('should reject product with invalid recurring interval', () => {
      const productWithInvalidInterval = {
        ...baseProductData,
        recurringInterval: 'WEEKLY' as any,
      };

      const result = CheckoutProductSchema.safeParse(productWithInvalidInterval);
      expect(result.success).toBe(false);
    });

    test('should reject product with invalid price in prices array', () => {
      const productWithInvalidPrice = {
        ...baseProductData,
        prices: [
          {
            ...baseProductPriceData,
            amountType: 'INVALID_TYPE' as any,
          },
        ],
      };

      const result = CheckoutProductSchema.safeParse(productWithInvalidPrice);
      expect(result.success).toBe(false);
    });

    test('should handle null description properly', () => {
      const productWithNullDescription = {
        ...baseProductData,
        description: null,
      };

      const result = CheckoutProductSchema.safeParse(productWithNullDescription);
      expect(result.success).toBe(true);
    });

    test('should handle null recurringInterval properly', () => {
      const productWithNullInterval = {
        ...baseProductData,
        recurringInterval: null,
      };

      const result = CheckoutProductSchema.safeParse(productWithNullInterval);
      expect(result.success).toBe(true);
    });
  });

  describe('Integration scenarios', () => {
    test('should validate complete product with all price types', () => {
      const completeProduct = {
        id: 'product_complete',
        name: 'Complete Product',
        description: 'A product with all types of prices',
        recurringInterval: 'MONTH' as const,
        prices: [
          {
            id: 'price_fixed',
            amountType: 'FIXED' as const,
            priceAmount: 2999,
            minimumAmount: null,
            maximumAmount: null,
            presetAmount: null,
            unitAmount: null,
            capAmount: null,
            meterId: null,
          },
          {
            id: 'price_custom',
            amountType: 'CUSTOM' as const,
            priceAmount: null,
            minimumAmount: 100,
            maximumAmount: 5000,
            presetAmount: 1000,
            unitAmount: null,
            capAmount: null,
            meterId: null,
          },
          {
            id: 'price_free',
            amountType: 'FREE' as const,
            priceAmount: 0,
            minimumAmount: null,
            maximumAmount: null,
            presetAmount: null,
            unitAmount: null,
            capAmount: null,
            meterId: null,
          },
          {
            id: 'price_metered',
            amountType: 'METERED' as const,
            priceAmount: null,
            minimumAmount: null,
            maximumAmount: null,
            presetAmount: null,
            unitAmount: 50,
            capAmount: 2000,
            meterId: 'meter_usage',
          },
        ],
      };

      const result = CheckoutProductSchema.safeParse(completeProduct);
      expect(result.success).toBe(true);
    });
  });
}); 