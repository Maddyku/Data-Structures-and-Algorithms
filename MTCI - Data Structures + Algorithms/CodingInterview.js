//Coding Interview Exercise 1 

//Exercise: Interview Question
/* Given 2 arrays, create a function that lets a user know
(true/false) whether these two
arrays contain any common items */

/* Explain High Level Overview to Interviewer 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
should return false.

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
should return true.

Doublecheck Inputs and Size (Memory Limit)
2 parameters - arrays -> No Size Limit
return true or false

Talk about BruteForce Solution - O(n^2) [quadratic time] for nested for loops
Why it's bad -> Quadratic time is not efficient */

//Brute Force -> O(n^2) Quadratic Time

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];

// function containsCommonItem(arr1, arr2) {
//   for (let i=0; i < arr1.length; i++) {
//     for (let j=0; j < arr2.length; j++) {
//       if(arr1[i] === arr2[j]) { //if true
//         return true;
//       }
//     }
//   } //if false
//   return false; 
// }

// containsCommonItem(array1, array2); //returns 'true'

//Improving Time Complexity

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containsCommonItem2(arr1, arr2) {
  // loop through first array and create map object where properties === items in the array
  let map = {};
  for (let i=0; i < arr1.length; i++) {
    if(!map[arr1[i]]) { //if map index does not exist then we create it
      const item = array1[i];
      map[item] = true;
    }
  }
  console.log(map)
  // loop through second array and check if item in second array exists on created object
  for (let j=0; j < arr2.length; j++) {
    if (map[arr2[j]]) { 
      return true;
    }
  }
  return false;
}

/* Time Complexity O(n) Linear Time Complexity More Efficient in Speed but Not Memory
Space complexity O(n) Space Complexity */

//3rd Go Around -> More Readable JS Code & More Efficient, Time Complexity => O(1) Constant Time

function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)



//Google Interview Question

// Naive Approach -> O(n^2) Quadratic Time
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for(var i =0; i<len-1; i++){
       for(var j = i+1;j<len; j++){
          if (arr[i] + arr[j] === sum)
              return true;
       }
    }
  
    return false;
  }
  
  // Better Approach -> O(n) Linear Time
  function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
    }
    return false;
  }
  
  hasPairWithSum2([6,4,3,2,1,7], 9)
//returns true

