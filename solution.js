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

  insert(data, next) {
    let newNode = new Node(data, next);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let nodeCount = 0;
    let currentNode = this.head;
    while (currentNode) {
      nodeCount++;
      currentNode = currentNode.next;
    }
    return nodeCount;
  }

  delete(data) {
    let currentNode = this.head;
    let counter = 0;
    while (currentNode.data !== data && currentNode.next) {
      counter++;
      currentNode = currentNode.next;
    }
    let foundNode = currentNode;
    currentNode = this.head;
    for (let i = 1; i < counter; i++) {
      currentNode = currentNode.next;
    }
    currentNode.next = foundNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    if (!this.head) return null;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode && currentNode.data !== key) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getKth(index) {
    let currentNode = this.head;
    for (let i = 1; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getKthToLast(index) {
    let currentNode = this.head;
    let counter = 0;

    while (currentNode.next) {
      currentNode = currentNode.next;
      counter++;
    }
    currentNode = this.head;
    for (let i = 1; i <= counter - index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let linkedListArray = [];
    let currentNode = this.head;
    while (currentNode) {
      linkedListArray.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return linkedListArray;
  }

  containsDuplicates() {
    let linkedListArray = [];
    let currentNode = this.head;
    while (currentNode) {
      if (linkedListArray.includes(currentNode.data)) {
        return true;
      } else {
        linkedListArray.push(currentNode.data);
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
