const { getSolution } = require('../solution')

const mockSum = jest.fn().mockReturnValue(42)

const mockIsOdd = jest.fn().mockReturnValue(false)

jest.mock('../Calculator', () => jest.fn().mockImplementation(function () {
    this.sum = mockSum
}))

jest.mock('../utils', () => ({
    isOdd: mockIsOdd
}))

describe('solution', () => {
    test('gives solution', () => {
        expect(getSolution()).toBe(false)
    })
})