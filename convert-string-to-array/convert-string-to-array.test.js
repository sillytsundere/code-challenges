import { stringToArray, stringToArray2 } from './convert-string-to-array.js';

describe('stringToArray', () => {
    test('should return an array of the words in a string', () => {
        expect(stringToArray("A string")).toEqual(["A", "string"]);
        expect(stringToArray("Robin Singh")).toEqual(["Robin", "Singh"]);
        expect(stringToArray("I love arrays they are my favorite")).toEqual(["I", "love", "arrays", "they", "are", "my", "favorite"]);
        expect(stringToArray("My new favorite band is Dwellings")).toEqual(["My", "new", "favorite", "band", "is", "Dwellings"]);
        expect(stringToArray("One Two Three Four Five Six")).toEqual(["One", "Two", "Three", "Four", "Five", "Six"]);
        // Add more test cases as needed
    })
});

describe('stringToArray2', () => {
    test('should return an array of the words in a string', () => {
        expect(stringToArray2("A string")).toEqual(["A", "string"]);
        expect(stringToArray2("Robin Singh")).toEqual(["Robin", "Singh"]);
        expect(stringToArray2("I love arrays they are my favorite")).toEqual(["I", "love", "arrays", "they", "are", "my", "favorite"]);
        expect(stringToArray2("My new favorite band is Dwellings")).toEqual(["My", "new", "favorite", "band", "is", "Dwellings"]);
        expect(stringToArray2("One Two Three Four Five Six")).toEqual(["One", "Two", "Three", "Four", "Five", "Six"]);
        // Add more test cases as needed
    })
});