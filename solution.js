const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.count++;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  getKth(k) {
    if (k < 0 || k >= this.head) {
      return this.head;
    }
    let node = this.head;
    for (let i = 1; i < k; i++) {

      node = node.next;
    }
    return node;
  }

  getKthToLast(k) {
    if (k < 1 || k > this.count) {
      return this.head;
    }
    let p1 = this.head;
    let p2 = this.head;
    for (let i = 0; i < k; i++) {
      p2 = p2.next;
    }
    while (p2.next) {
      p1 = p1.next;
      p2 = p2.next;
    }
    return p1;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  toArray() {
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  containsDuplicates() {
    const seenValues = new Set();
    let node = this.head;
    while (node) {
      if (seenValues.has(node.data)) {
        return true;
      } else {
      seenValues.add(node.data);
      node = node.next;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
