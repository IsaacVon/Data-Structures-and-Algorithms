// permutate string and show all nonrepeating things

const nonRepeatingPermutations = (string) => {
  let array = [];

  const stringToArray = (string) => {
    for (let i = 0; i < string.length; i++) {
      array.push(string[i]);
    }
    return array;
  };

  stringToArray(string);

  const getPermutations = (arr) => {
    const output = [];

    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };

    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice());
        return;
      }

      generate(n - 1, heapArr);
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }

        generate(n - 1, heapArr);
      }
    };

    generate(arr.length, arr.slice());

    return output;
  };

  let allPermutations = getPermutations(array);

  let numberOfNonRepeatingPermutations = 0;

  for (let i = 0; i < allPermutations.length; i++) {
    let repeatFound = false;

    for (let j = 0; j < allPermutations[i].length - 1; j++) {
      if (allPermutations[i][j] === allPermutations[i][j + 1]) {
        repeatFound = true;
      }
    }
    if (!repeatFound) {
      numberOfNonRepeatingPermutations++;
    }
  }

  return numberOfNonRepeatingPermutations;
};

console.log(nonRepeatingPermutations("abcdefa"));
