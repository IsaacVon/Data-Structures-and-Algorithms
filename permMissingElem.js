function solution(A) {
  let sortedArray = A.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedArray.length; i++) {
    let numberToCompare = i + 1;
    if (sortedArray[i] !== numberToCompare) return numberToCompare;
  }
}

console.log(solution([2, 3, 1, 5]));
