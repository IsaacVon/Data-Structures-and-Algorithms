var findNumbers = function (nums) {
  let evenNumbers = 0;

  for (let i = 0; i < nums.length; i++) {
    let numberOfDigits = nums[i].toString().length;
    let isEven = numberOfDigits % 2 === 0 ? true : false;

    if (isEven) evenNumbers++;
  }

  return evenNumbers;
};

findNumbers([12, 345, 2, 6, 7896]);
