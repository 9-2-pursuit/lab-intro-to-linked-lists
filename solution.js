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
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
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
  isEmpty() {
    return this.head === null ? true : false;
  }
  getKth(data) {
    let node = this.head;
    let counter = 1;
    while (counter !== data) {
      counter++;
      node = node.next;
    }
    return node;
  }

  getKthToLast(data) {
    let node = this.head;
    let counter = this.size() - 1;
    while (counter !== data) {
      counter--;
      node = node.next;
    }
    return node;
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

  containsDuplicates() {
    let currentNode = this.head;
    let uniqueValues= {};

    while (currentNode) {
      if (uniqueValues[currentNode.data]) {
        return true; // duplicate found
      } else {
        uniqueValues[currentNode.data] = true;
        currentNode = currentNode.next;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};
