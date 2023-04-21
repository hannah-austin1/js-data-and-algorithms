const insertionSort = (arr) => {
  console.log("initial array to sort: ", arr);
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    // This loop saves an extra if statement, will break if arr[j] is greater than current value
    for (j; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    console.log("current val to insert", currentVal);
    arr[j + 1] = currentVal;
    console.log("insertion sort runs:", arr);
  }
  return arr;
};

console.log("final insertion sort:", insertionSort([5, 3, 4, 1, 2]));
