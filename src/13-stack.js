class Stack {
  constructor () {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.splice(this.elements.length - 1, 1)[0];
  }

  peek() {
    return this.elements[this.elements.length - 1];
  }
}

module.exports = Stack;
