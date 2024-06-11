export function getCount(str) {
  //   let vowelCount = 0;
  //   for (const s of str) {
  //     console.log(s);
  //     const regex = /aeiou/gm;
  //     if (s.) {
  //       vowelCount =+ 1;
  //     }
  //   }
  //   console.log("vowelCount", vowelCount);
  //   return vowelCount;

  const regex = /[aeiou]/g;
  console.log(str.match(regex));
  if (str.match(regex)) {
    return str.match(regex).length;
  }
  return 0;
}
