import { merge } from "./merge.js";

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const midpoint = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midpoint));
  const right = mergeSort(arr.slice(midpoint));
  console.log("left array:", left);
  console.log("right array:", right);
  const merged = merge(left, right);
  console.log("merged array:", merged);
  return merged;
};

const startingArray = [10, 24, 76, 73];
console.log("starting array:", startingArray);
mergeSort(startingArray);
