function solution(N) {
  const digitToInsert = 5;
  const isPositive = N >= 0 ? true : false;

  let numberArrayString = ("" + N).split("");

  for (let i = 0; i < numberArrayString.length; i++) {
    if (isPositive) {
      if (digitToInsert > parseInt(numberArrayString[i])) {
        numberArrayString.splice(i, 0, digitToInsert);
        return parseInt(numberArrayString.join(""));
      }

    }

    if (!isPositive) {
      if (parseInt(numberArrayString[i]) > digitToInsert) {
        numberArrayString.splice(i, 0, digitToInsert);
        return parseInt(numberArrayString.join(""))
      }
    }
  }

  return parseInt(numberArrayString)
}

console.log(solution(268)); // 5268
console.log(solution(670)); // 6750
console.log(solution(0)); // 50
console.log(solution(-999)); // -5999
