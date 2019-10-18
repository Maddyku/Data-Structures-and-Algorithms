//Recursion 

let counter = 0;
function inception() {
  console.log(counter)
  if (counter > 3) {
    return 'done';
  }
  counter++;
  return inception();
}

inception()

/* Rules 
  1. Identify the base case
  2. Identify the recursive case
  3. Get closer and closer and return when needed. Usually you have
   2 returns (1 for base case and 1 for recursive case) */


/* Write two functions that finds the factorial of any number. 
One should use recursive, the other should just use a for loop */

function findFactorialRecursive(number) {
    if (number === 2) {
      return 2;
    }
    return number * findFactorialRecursive(number-1);
  }
  findFactorialRecursive(5) //5! = 5*4*3*2*1 = 120
  
  function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
      answer = 2;
    }
    for (let i = 2; i <= number; i++) {
      answer = answer * i;
    }
    return answer;
  }
  
  findFactorialIterative(5)  //5! = 5*4*3*2*1 = 120

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
/* the pattern of the sequence is that each value is the sum of the 2 
previous values, that means that for N=5 → 2+3 */

/* For example: fibonacciRecursive(6) should return 8. Fibonacci Number
 is associated with index that we pass in as n. */

function fibonacciIterative(n){ //O(n) linear time
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
      arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n]
  }
  fibonacciIterative(3);
  
  function fibonacciRecursive(n) { //O(2^n) exponential time 
    if (n < 2) { //then
      return n;
    } //else
      return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
  }
  
  fibonacciRecursive(10) //55
  fibonacciIterative(10) //55


function reverseString(str) {
let arrayStr = str.split("");
let reversedArray = [];
/* We are using closure here so that we don't add the above
 variables to the global scope. */
function addToArray(array) {
    
    if(array.length > 0) {
    reversedArray.push(array.pop());
    addToArray(array);
    }
    return;
}
addToArray(arrayStr);
return reversedArray.join("");
}

reverseString('yoyo master');

function reverseStringRecursive (str) {
if (str === "") {
    return "";
} else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}
}

reverseStringRecursive('yoyo master');



/* Bubble Sort - Highly Inefficient Algorithm. 
Quadratic Time Complexity (0(n^2)) bc/ nested for loops */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if(array[j] > array[j+1]) {
        //Swap numbers if left handside is greater than right handside
        let temp = array[j];
        array[j] = array[j+1];  //and then increment [j] by 1
        array[j+1] = temp;
      }
    }
  }
  console.log(numbers);
}

bubbleSort(numbers); 
//[0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]



/* Selection Sort - Highly Inefficient Algorithm. 
Quadratic Time Complecity (O(n^2)) bc/ nested for loops */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
  console.log(numbers);
}

selectionSort(numbers);
//[0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]


/* Insertion Sort -> Fast with Nearly Sorted data or small dataset.
Otherwise, O(n^2) */
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {  //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {  //find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j-1] && array[i] < array[j])
          { //move number to the right spot using splice method
            array.splice(j,0,array.splice(i,1)[0]);
        }
      }
    }
  }
  console.log(numbers);
}

insertionSort(numbers);
// [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]


//Merge Sort Algorithm Implementation

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  console.log('left:', left);
  console.log('right:', right);

  
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

/*
  left: [ 99, 44, 6, 2, 1 ]
  right: [ 5, 63, 87, 283, 4, 0 ]
  
  left: [ 99, 44 ]
  right: [ 6, 2, 1 ]

  left: [ 99 ]
  right: [ 44 ]

  left: [ 6 ]
  right: [ 2, 1 ]

  left: [ 2 ]
  right: [ 1 ]

  left: [ 5, 63, 87 ]
  right: [ 283, 4, 0 ]

  left: [ 5 ]
  right: [ 63, 87 ]

  left: [ 63 ]
  right: [ 87 ]

  left: [ 283 ]
  right: [ 4, 0 ]

  left: [ 4 ]
  right: [ 0 ]

  [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]
*/

function merge(left, right){
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       result.push(left[leftIndex]);
       leftIndex++;
     } else{
       result.push(right[rightIndex]);
       rightIndex++
    }
  }  
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);


/* Sorting Interview - What Sorting Algorithm to use for each case?

#1 - Sort 10 schools around your house by distance:
    // Small Dataset -> Insertion Sort

#2 - eBay sorts listings by the current Bid amount:
    // Radix OR Counting Sort -> Bids are a fixed length of integers

#3 - Sport scores on ESPN
    // Quick Sort

#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
    //External Sorting -> Merge Sort with good and bad worst case of O(n log n)
    
#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
    //Sorted Data -> Insertion Sort

#6 - Temperature Records for the past 50 years in Canada
    //Integers Fixed Length -> Radix of Counting Sort

#7 - Large user name database needs to be sorted. Data is very random.
    //Merge Sort if Memory is Inexpensive

#8 - You want to teach sorting for the first time
    //Bubble Sort or Selection Sort */




