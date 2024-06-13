export function sumOfNumbers(a, b) {
  if (a === b) {
    return b;
  }
  let sum = 0;
  if (a < b) {
    for (let i = a; i < b + 1; i++) {
      sum += i;
    }
  } else
    for (let i = b; i < a + 1; i++) {
      sum += i;
    }
  return sum;
}
