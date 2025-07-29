const { findMean, findMedian, findMode } = require('./statOps');

// Using Jest for testing
describe('Statistical Operations', () => {
    describe('findMean', () => {
        it('should calculate the mean of an array of numbers', () => {
            const numbers = [1, 2, 3, 4, 5];
            const result = findMean(numbers);
            expect(result).toBe(3);
        });

        it('should throw an error for an empty array', () => {
            expect(() => findMean([])).toThrow('Input must be a non-empty array of numbers');
        });

        it('should throw an error for non-numeric values', () => {
            expect(() => findMean([1, 'a', 3])).toThrow('Invalid number: a');
        });
    });

    describe('findMedian', () => {
        it('should calculate the median of an array of numbers', () => {
            const numbers = [1, 2, 3, 4, 5];
            const result = findMedian(numbers);
            expect(result).toBe(3);
        });

        it('should return the average of the two middle numbers for an even-length array', () => {
            const numbers = [1, 2, 3, 4];
            const result = findMedian(numbers);
            expect(result).toBe(2.5);
        });

        it('should throw an error for an empty array', () => {
            expect(() => findMedian([])).toThrow('Input must be a non-empty array of numbers');
        });
    });

    describe('findMode', () => {
        it('should return the mode of an array of numbers', () => {
            const numbers = [1, 2, 2, 3];
            const result = findMode(numbers);
            expect(result).toBe(2);
        });

        it('should return multiple modes if they exist', () => {
            const numbers = [1, 1, 2, 2];
            const result = findMode(numbers);
            expect(result).toEqual([1, 2]);
        });

        it('should throw an error for an empty array', () => {
            expect(() => findMode([])).toThrow('input must be a non-empty array of numbers');
        });
    });
});