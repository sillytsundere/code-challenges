export function stringToArray(string) {
  let arr = string.split(" "); //split or break the string at each space and return an array of the pieces
  return arr;
}

//solve without using .split
export function stringToArray2(string) {
  const arr = [];
  let word = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      arr.push(word);
      word = "";
      i = i + 1;
    }
    word = word + string[i];
  }
  arr.push(word);
  return arr;
}