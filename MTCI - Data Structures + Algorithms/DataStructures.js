/* Data Structures in JavaScript */

//Data Structures: Arrays

const strings = ['a', 'b', 'c', 'd'];
//0    1    2    3 

strings[2] //o(1)
//c

//push 
strings.push('e'); //o(1)
//['a', 'b', 'c', 'd', 'e']
//  0    1    2    3    4

//pop
strings.pop();  // o(1)
//['a', 'b', 'c', 'd']
//  0    1    2    3   

//unshift
strings.unshift('x'); //o(n)
//['x', 'a', 'b', 'c', 'd']
//  0    1    2    3    4

//splice
strings.splice(2, 0, 'alien');  //o(n/2) = o(n)
// parameters -> 2 is for index location we want to add into, 0 is for deleting 0 items from array

//['x', 'a', 'alien', 'b', 'c', 'd']
//  0    1       2     3    4    5

console.log(strings)
//['x', 'a', 'alien', 'b', 'c', 'd']



//Common Data Structure Interview Questions

/* Exercise: Reverse a String */

/* Reverse 'Hi My name is Andrei' into 
'ierdnA si eman ym iH' */

function reverse(str) {
//check to see if user input is a string
if (!str || str.length < 2 || typeof str !== 'string') {
return 'hmmm that is not good';
}
const backwards = [];
const totalItems = str.length - 1;
for (let i = totalItems; i >= 0; i--) {
backwards.push(str[i]); 
/* push each element of array starting from end and 
going to beginning into backwards array */
}
return backwards.join(''); /* Join the elements of the
backwards array into a complete string  */  
}
//Run reverse(str) function with parameters
reverse('Hi my name is Andrei')
//Output: 'ierdnA si eman ym iH'

function reverse2(str) {
return str.split('').reverse().join('')
}
reverse2('Hi my name is Andrei')
//Output: 'ierdnA si eman ym iH'


const reverse3 = str => [...str].reverse().join('') 
reverse3('Hi my name is Andrei')
//Output: 'ierdnA si eman ym iH'


/* Exercise: Merge Sorted Arrays */

/* mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]) 
into [0, 3, 4, 4, 6, 30, 31]  */

function mergeSortedArrays(array1, array2) {
const mergedArray = [];
let array1Item = array1[0];
let array2Item = array2[0];
let i = 1;
let j = 1;

//Check Input to see if there are empty arrays in which case we don't need to merge
if (array1.length === 0) {
return array2;
}

if (array2.length === 0) {
return array1;
}

while (array1Item || array2Item) {
if (!array2Item || array1Item < array2Item) {
mergedArray.push(array1Item)
array1Item = array1[i];
i++
} else {  //if array2Item > array1Item
mergedArray.push(array2Item)
array2Item = array2[j];
j++
}
}
return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
//Output: [ 0, 3, 4, 4, 6, 30, 31 ]


//Data Structures: Hash Tables

let user = {
age: 54,
name: 'Kylie',
magic: true,
scream: function() {
console.log('ahhhhhhhh!');
}
}

user.age //o(1)
user.scream //o(1)
user.spell = 'abra kadabra'; //o(1)
user
/*  Console Output:
{age: 54,
name: 'Kylie',
magic: true,
scream: [Function],
spell: 'abra kadabra'}  */


//Implementing a Hash Table
class HashTable {
constructor(size) {
this.data = new Array(size);
}

_hash(key) {  //Private Class
let hash = 0;
for (let i = 0; i < key.length; i++) {
//hashing function
hash = (hash + key.charCodeAt(i) * i) %
this.data.length
}
return hash;
}
set(key, value) {
let address = this._hash(key)
if (!this.data[address]) {
this.data[address] = [];
}
this.data[address].push([key, value])
return this.data
}
get (key) {
let address = this._hash(key)
const currentBucket = this.data[address]
if (currentBucket) {
for (let i = 0; i < currentBucket.length; i++) {
if(currentBucket[i][0] === key) {
return currentBucket[i][1]
}
}
} //If currentBucket is empty then
return undefined
}
keys() {
const keysArray = [];
for (let i = 0; i < this.data.length; i++) {
if(this.data[i]) {
keysArray.push(this.data[i][0][0])
}
}
return keysArray;
}
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000)
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2)
myHashTable.keys();

//Console Output:  [ 'grapes', 'apples', 'oranges' ]


