# Opposites Attract

![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Description

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

[Link to CodeWars Kata](https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript)

# My Comments

For this challenge, I wanted to find the modulus of 2 for each of the flowers (parameters) and compare them to see if they were the same. If the modulus of the two flowers is the same, then both flowers have either an odd or even number of petals, and thus the function should return false. If the moduli of the two flowers are not the same, then one has an even number of petals and the other has an odd number of petals, and the function should return true.

I first declared variables with the values of the modulus of each flower, then compared those two variables and returned the boolean value from that comparison. This passed CodeWars' tests, but I knew I could refactor it for further simplicity.

I was able to refactor it to return the comparison of the modulus of both parameters directly. This refactor decreases the lines of code, increasing simplicity while retaining readability.