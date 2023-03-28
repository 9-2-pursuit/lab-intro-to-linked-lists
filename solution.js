const { nums, words } = require("./data/data.js");

class Node {
  constructor (data, next = null){
    this.data = data;
    this.next = next;
  }
}

[6, 5, 3]

class LinkedList {
  constructor() {
    this.head = null;
  }
insert(data) {
    const node = new Node(data);
  
    node.next = this.head; 
    this.head = node; 
  }


size(data){
  let count = 0
  let node = this.head
  while (node ){
if (node){
  count++
  node = node.next
}
  }
  return count
}

delete(data){
  let node = this.head
  let counter = 0
  while (node.data !== data && node.next) {
    counter++
    node = node.next
  }
  let foundNode = node
  node = this.head
  for (let i = 1; i < counter; i++){
    node = node.next
  }
  node.next = foundNode.next
}
getFirst() {
  return this.head;
}
getLast(){
  
  let node = this.head
  if(!this.head) return null;
  while(node.next) {
    node = node.next
  
  }
   return node
}
search(key) {
  let node = this.head;
  while (node !== null && node.data !== key) {
    node = node.next;
  }
  return node;
}
// 1st, 2nd, 3rd, 4th, 5th
// k from node
getKth(k){
  let node = this.head;
  let index = 1
  
  while(node !== null){
    if(index == k){
      break;
    }
    index++;
    node = node.next
  }
  return node
}
getKthToLast(k){
let length = 0
let node = this.head;

while(node) {
  length++
  node = node.next
}


const position = length - k

node = this.head;
for (let i = 1; i < position; i++) {
  node = node.next
}
return node
}
isEmpty(){
  let node = this.head;
  if(!node){
    return true
  }
  return false
}
clear(){
  this.head=null
}
toArray(){
  let arr = []
  let node = this.head
  
  while(node) {
    arr.push(node.data)
    node = node.next
  }
  return arr 
}
containsDuplicates(){
  const seenValues = new Set();
  let node = this.head

  while (node) {
    if (seenValues.has(node.data)) {
      return true
    }
    else {
      seenValues.add(node.data)
    }
    node = node.next
  }
  return false
}
}

module.exports = {
  Node,
  LinkedList,
};
