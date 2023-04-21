import { pivot } from "./pivot.js";

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // if the length of the subarray is > 1
  console.log("quick sort runs:", arr);
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left side
    quickSort(arr, left, pivotIndex - 1);
    // right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
};

const arr = [4, 6, 9, 1, 2, 5, 3];
console.log("starting array: ", arr);
quickSort(arr);
