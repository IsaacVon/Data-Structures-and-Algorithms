function pairwise(arr, arg) {
  let pairIndices = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];

      // Exclude pairs that contain previously paired elements
      if (
        arr[i] + arr[j] == arg &&
        !pairIndices.includes(i) &&
        !pairIndices.includes(j)
      ) {
        pairIndices.push(i, j);
        break;
      }
    }
  }

  return pairIndices.reduce((sum, curr, index) => sum + curr, 0);
}

// pairwise([1, 4, 2, 3, 0, 5], 7);
console.log(pairwise([1, 1, 1], 2));
