function solution(S) {
  let arrayToBuild = [];

  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j < S.length + 1; j++) {
      arrayToBuild.push(S.slice(i, j));
    }
  }

  for (let i = 0; i < arrayToBuild.length; i++) {
    let sortedArray = arrayToBuild.sort((a, b) => a.length - b.length);
    let isBalanced = true;

    for (let j = 0; j < sortedArray[i].length; j++) {
      let letter = sortedArray[i][j];
      if (
        letter === letter.toLowerCase() &&
        !sortedArray[i].includes(letter.toUpperCase())
      )
        isBalanced = false;
      if (
        letter === letter.toUpperCase() &&
        !sortedArray[i].includes(letter.toLowerCase())
      )
        isBalanced = false;

      if (j === sortedArray[i].length - 1 && isBalanced) {
        return sortedArray[i].length;
      }
    }
  }
  return -1;
}

console.log(solution("azABaabza"));
console.log(solution("TacoCat"));
console.log(solution("AcZCbaBz"));
console.log(solution("abcdefghijklmnopqrstuvwxyz"));
