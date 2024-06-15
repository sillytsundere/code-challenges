# Sum of Numbers

![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Description

Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

## Examples

Examples (a, b) --> output (explanation)

`(1, 0) --> 1 (1 + 0 = 1)` </br>
`(1, 2) --> 3 (1 + 2 = 3)` </br>
`(0, 1) --> 1 (0 + 1 = 1)` </br>
`(1, 1) --> 1 (1 since both are same)` </br>
`(-1, 0) --> -1 (-1 + 0 = -1)` </br>
`(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)`

Your function should only return a number, not the explanation about how you get that number.

[Link to CodeWars Kata](https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript)

## My Comments

Since the parameters for this function can be any integer, I knew that (after returning the number, if they are the same number) I needed to discern if a was smaller or larger than b. I wanted to use a for loop to iterate through the integers and all integers between them and thus needed to begin the for loop with the smaller number.

A variable, sum, is declared and its initial value is set to zero. The for loop begins with the smaller integer, adds it to the sum, and moves through each integer, adding it to the sum, finishing with loop with the larger integer. After the for loop closes the sum is returned.
