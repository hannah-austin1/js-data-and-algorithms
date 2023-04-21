import { swapEs2015 } from "../swap.js";
export const pivot = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  let pivot = arr[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swapEs2015(arr, pivotIndex, i);
    }
  }
  // Swap the pivot from the start the swapPoint
  swapEs2015(arr, startIndex, pivotIndex);
  return pivotIndex;
};
