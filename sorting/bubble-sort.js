// largest values bubble to top
// https://visualgo.net/en/sorting - useful link for all sorting
// repeatedly steps through the input list element by element,
// comparing the current element with the one after it,
// swapping their values if needed

//swapping algorithms
// ES5
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

//  ES2015
const swapEs2015 = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

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

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

// If data is almost sorted the algorithm still tries to sort in the same way
// Code will keep going if it's already sorted
// To optimise check if any swaps were made on the latest iteration

const bubbleSortOptimised = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapEs2015(arr, j, j + 1);
        noSwaps = false;
      }
    }
    console.log(arr);
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSortOptimised([8, 1, 2, 3, 4, 5, 6, 7]));
