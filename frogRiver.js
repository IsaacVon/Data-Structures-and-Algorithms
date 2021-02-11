function solution(X, A) {
  let numbersNeeded = [];
  for (let i = 1; i <= X; i++) {
    numbersNeeded.push(i);
  }

  for (let i = 0; i < A.length; i++) {
    let indexOfNumberInNeeded = numbersNeeded.indexOf(A[i]);

    if (indexOfNumberInNeeded >= 0) {
      if (numbersNeeded.length === 1) return i;

      numbersNeeded.splice(indexOfNumberInNeeded, 1);
    }

    if (i === A.length - 1) return -1;
  }
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 2, 4]));
