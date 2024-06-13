import { sumOfNumbers } from "./sum-of-numbers";

describe('sumOfNumbers', () => {
    test('should return the sum of the two numbers plus all the numbers in between', () => {
        expect(sumOfNumbers(2,3)).toEqual(5);
        expect(sumOfNumbers(0,1)).toEqual(1);
        expect(sumOfNumbers(13, 13)).toEqual(13);
        expect(sumOfNumbers(3, 7)).toEqual(25);
        expect(sumOfNumbers(19, 4)).toEqual(184);
        expect(sumOfNumbers(4, -2)).toEqual(7);
        expect(sumOfNumbers(666, 666)).toEqual(666);
        expect(sumOfNumbers(0, 0)).toEqual(0);
        expect(sumOfNumbers(-13, 3)).toEqual(-85);
    })
})