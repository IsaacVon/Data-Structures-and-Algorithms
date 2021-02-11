function solution(N) {
  if (N < 0) return;

  let binaryArray = N.toString(2).split("");
  let longestBinaryGap = 0;
  let currentGap = 0;

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] == 0) {
      currentGap++;
    }

    if (binaryArray[i] == 1 || i === binaryArray.length) {
      if (currentGap > longestBinaryGap) {
        longestBinaryGap = currentGap;
      }
      currentGap = 0;
    }
  }

  return longestBinaryGap;
}

console.log(solution(1041));
