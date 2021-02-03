const Stack = require("./stack");

const stack = new Stack();

const string = "abcdefg";

const reverseString = (string) => {
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }

  const reversed = "";

  while (!stack.isEmpty()) {
    stack.pop();
    letter = stack.pop()
    console.log("reversed", letter);
  }

};

reverseString(string);
