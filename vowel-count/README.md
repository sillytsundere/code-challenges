# Vowel Count

![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Description

Return the number (count) of vowels in the given string.

We will consider `a`, `e`, `i`, `o`, `u` as vowels for this Kata (but not `y`).

The input string will only consist of lower case letters and/or spaces.

[Link to CodeWars Kata]

## My Comments

This was one of those problems that appear simpler from the surface, but provides insight I was not expecting. 

For this solution I reintriduced myself to regexes. I began considering iterating through the string with a for...of loop but soon found myself stumped as to how I would validate if the current letter was a vowel. I was suddenly concerned I would have to write multiple if statements and worried at skipping and double counting letters of the string.

I consulted [mdn's sacred texts](https://developer.mozilla.org/en-US/) and considered a few string methods, quite a few of which involved regexes. The method `.match` was as close to a "contain" as I felt I was going to get so I wrote my little "all vowels but not sometimes-y" regex and the lightbulb went off. I could simply return the length of the array returned from `.match` as the vowel count. 

This worked well for a few of the tests but I was presented with a `null` when the string had no vowels. This was where I conceded to write the single if statement to control for if the array did not exist or was falsy and thus indicated that there were no vowels in the string.

I shall return to refactor this as I can already see room for improvement.