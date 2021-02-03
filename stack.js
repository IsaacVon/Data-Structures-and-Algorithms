class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
    // console.log(`${element} added to ${this.count}`);
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    // console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  peek() {
    // console.log(`top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  isEmpty() {
    // console.log(this.count == 0 ? "Stack is empty" : "Stack is not empty");
    return this.count == 0;
  }

  size() {
    // console.log(`${this.count} elements in stack`);
    return this.count;
  }

  print() {
    let string = "";
    for (let i = 0; i < this.count; i++) {
      string += this.items[i] + " ";
    }
    return string;
  }

  clear() {
    this.items = [];
    this.count = 0;
    // console.log('Stack cleared')
    return this.items;
  }

  reverse() {}
}

// const stack = new Stack();

// stack.isEmpty();

// stack.push(100);
// stack.push(200);
// stack.push(300);

// console.log(stack.print())

// stack.pop();

// stack.clear()
// console.log(stack.print())

module.exports = Stack;
