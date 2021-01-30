class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
    console.log(`${element} added to ${this.count}`);
    return this.count - 1;
  }

  pop() {
    if (this.count === 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  peek() {
    console.log(`top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

// stack.pop();
// stack.pop();

console.log(stack.peek())


