const { nums, words } = require("./data/data.js");


class Node {
  constructor(data = null) {//data is default set to null 
    this.data = data; //when a instance of a node is created. The value of the data is assigned to the property name data
    this.next = null; //the pointer is default at null unless instanitiated
  }
}

class LinkedList {
  constructor(head = null) { 
    this.head = head;


  }

  insert(data) { 

    let newNode = new Node(data)
    newNode.next = this.head;
    this.head = newNode;
  }

 size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
 }

 getFirst() {
  return this.head

 }

 getLast(head = this.head) {
  
    if(!head) {
      return null;
    }
    let headNode = head;
    while(headNode.next){
      headNode = headNode.next
    }
    return headNode;
 }

 search(key) {

  let node = this.head;

  while(node){
    if(node.data === key) {
      return node
    }
      node = node.next
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

  isEmpty() {
    return this.head === null ? true : false;
  }

}




module.exports = {
  Node,
  LinkedList,
};
