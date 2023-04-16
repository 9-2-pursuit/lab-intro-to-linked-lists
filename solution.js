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

  toArray() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }
    return arr;
  }

  containsDuplicates() {
    let curr = this.head;
    let arr = [];
    while (curr) {
      if (arr.includes(curr.data)) {
        return true;
      }
      arr.push(curr.data);
      curr = curr.next;
    }
    return false;
  }

  getKthToLast(elmement) {
    let current = this.head;
    let i = 1;
    while (current) {
      if (this.size() - i === elmement) {
        return current;
      } else {
        current = current.next;
        i++;
      }
    }
  }

  getKth(elmement) {
    let current = this.head;
    let i = 1;
    while (current) {
      if (i === elmement) {
        return current;
      } else {
        current = current.next;
        i++;
      }
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};
