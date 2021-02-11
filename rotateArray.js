function solution(A, K) {
  if (A === null) return
  if (K < 0) return;

  let rotationsRemaining = K;
  let rotatedArray = [...A];

  const rotateArray = () => {
    let endPiece = rotatedArray.pop();
    rotatedArray.unshift(endPiece);
  };

  while (rotationsRemaining > 0) {
    rotateArray();
    rotationsRemaining--;
  }

  return rotatedArray;
}

console.log(solution([3, 8, 9, 7, 6], -3));
