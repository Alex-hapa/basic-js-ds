const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.top = null;
    this.bottom = null;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    if (this.top) {
      let node = new ListNode(value);
      this.bottom.next = node;
      this.bottom = node;
    } else {
      this.top = new ListNode(value);
      this.bottom = this.top;
    }
  }

  dequeue() {
    let res = this.top.value;
    this.top = this.top.next;
    return res;
  }
}

module.exports = {
  Queue
};