//Data Structures: Linked Lists

const basket = ['apples', 'grapes', 'pears'];

//pseudocode: 
linked list: apples --> grapes --> pears

// Numbers are pointers in memory
apples 
8947 --> grapes 
          8742 --> pears
                    872 --> null
                    

/* Pointer -> Reference to a place in memory
(for an item (OR node in a linked list)) */

const obj1 = {a: true};
const obj2 = obj1;
/* obj2 points to obj1. obj1 points to {a: true}.
Therefore, obj1 and obj2 point to the same location
in memory {a: true} */

obj1.a = 'booya';
/* obj1 now points to {a: booya}. Now obj1 and obj2
both point to {a: 'booya'}. */
console.log('1', obj1);
console.log('2', obj2);


//Singly Linked Lists

//Creating our first Linked List: 10-->5-->16 
let myLinkedList = {
    head: { //head node
      value: 10,
      next: { //pointer to next node
          value: 5,
          next: { //pointer to next node
            value: 16, //tail node
            next: null //end of list
          }
      } 
    }
  }
console.log(myLinkedList)
  


  class LinkedList {
    constructor(value) { //first node
      this.head = {
        value: value,
        next: null
      }
      this.tail = this.head; //this refers to LinkedList
      this.length = 1;
    }
    append(value) { //append new node to end (becomes new tail node) O(1)
      const newNode = {
        value: value,
        next: null
      };
      this.tail.next = newNode;
      this.tail = newNode; 
      this.length++;
      return this; //return LinkedList
    }
    prepend(value) { //prepend new node to beginnning (becomes new head node) O(1)
      const newNode = {
        value: value,
        next: null //next points to old head node
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this; //return LinkedList
    }
    printList() {  //Print LinkedList in array
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next;
      }
      return array;
    }
    insert(index, value) { //insert new node in the middle O(n)
      //check params if given index is greater than the length of the array than we append the new node at end
      if (index >= this.length) {
        return this.append(value);
      }
      //else if (index < this.length) then we insert new node in the middle
      const newNode = {
        value: value,
        next: null
      };
      const leader = this.traverse(index-1)
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverse(index) {
      //check params
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    delete(index) {
      const leader = this.traverse(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;  //decrease length because we remove node
      return this.printList();
    }
  }
  
  const myLinkedList = new LinkedList(10); //[10]
  //10 is starting head value
  myLinkedList.append(5); //[10, 5]
  myLinkedList.append(16); //[10, 5, 16]
  myLinkedList.prepend(1); //[1, 10, 5, 16]
  myLinkedList.insert(2, 99); //[1, 10, 99, 5, 16]
  myLinkedList.insert(20, 88); //[1, 10, 99, 5, 16, 88]
  myLinkedList.delete(2); //[ 1, 10, 5, 16, 88 ]
  myLinkedList.printList(); //[ 1, 10, 5, 16, 88 ]



//Doubly Linked List
class DoublyLinkedList {
    constructor(value) { //first node
      this.head = {
        value: value,
        next: null, //pointer to next node
        previous: null //pointer to previous node
      }
      this.tail = this.head; //this refers to DoublyLinkedList
      this.length = 1;
    }
    append(value) { //append new node to end (becomes new tail node) O(1)
      const newNode = {
        value: value,
        next: null,
        previous: null
      };
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode; 
      this.length++;
      return this; //return DoublyLinkedList
    }
    prepend(value) { //prepend new node to beginnning (becomes new head node) O(1)
      const newNode = {
        value: value,
        next: null, //next points to old head node
        previous: null
      }
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      this.length++;
      return this; //return DoublyLinkedList
    }
    printList() {  //Print DoublyLinkedList in array
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
        array.push(currentNode.value)
        currentNode = currentNode.next;
      }
      return array;
    }
    insert(index, value) { //insert new node in the middle O(n)
      //check params if given index is greater than the length of the array than we append the new node at end
      if (index >= this.length) {
        return this.append(value);
      }
      //else if (index < this.length) then we insert new node in the middle
      const newNode = {
        value: value,
        next: null,
        previous: null
      };
      const leader = this.traverse(index-1)
      const follower = leader.next;
      leader.next = newNode;
      newNode.previous = leader;
      newNode.next = follower;
      follower.previous = newNode;
      this.length++;
      return this.printList();
    }
    traverse(index) {
      //check params
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    delete(index) {
      const leader = this.traverse(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;  //decrease length because we remove node
      return this.printList();
    }
  }
  
  const myLinkedList = new DoublyLinkedList(10); //[10]
  //10 is starting head value
  myLinkedList.append(5); //[10, 5]
  myLinkedList.append(16); //[10, 5, 16]
  myLinkedList.prepend(1); //[1, 10, 5, 16]
  myLinkedList.insert(2, 99); //[1, 10, 99, 5, 16]
  myLinkedList.insert(20, 88); //[1, 10, 99, 5, 16, 88]
  myLinkedList.delete(2); //[ 1, 10, 5, 16, 88 ]

/* Exercise -> Reverse a Linked List
add a method reverse() to the linked
list that reverses the entire list of nodes */

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      console.log(newNode)
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }
    reverse() {
        if (!this.head.next) { //if only one node exists then
        return this.head;
    } //else conduct reverse()
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second) {
        const temp = second.next; 
        second.next = first;
        first = second;
        second = temp;
      }
      this.head.next = null;
      this.head = first;
      return this;
      /* Returns
    LinkedList {
      head: { value: 88, next: { value: 16, next: [Object] } },
    tail: { value: 1, next: null },
    length: 5 } */
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5)
  myLinkedList.append(16)
  myLinkedList.prepend(1)
  myLinkedList.printList()
  myLinkedList.insert(2, 99)
  myLinkedList.insert(20, 88)
  myLinkedList.printList()
  myLinkedList.remove(2)
  //returns [1, 10, 5, 16, 88]
  myLinkedList.reverse()
  //returns [88, 16, 5, 10, 1]


  //Data Structures: Stacks + Queues

/*

//Stacks --> LIFO (Last in First Out)
Stacks can be built with linked lists or arrays but should be built with arrays especially in JS

Ex. Browser History
We visit: 
1. Google
2. Udemy
3. YouTube

LIFO -> YouTube is most recently visited website

1. YouTube
2. Udemy
3. Google

//Queues --> FIFO (First in First Out)
Queues can be built with linked lists

Ex. Waiting Line
Head                     Tail
Matt -- Joy -- Samir -- Pavel

//We can build stacks and queues with arrays or linked lists

*/



//Stack Implementation - built with Linked Lists (lower-level data structure)

class Node { //each node is like a plate in a stack added LIFO
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top;
    }
    push(value){
      //instantiation of Node
      const newNode = new Node(value);
        if (this.length === 0) {
          this.top = newNode;
          this.bottom = newNode;
        } else {
          const holdingPointer = this.top;
          this.top = newNode;
          this.top.next = holdingPointer;
      } //increment stack length by 1
      this.length++;
      return this;
    }
    pop(){
      if (!this.top) { //if no item exists
        return null;
      }
      if (this.top === this.bottom) { //if only one stack item exists then
        this.bottom = null;
      }
      const holdingPointer = this.top;
      this.top = this.top.next; //Point top to next item in stack 
      //decrement stack length by 1
      this.length--;
      return this;
    }
  }
  
  //instantiation of Stack
  const myStack = new Stack();
  //Stack Items are pushed LIFO (Last in First out)
  myStack.push('Google');
  myStack.push('Twitter');
  myStack.push('Udemy');
  //returns Udemy -- Twitter -- Google
  //Peek Last Item in the Stack
  myStack.peek(); //Udemy
  //Pop Last Item out of stack
  myStack.pop(); //returns Twitter -- Google
  myStack.pop(); //returns Google
  myStack.pop(); //returns empty stack with null top and bottom nodes



/* Stack Implementation - built with Arrays (lower-level data structure).
Arrays in JavaScript already act like stacks so implementation is much easier. */

class Stack {
    constructor() {
      this.array = [];  //create JS array with index starting from [0]
    }
    peek() { //Access last item in the stack
      return this.array[this.array.length-1];
    }
    push(value) {
      this.array.push(value);
      return this;
    }
    pop() {
      this.array.pop();
      return this;
    }
  }
    
    //instantiation of Stack
    const myStack = new Stack();
    //Stack Items are pushed LIFO (Last in First out)
    myStack.push('Google');
    myStack.push('Twitter');
    myStack.push('Udemy');
    //returns Udemy -- Twitter -- Google
    //Peek Last Item in the Stack
    myStack.peek(); //Udemy
    //Pop Last Item out of stack
    myStack.pop(); //returns Twitter -- Google
    myStack.pop(); //returns Google
    myStack.pop(); //returns empty stack with null top and bottom nodes


//Queue Implementation with Linked Lists (lower-level data structure).
//Queues are implemented FIFO (First In First Out). We enqueue and dequeue people in a waiting list in priority of FIFO (or First Come First Served)

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){  //queue is initially empty
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() { //View first item in queue
      return this.first;
    }
    enqueue(value){ //add item to beg. of queue
      const newNode = new Node(value);
        if (this.length === 0) { //if queue is empty then
          this.first = newNode;
          this.last = newNode;
        } else {
          this.last.next = newNode; //Point last (priority) to next item in stack when we queue
          this.last = newNode;
        } //increment queue length by 1
        this.length++;
        return this;
    }
    dequeue(){ //remove item from beg. of queue
      if(!this.first) { //if no item exists in the beg. of queue 
        return null;
      }
      if (this.first === this.last) { //else if only one queue item exists then
        this.last = null; //nullify last entry
      } //else
      const holdingPointer = this.first; //before we dequeue first item we store it in memory space otherwise it will be garbabe collected in JS
      this.first = this.first.next; //Point first (priority) to next item in stack when we dequeue
      this.length--;  //decrement queue length by 1
      return this;
    }
  }
  
  const myQueue = new Queue();
  //Items are queued FIFO (First In First Out)
  myQueue.enqueue('Joy'); //returns Joy 
  myQueue.enqueue('Matt'); //returns Joy -- Matt
  myQueue.enqueue('Pavel'); //returns Joy -- Matt -- Pavel
  myQueue.enqueue('Samir'); //returns Joy -- Matt -- Pavel -- Samir
  myQueue.dequeue(); //returns Matt -- Pavel -- Samir
  myQueue.dequeue(); //returns Pavel -- Samir
  myQueue.dequeue(); //returns Samir
  myQueue.dequeue(); //returns null
  myQueue.peek();




