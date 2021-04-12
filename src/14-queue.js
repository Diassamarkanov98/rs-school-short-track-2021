const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.top = null;
    this.bot = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newNode = new ListNode(element);
    newNode.value = element;
    if (this.top === null) {
      this.top = newNode;
      this.bot = newNode;
    } else {
      this.bot.next = newNode;
      this.bot = newNode;
    }
    this.capacity++;
  }

  dequeue() {
    const cur = this.top;
    this.top = this.top.next;
    this.length--;
    cur.next = null;
    return cur.value;
  }
}

module.exports = Queue;
