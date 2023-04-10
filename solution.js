const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  delete(key) {
    if (!this.head) {
      return null;
    }
    if (this.head.data === key) {
      this.head = this.head.next;
      return true;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode && currentNode.data !== key) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode) {
      prevNode.next = currentNode.next;
      return true;
    }
    return false;
  }

  getFirst() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getLast() {
    return this.head;
  }

  search(key) {
    let currentNode = this.head;
    while (currentNode && currentNode.data !== key) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getKth(k) {
    if (k < 0 || !this.head) {
      return null;
    }
    let size = this.size();
    if (k > size - 1) {
      return null;
    }
    let i = 0;
    let currentNode = this.head;
    while (i < size - k) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  getKthToLast(k) {
    if (k < 0 || !this.head) {
      return null;
    }
    let i = 0;
    let currentNode = this.head;
    while (i < k && currentNode) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  isEmpty() {
    return !this.head;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return result.reverse();
  }

  containsDuplicates() {
    const set = new Set(); // El set es una clase el cual es una estructura de datos que solo permite 1) VALORES PRIMITIVOS Y 2) Que no se repiten.

    // nodes = "Alfredo", "Daniel", "Maria", "Pedro",
    // SET = ["Alfredo", "Daniel", "Maria",  "Pedro"]

    let currentNode = this.head;
    while (currentNode) {
      if (set.has(currentNode.data)) {
        return true;
      }

      set.add(currentNode.data);
      currentNode = currentNode.next;
    }

    return false;
  }
}

// class Node {
//   constructor(data, next) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   ////////////////////////
//   insert(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       // if the list is empty
//       this.head = newNode; // make the new node the head of the list
//     } else {
//       // find the last node in the list
//       let currentNode = this.head;
//       while (currentNode.next) {
//         currentNode = currentNode.next;
//       }
//       // set the next node of the last node to the new node
//       currentNode.next = newNode;
//     }
//   }

//   ////////////////////////
//   insert(data) {
//     const latestNode = new Node(data, null);

//     if (this.head === null) {
//       this.head = latestNode;
//       this.tail = latestNode;
//       return;
//     }

//     const prevNode = this.head;
//     this.head = latestNode; //*****/

//     prevNode.next = latestNode;
//   }

//   size() {
//     if (this.head === null) {
//       return 0;
//     }

//     let size = 1;
//     let iterationNode = this.tail;

//     while (iterationNode.next !== null) {
//       size += 1;
//       iterationNode = iterationNode.next;
//     }

//     return size;
//   }
// }

// const linkedList = new LinkedList();

// console.log("INITIALIZATION");
// console.log({
//   tail: linkedList.tail, // null
//   head: linkedList.head, // null
// });

// linkedList.insert("Alfredo");

// console.log("INSERTING FIRST NODE");
// console.log({
//   tail: linkedList.tail, // {data: "Alfredo", next: null }
//   head: linkedList.head, // {data: "Alfredo", next: null }
// });

// linkedList.insert("Javascript");
// console.log("INSERTING SECOND NODE");
// console.log({
//   tail: linkedList.tail, // {data: "Alfredo", next: { data: "Javascript", next: null } }
//   head: linkedList.head, // {data: "Javascript", next: null }
// });

// linkedList.insert("React");
// linkedList.insert("Angular");
// linkedList.insert("Daniel");

// console.log("CHECKING LINKED LIST SIZE");
// console.log(linkedList.size());

module.exports = {
  Node,
  LinkedList,
};