//Data Structures: Trees


//Binary Search Tree (BST) Implementation

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value); //instantiate newNode object in BST
    if (this.root === null) { //if no root node currently exists then
      this.root = newNode; //make first node of BST root node
    } else { //if a root node exists 
      let currentNode = this.root; //then mark root node as currentNode
      while(true) { //while loop to iterate & place left nodes
        if(value < currentNode.value) { //then we go left
          if(!currentNode.left) { //if no node left of root node then
            currentNode.left = newNode; //make new node to left of root node
            return this; //return Binary Search Tree and break loop
          } //else if there is a node left of currentNode
          currentNode = currentNode.left; //then mark that node as currentNode
        } else { //if(value < currentNode.value) 
          //then we go right
          if(!currentNode.right) { //if no node right of root node then
            currentNode.right = newNode; //make new node to right of root node
            return this; //return Binary Search Tree and break loop
          } //else if there is a node right of currentNode
          currentNode = currentNode.right; //then mark that node as currentNode 
        }
      }
    }
  }
  lookup(value){
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}



//Data Structures: Graphs

//Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]];

//Adjacency List
const graph = [[2], [2,3], [0,1,3], [1,2]] 

//Adjacency Matrix 
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0]
}


//implementation of Undirected, Unweighted
class Graph { 
  constructor() { 
    this.numberOfNodes = 0; //keep track of number of vertices
    this.adjacencyList = { // Using hash table/object to easily find connections and insert/delete nodes (vs array methods of shifting/unshifting which are expensive)
    }; 
  } 
  addVertex(node)  { //Method to add new nodes to the adjacencyList
    this.adjacencyList[node] = [];
    this.numberofNodes++; //Increment number of Nodes by 1
  } 
  addEdge(node1, node2) { //Method to add edges(connections) between nodes
    //undirected Graph - Nodes are connected to each other with bidirectional edges
    this.adjacencyList[node1].push(node2); //connect node1 to node2
    this.adjacencyList[node2].push(node1); //connect node2 to node1
  } 
  showConnections() { //Helper function to check all connections between nodes in graph
    const allNodes = Object.keys(this.adjacencyList); 
    for (let node of allNodes) { 
      let nodeConnections = this.adjacencyList[node]; 
      let connections = ""; 
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      } 
      console.log(node + "-->" + connections); 
    } 
} 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5

