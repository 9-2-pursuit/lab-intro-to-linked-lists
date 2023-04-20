const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // meaning the next in the list is currently a placeholder
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
    let currentNode = this.head;
    while (currentNode) {
      // console.log(currentNode);
      count++;
      currentNode = currentNode.next;
      // console.log(currentNode);
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

  // getLast() {
  //   let count = this.size();
  //   console.log(count);
  //   console.log(this.head.data);
  //   return this.size();
  // }

  getLast() {
    let currNode;

    while (this.head) {
      currNode = this.head;
      this.head = this.head.next;
    }
    return currNode;
  }

  search(key) {
    let currNode = this.head;
    while (currNode !== null && currNode.data !== key) {
      console.log(key);
      console.log(this.head);
      console.log(this);
      currNode = currNode.next;
    }
    return currNode;
  }

  getKth(key) {
    let count = 0;
    //   while (count !== key) {
    //     count++;
    //     currentNode = currentNode.next;
    //     console.log(currentNode.next);
    //   }
    //   return currentNode.next;
    // }

    let currentNode = this.head;
    for (let i = 0; i < key; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  toArray() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  isEmpty() {
    console.log(this);
    return !this.head;
  }

  clear() {
    return (this.head = null);
  }
  containsDuplicates() {
    let ans = this.toArray();
    let compare = new Set(ans);
    return !(ans.length === [...compare].length);
  }
}

module.exports = {
  Node,
  LinkedList,
};
