const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 * 
 * class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue { value: 1, next: null }
 * queue.enqueue(3); // adds the element to the queue { value: 1, next: { value: 3, next: null } }
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.queue = null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue == null) {
      this.queue = new ListNode(value);
    } else {
      let queueHead = this.queue;
      while (queueHead.next != null) {
        queueHead = queueHead.next;
      }
      queueHead.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this.queue == null) {
      return
    }
    let value = this.queue.value;
    this.queue = this.queue.next;
    return value;
  }
}

module.exports = {
  Queue
};
