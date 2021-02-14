for (let i = 0; i <= 100; i++) {
  let divisibleByThree = i % 3 === 0 ? true : false;
  let divisibleByFive = i % 5 === 0 ? true : false;

  if (divisibleByThree && divisibleByFive) {
    console.log("FizzBuzz");
    continue;
  }
  if (divisibleByThree) {
    console.log("Fizz");
    continue;
  }
  if (divisibleByFive) {
    console.log("Buzz");
    continue;
  }
  console.log(i);
}
