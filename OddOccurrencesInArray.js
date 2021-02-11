function solution(A) {
  for (let i = 0; i < A.length; i++) {
    let searchArrayForFirst = A.slice(1);
    let searchArrayForRest = [...A.slice(i + 1), ...A.slice(0, i)];

    let arrayToSearch = i === 0 ? searchArrayForFirst : searchArrayForRest;

    let oddItemFound = arrayToSearch.indexOf(A[i]) === -1 ? true : false;

    if (oddItemFound) {
      return A[i];
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
