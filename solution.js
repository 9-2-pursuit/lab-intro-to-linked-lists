const { nums, words } = require("./data/data.js");


class Node{
  constructor(value, next = null){
    this.data = value;
    this.next = next;
  }
  
}

class LinkedList{
  constructor(){
    this.head = null;
    this.current = null;
  }
  insert(value){
    let node = new Node(value, this.head);
    this.head = node;
  }
  size(){
    let current = this.head
    let ret = 0;
    while(current){
      ret++;
      current = current.next;
    }
    return ret;
  }
  delete(key){
    let current = this.head
    let pre = this.head;
    while(current){
      if(current.data===key){
        pre.next = current.next;
        //pre free?
        return;
      }
      pre = current;
      current = current.next;
    }
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    let current = this.head
    while(current){
      if(current.next === null) return current;
      current = current.next;
    }
    return null;
  }
  search(value){
    let current = this.head
    while(current){
      if(current.data === value) return current;
      current = current.next;
    }
  }
  getKth(value){
    let current = this.head
    let ret = 1;
    while(current){
      if(ret === value) return current;
      ret++;
      current = current.next;
    }
    return ret;
  }
  getKthToLast(value){
    let ret = this.size();
    let current = this.head
    while(current){
      ret--;
      if(ret === value) return current;
      current = current.next;
    }
    return ret;
  }

  isEmpty(){
    return this.head === null;
  }
  clear(){
    this.head = null;
  }
  toArray(){
    let current = this.head
    let ret = []
    while(current){
      ret.push(current.data);
      current = current.next;
    }
    return ret;
  }
  containsDuplicates(){
    let tmp = {};
    let current = this.head;
    while(current){
      if(tmp[current.data]!==undefined) return true;
      tmp[current.data] = true;
      current = current.next;
    }
    return false;
  }
}

class DoubleNode {
  constructor(value, next = null, previous= null){
    this.data = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoubleLinkedList extends LinkedList{
  constructor(){
    super();
    this.tail = null;
  }
  insert(value){
    let node = new DoubleNode(value, this.head);
    this.head.previous = node;
    this.head = node;
    if(this.tail === null) this.tail = node;
  }
  getLast(){
    return this.tail;
  }
}



module.exports = {
  Node,
  LinkedList,
};
