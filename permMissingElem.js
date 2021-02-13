function solution(A) {
  if (A.length <=1) return 1

  let sortedArray = A.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedArray.length; i++) {
    let numberToCompare = i + 1;
    if (sortedArray[i] !== numberToCompare) return numberToCompare;
  }
}

console.log(solution([1]));
