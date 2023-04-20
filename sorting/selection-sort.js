// similar to bubble sort, however smallest values bubble to bottom
import { swapEs2015 } from "./swap.js";

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      console.log("current lowest", arr[lowest]);
      console.log("selection sort runs: ", arr);
      if (i !== lowest) swapEs2015(arr, i, lowest);
    }
  }
  return arr;
};

console.log("final selection sort: ", selectionSort([34, 22, 10, 19, 17]));
