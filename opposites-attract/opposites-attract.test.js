import { lovefunc } from "./opposites-attract";

describe('lovefunc', () => {
    test('should return true if one number is odd and one number is even and false if both numbers are either even or odd', () => {
        expect(lovefunc(1,1)).toBe(false);
        expect(lovefunc(2,4)).toBe(false);
        expect(lovefunc(3,4)).toBe(true);
        expect(lovefunc(1,0)).toBe(true);
        expect(lovefunc(100,13)).toBe(true);
        expect(lovefunc(10,25)).toBe(true);
        expect(lovefunc(3,7)).toBe(false);
        expect(lovefunc(3,5)).toBe(false);
        expect(lovefunc(7,7)).toBe(false);
        expect(lovefunc(8,9)).toBe(true);
        expect(lovefunc(4,6)).toBe(false);
        expect(lovefunc(7,0)).toBe(true);
        expect(lovefunc(0,0)).toBe(false);
    })
})