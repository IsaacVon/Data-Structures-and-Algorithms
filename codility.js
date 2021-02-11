function solution(A) {
  for (let i = 1; A.length > 0; i++) {
    let index = A.indexOf(i);

    if (index === -1) {
      return i;
    }
  }
}

console.log(solution([-1, -3]));
