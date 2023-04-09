const { nums, words } = require("./data/data.js");

class Node{
  constructor(data = null) {
this.data = data;
this.next = null;
  }
}

class LinkedList{
  constructor(head) {
this.head = head;
  }

  insert(head = this.head, data) {
    return head
  }
}

 

module.exports = {
  Node,
  LinkedList,
};
