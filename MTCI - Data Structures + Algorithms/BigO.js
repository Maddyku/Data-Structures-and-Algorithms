//Big O and Scalability

/* Good code is readable and scalable. We use 
BigO Notation to determine scalability of our programs
by determining algorithmic efficiency. BigO is the measure
of the longest amount of runtime it could possibly take
for the algorithm to complete. Runtime (Time Complexity)
is caused by operations (+, -, *, /), comparisons (<, >, ==),
looping (for loop, while loop) and function calls (function()) */

//Finding Nemo Algorithm | O(n) --> Linear Time
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
 const large = new Array(5000).fill('nemo');

function findNemo(array) {
  let t0 = performance.now(); //timer starts before loop
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');      
      break; //exit out of loop when condition is met (when Nemo is found!)
    }
  }
  let t1 = performance.now(); //timer starts after loop
  console.log('Call to find Nemo took ' + (t1 - t0) + 'milliseconds');
}
 
/*  O(n) --> Linear Time
As inputs (elements) increase, operations increase in a 
proportional fashion. Usually the case in a for loop with
'n' items */

/* Even if Nemo is first item in array and loop breaks after first iteration O(1), 
we assume O(n) because we assume worst case scenario (that Nemo is last item in array) */
findNemo(nemo);
findNemo(everyone);
findNemo(large);


//First 2 Boxes | O(1) --> Constant Time 
const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]);
  console.log(boxes[1]);
}

logFirstTwoBoxes(boxes) // 0(2)

/* O(1) --> Constant Time
We do same amount of operations each time, regardless of inputs. 
In this example we are doing 2 operations, but whether we do 1, 2 or 100 
we are running a constant time algorithm and we round it down to O(1) */ 



/* O(n) [linear time] and O(1) [constant time] have
highly efficient algorithmic runtime, that
is as number of elements scale or stay constant, 
number of operations scale efficiently or stay constant */

/* Calculating BigO RuleBook 
Rule 1: Assume Worst Case
Rule 2: Remove Constants
Rule 3: Different Terms for Inputs
Rule 4: Drop Non Dominants  */

//Rule 1 - Assume Worst Case
//Finding Nemo Algorithm | O(n) --> Linear Time
const everyone = ['nemo', 'dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(array) {
  let t0 = performance.now(); //timer starts before loop
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found NEMO!');      
      break; //exit out of loop when condition is met (when Nemo is found!)
    }
  }
  let t1 = performance.now(); //timer starts after loop
  console.log('Call to find Nemo took ' + (t1 - t0) + 'milliseconds');
}

findNemo(everyone);
/* Rule 1 - Assume Worst Case
Even if Nemo is first item in array and loop breaks after first iteration O(1), 
we assume O(n) because we assume worst case scenario 
(that Nemo is last item in array) */


//Rule 2 - Remove Constants

//Ex. 1
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); //O(1)

    var middleIndex = Math.floor(items.length / 2); //O(n/2)
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi'); //O(100)
    }
}

//Rule 2 - Remove Constants
//O(1 + n/2 + 100)
//O(n/2)
//O(n)

//Ex. 2
function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}

//Rule 2 - Remove Constants
//O(2n)
//O(n)


//Rule 3 - Different Terms for Inputs
function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes2.forEach(function(boxes) {
        console.log(boxes);
    });
}

//Rule 3 - Different Terms for Inputs
//O(a + b)

/* O(n^2) | Nested Loops */
// Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairsOfArray(array) { //nested loop
  for (let i = 0; i < array.length; i++) { //O(n)
    for (let j = 0; j < array.length; j++) { //O(n)
      console.log(array[i], array[j])
    }
  }
}

logAllPairsOfArray(boxes)

//Nested Loop
//O(n * n)
//O(n^2) --> Quadratic Time
/* Very inefficient algorithmic runtime -
As number of elements increases, number of operations 
increases significantly. Two Nested Loops for O(n^2) */


//Rule 4 - Drop Non-Dominants
function printAllNumbersThenAllPairSums(numbers) {

    console.log('these are the numbers:');
    numbers.forEach(function(number) {
      console.log(number); //O(n)
    });
  
    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber) {
      numbers.forEach(function(secondNumber) { //nested loop
        console.log(firstNumber + secondNumber); //O(n^2)
      });
    });
  }
  
  printAllNumbersThenAllPairSums([1,2,3,4,5])
  
  //Rule 4 - Drop Non Dominants
  //O(n + n^2)
  //O(n^2) //We keep the dominant term

//Calculating Big-O Notation
function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //O(n)
      let y = i + 2; //O(n)
      let z = i + 3; //O(n)
  
    }
    for (let j = 0; j < input; j++) {
      let p = j * 2; //O(n)
      let q = j * 2; //O(n)
    }
    let whoAmI = "I don't know"; //O(1)
  }
  
//  BigO(4 + 5n) => BigO(n)

/* 3 Pillars of Programming
1. Readable 
2. Memory - (Big O Space Complexity)
3. Speed - (Big O Time Complexity)
Memory and Speed determine scalability but there are usually
tradeoffs between memory and speed */