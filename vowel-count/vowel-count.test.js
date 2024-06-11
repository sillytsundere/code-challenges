import { getCount } from './vowel-count.js';

describe('getCount', () => {
    test('should return the cound of the number of vowels where the vowels are a, e, i, o, u but not y', () => {
        expect(getCount("a song called foreverest")).toBe(8);
        expect(getCount("there are no vowels here")).toBe(9);
        expect(getCount("bzzt")).toBe(0);
        expect(getCount("you are worthy of love even in the darkness")).toBe(14);
        expect(getCount("nyx hsss")).toBe(0);

    })
})