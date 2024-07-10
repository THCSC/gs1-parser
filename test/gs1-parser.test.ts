import {describe, expect, test} from '@jest/globals';
import { parseGS1 } from '../src/index'

describe('Test main function "parseGS1"', () => {
	test('Valid input. (GTIN, Batch / Lot)', () => {
		expect(parseGS1("(01)123456789(10)2024-02"))
			.toStrictEqual({'Batch / Lot': '2024-02', GTIN: '123456789'})
	})

	test('Invalid input. Starts with ID instead of AI', () => {
		expect(() => parseGS1("123456789(10)2024-02"))
			.toThrow()
	})

	test('Invalid input. To many AIs', () => {
		expect(() => parseGS1("(01)123456789(10)2024-02(02)"))
			.toThrow()
	})

	test('Invalid input. Invalid AI', () => {
		expect(() => parseGS1("(010)123456789"))
			.toThrow()
	})
})
