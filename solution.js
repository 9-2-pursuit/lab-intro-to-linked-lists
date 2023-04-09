const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
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

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
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

  clear() {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
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

  getKthToLast(elm) {
    let current = this.head;
    let i = 1;
    while (current) {
      if (this.size() - i === elm) {
        return current;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  getKth(elm) {
    let current = this.head;
    let i = 1;
    while (current) {
      if (i === elm) {
        return current;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  toArray() {
    let arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

module.exports = {
  Node,
  LinkedList,
};
