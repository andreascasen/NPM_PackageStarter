import { sum } from '../index'

describe('index.ts', () => {
	test('Sum', () => {
		expect(sum(2, 2)).toBe(4)
	})
})