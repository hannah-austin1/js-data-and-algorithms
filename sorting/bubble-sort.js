// largest values bubble to top
// https://visualgo.net/en/sorting - useful link for all sorting
// repeatedly steps through the input list element by element,
// comparing the current element with the one after it,
// swapping their values if needed
import { swapEs2015 } from "./swap.js";

// start looping with variable called i from end to beginning
// start inner loop with var called j starting from beginning until i-1
// compare j with j+1
// if arr[j] > arr[j+1] swap them
// number of swaps goes down each time as the last index will be the biggest number at the end of every loop.

const bubbleSort = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapEs2015(arr, j, j + 1);
      }
    }
  }
  return arr;
};

console.log("standard bubble sort: ", bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

// If data is almost sorted the algorithm still tries to sort in the same way
// Code will keep going if it's already sorted
// To optimise check if any swaps were made on the latest iteration

const bubbleSortOptimised = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    console.log(`Optimised bubble sort runs`, arr);
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapEs2015(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

console.log(
  "optimised bubble sort: ",
  bubbleSortOptimised([8, 1, 2, 3, 4, 5, 6, 7])
);