/* Linear Search Algorithms - Worst Case is
O(n), where we search through entire list */

var beasts = ['Centaur', 'Godzilla', 'Mosura',
'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function(item){
    return item === 'Godzilla';
});

beasts.find(function(item){
    return item === 'Godzilla';
});

beasts.includes('Godzilla')


/* Breadth-First Search (BFS) vs Depth First-Search (DFS)
in Binary Search Tree (BST) */

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
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value){
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return null
    }
    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              
              //if parent > current value, make current left child a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          
          //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(parentNode === null) {
              this.root = currentNode.right;
            } else {
              
              //if parent > current, make right child of the left the parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          
          //Option 3: Right child that has a left child
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if(parentNode === null) {
              this.root = leftmost;
            } else {
              if(currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }
  }
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  tree.remove(170)
  JSON.stringify(traverse(tree.root))
  
  //     9
  //  4     20
  //1  6  15  170
 
Breadth-First Search (BFS) -> [9, 4, 20, 1, 6, 15, 170]
Depth-First Search (DFS) -> [9, 4, 1, 6, 20, 15, 170 ]
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  

/*      BFS vs DFS UseCases
If you know a solution is not far from the root of the tree:
Near Root Node
BFS

If the tree is very deep and solutions are rare: 
Deep BUT Solutions are Rare
BFS

If the tree is very wide:
Breadth
DFS (BFS will need too much memory)

If solutions are frequent but located deep in the tree:
Deep 
DFS

Determining whether a path exists between two nodes:
DFS

Finding the shortest path:
Shortest Path
BFS         */


//BreadthFirstSearch() on BST

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
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value){
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      while(currentNode){
        if(value < currentNode.value){
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          return currentNode;
        }
      }
      return null
    }
    remove(value) {
      if (!this.root) {
        return false;
      }
      let currentNode = this.root;
      let parentNode = null;
      while(currentNode){
        if(value < currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if(value > currentNode.value){
          parentNode = currentNode;
          currentNode = currentNode.right;
        } else if (currentNode.value === value) {
          //We have a match, get to work!
          
          //Option 1: No right child: 
          if (currentNode.right === null) {
            if (parentNode === null) {
              this.root = currentNode.left;
            } else {
              
              //if parent > current value, make current left child a child of parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.left;
              
              //if parent < current value, make left child a right child of parent
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = currentNode.left;
              }
            }
          
          //Option 2: Right child which doesnt have a left child
          } else if (currentNode.right.left === null) {
            currentNode.right.left = currentNode.left;
            if(parentNode === null) {
              this.root = currentNode.right;
            } else {
              
              //if parent > current, make right child of the left the parent
              if(currentNode.value < parentNode.value) {
                parentNode.left = currentNode.right;
              
              //if parent < current, make right child a right child of the parent
              } else if (currentNode.value > parentNode.value) {
                parentNode.right = currentNode.right;
              }
            }
          
          //Option 3: Right child that has a left child
          } else {
  
            //find the Right child's left most child
            let leftmost = currentNode.right.left;
            let leftmostParent = currentNode.right;
            while(leftmost.left !== null) {
              leftmostParent = leftmost;
              leftmost = leftmost.left;
            }
            
            //Parent's left subtree is now leftmost's right subtree
            leftmostParent.left = leftmost.right;
            leftmost.left = currentNode.left;
            leftmost.right = currentNode.right;
  
            if(parentNode === null) {
              this.root = leftmost;
            } else {
              if(currentNode.value < parentNode.value) {
                parentNode.left = leftmost;
              } else if(currentNode.value > parentNode.value) {
                parentNode.right = leftmost;
              }
            }
          }
        return true;
        }
      }
    }
    breadthFirstSearch() { //BFS Algorithm Implementation
      let currentNode = this.root; //Starting node is root node
      let list = []; //To store all node values 
      let queue = []; //keep track of ancestor node pointers at each level to go back to later after we scan the leaves. Pointers do consume more memory, however.
      queue.push(currentNode);
        while (queue.length > 0) {
          currentNode = queue.shift();
          list.push(currentNode.value);
          if (currentNode.left) { //IF node to left of current node exists THEN
            queue.push(currentNode.left) //push that left node into queue
          }
          if (currentNode.right) { //IF node to right of current node exists THEN
            queue.push(currentNode.right) //push that right node into queue
        }
      }
      return list; 
    }
  }
  
  //Breadth-First Search - [9, 4, 20, 1, 6, 15, 170]
  //     9
  //  4     20
  //1  6  15  170
  
  const tree = new BinarySearchTree();
  tree.insert(9)
  tree.insert(4)
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
  tree.insert(1)
  JSON.stringify(traverse(tree.root))
  tree.breadthFirstSearch() // => [9, 4, 20, 1, 6, 15, 170]
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  

  