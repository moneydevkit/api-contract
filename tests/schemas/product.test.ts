import { describe, test, expect } from "vitest";
import {
	CheckoutProductSchema,
	CheckoutProductPriceSchema,
} from "../../src/schemas/product";

const baseProductPriceData = {
	id: "price_123",
	amountType: "FIXED" as const,
	priceAmount: null,
	currency: "USD",
};

const baseProductData = {
	id: "product_123",
	name: "Test Product",
	description: null,
	recurringInterval: null,
	prices: [baseProductPriceData],
};

describe("Product Schemas", () => {
	describe("CheckoutProductPriceSchema", () => {
		test("should validate price with FIXED amount type", () => {
			const fixedPrice = {
				...baseProductPriceData,
				amountType: "FIXED" as const,
				priceAmount: 999,
			};

			const result = CheckoutProductPriceSchema.safeParse(fixedPrice);
			expect(result.success).toBe(true);
		});

		test("should validate price with CUSTOM amount type", () => {
			const customPrice = {
				...baseProductPriceData,
				amountType: "CUSTOM" as const,
				priceAmount: null,
			};

			const result = CheckoutProductPriceSchema.safeParse(customPrice);
			expect(result.success).toBe(true);
		});

		test("should validate price with FREE amount type", () => {
			const freePrice = {
				...baseProductPriceData,
				amountType: "FREE" as const,
				priceAmount: 0,
			};

			const result = CheckoutProductPriceSchema.safeParse(freePrice);
			expect(result.success).toBe(true);
		});

		test("should reject METERED amount type", () => {
			const meteredPrice = {
				...baseProductPriceData,
				amountType: "METERED" as const,
			};

			const result = CheckoutProductPriceSchema.safeParse(meteredPrice);
			expect(result.success).toBe(false);
		});

		test("should reject invalid amount type", () => {
			const invalidPrice = {
				...baseProductPriceData,
				amountType: "INVALID_TYPE" as any,
			};

			const result = CheckoutProductPriceSchema.safeParse(invalidPrice);
			expect(result.success).toBe(false);
		});

		test("should reject price without required id", () => {
			const priceWithoutId = {
				...baseProductPriceData,
				id: undefined,
			};

			const result = CheckoutProductPriceSchema.safeParse(priceWithoutId);
			expect(result.success).toBe(false);
		});

		test("should allow null priceAmount", () => {
			const priceWithNull = {
				...baseProductPriceData,
				priceAmount: null,
			};

			const result = CheckoutProductPriceSchema.safeParse(priceWithNull);
			expect(result.success).toBe(true);
		});

		test("should reject non-number values for priceAmount", () => {
			const invalidPrice = {
				...baseProductPriceData,
				priceAmount: "not-a-number",
			};

			const result = CheckoutProductPriceSchema.safeParse(invalidPrice);
			expect(result.success).toBe(false);
		});
	});

	describe("CheckoutProductSchema", () => {
		test("should validate product with basic information", () => {
			const result = CheckoutProductSchema.safeParse(baseProductData);
			expect(result.success).toBe(true);
		});

		test("should validate product with description", () => {
			const productWithDescription = {
				...baseProductData,
				description: "This is a test product description",
			};

			const result = CheckoutProductSchema.safeParse(productWithDescription);
			expect(result.success).toBe(true);
		});

		test("should validate product with recurring interval", () => {
			const recurringProduct = {
				...baseProductData,
				recurringInterval: "MONTH" as const,
			};

			const result = CheckoutProductSchema.safeParse(recurringProduct);
			expect(result.success).toBe(true);
		});

		test("should validate all recurring interval options", () => {
			const intervals = ["MONTH", "QUARTER", "YEAR"] as const;

			intervals.forEach((interval) => {
				const product = {
					...baseProductData,
					recurringInterval: interval,
				};

				const result = CheckoutProductSchema.safeParse(product);
				expect(result.success).toBe(true);
			});
		});

		test("should validate product with a custom price", () => {
			const productWithCustomPrice = {
				...baseProductData,
				prices: [
					{
						...baseProductPriceData,
						id: "price_2",
						amountType: "CUSTOM" as const,
						priceAmount: null,
					},
				],
			};

			const result = CheckoutProductSchema.safeParse(productWithCustomPrice);
			expect(result.success).toBe(true);
		});

		test("should reject product without required id", () => {
			const productWithoutId = {
				...baseProductData,
				id: undefined,
			};

			const result = CheckoutProductSchema.safeParse(productWithoutId);
			expect(result.success).toBe(false);
		});

		test("should reject product without required name", () => {
			const productWithoutName = {
				...baseProductData,
				name: undefined,
			};

			const result = CheckoutProductSchema.safeParse(productWithoutName);
			expect(result.success).toBe(false);
		});

		test("should reject product without prices field", () => {
			const productWithoutPrices = {
				...baseProductData,
				prices: undefined,
			};

			const result = CheckoutProductSchema.safeParse(productWithoutPrices);
			expect(result.success).toBe(false);
		});

		test("should validate product with empty prices array", () => {
			const productWithEmptyPrices = {
				...baseProductData,
				prices: [],
			};

			const result = CheckoutProductSchema.safeParse(productWithEmptyPrices);
			expect(result.success).toBe(true);
		});

		test("should reject product with invalid recurring interval", () => {
			const productWithInvalidInterval = {
				...baseProductData,
				recurringInterval: "WEEKLY" as any,
			};

			const result = CheckoutProductSchema.safeParse(productWithInvalidInterval);
			expect(result.success).toBe(false);
		});

		test("should reject product with invalid price in prices array", () => {
			const productWithInvalidPrice = {
				...baseProductData,
				prices: [
					{
						...baseProductPriceData,
						amountType: "INVALID_TYPE" as any,
					},
				],
			};

			const result = CheckoutProductSchema.safeParse(productWithInvalidPrice);
			expect(result.success).toBe(false);
		});

		test("should handle null description properly", () => {
			const productWithNullDescription = {
				...baseProductData,
				description: null,
			};

			const result = CheckoutProductSchema.safeParse(productWithNullDescription);
			expect(result.success).toBe(true);
		});

		test("should handle null recurringInterval properly", () => {
			const productWithNullInterval = {
				...baseProductData,
				recurringInterval: null,
			};

			const result = CheckoutProductSchema.safeParse(productWithNullInterval);
			expect(result.success).toBe(true);
		});
	});

	describe("Integration scenarios", () => {
		test("should validate products with all supported price types", () => {
			const products = [
				{
					...baseProductData,
					id: "product_fixed",
					prices: [
						{
							...baseProductPriceData,
							id: "price_fixed",
							amountType: "FIXED" as const,
							priceAmount: 2999,
						},
					],
				},
				{
					...baseProductData,
					id: "product_custom",
					prices: [
						{
							...baseProductPriceData,
							id: "price_custom",
							amountType: "CUSTOM" as const,
							priceAmount: null,
						},
					],
				},
				{
					...baseProductData,
					id: "product_free",
					prices: [
						{
							...baseProductPriceData,
							id: "price_free",
							amountType: "FREE" as const,
							priceAmount: 0,
						},
					],
				},
			];

			products.forEach((product) => {
				const result = CheckoutProductSchema.safeParse(product);
				expect(result.success).toBe(true);
			});
		});
	});
});
