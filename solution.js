const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
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
    let first = this.head;
    return first;
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
    let node = this.head;
    let index = 1;

    while (node !== null) {
      if (index === k) {
        break;
      }
      index++;
      node = node.next;
    }
    return node;
  }

  getKthToLast(k) {
    let length = 0;
    let node = this.head;

    while (node) {
      length++;
      node = node.next;
    }

    let position = length - k;
    node = this.head;

    for (let i = 1; i < position; i++) {
      node = node.next;
    }

    return node;
  }

  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }
  clear() {
    this.head = null;
  }

  toArray() {
    let node = this.head;
    let arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
  containsDuplicates() {
    let node = this.head;
    let arr = [];
    while (node) {
      if (arr.includes(node.data)) {
        return true;
      }

      arr.push(node.data);
      node = node.next;
    }

    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
