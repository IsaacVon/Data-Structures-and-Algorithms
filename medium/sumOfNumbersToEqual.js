var minPartitions = function (n) {
  let largestNumber = 0;

  for (let i = 0; i < n.length; i++) {
    let currentNumber = parseInt(n[i]);

    if (currentNumber > largestNumber) {
      largestNumber = currentNumber;
    }
  }

  return largestNumber;
};

minPartitions("32");
