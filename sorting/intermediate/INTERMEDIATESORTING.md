# Sorting Algorithms - Intermediate

- Much faster than basic algorithms, but less intuitive and harder to implement
- Improves time complexity to O(_n_ log _n_)

## Merge sort, Quick sort and Radix sort

#### Merge sort

- A combination of splitting, merging and sorting
- Exploits the fact that arrays of 0 or 1 elements are already sorted
- Decomposes array into smaller sub arrays until there are 0 or 1 elements, then builds up a sorted array

```
[8] [3] [5] [4] [7] [6] [1] [2]
[3, 8] [4, 5] [6, 7] [1, 2]
[3, 4, 5, 8] [1, 2, 6, 7]
[1, 2, 3, 4, 5, 6, 7, 8]
```

##### Merging arrays

- Returns combination of two sorted arrays
- Function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it
- Create an empty array, compare two smallest values in each input array
- While there are values that haven't been looked at:
  - If the value in the first array is smaller than the value in the second, push the value of the first array into the new array and move to the next value in the first array
  - If the value in the first array is larger than the value in the second, push the value of the second array and move onto the next value in the second array
- Once we exhaust one array, push all remaining values from the other array in

##### Merge sort pseudocode

- Break array into halves until all arrays are empty or have one element (use array.slice and recursively break them up until array.length <= 1)
- Once we have these, use the above merge function and then return the merged array

###### Time complexity

- Worst case O(_n_ log _n_)
- Average O(_n_ log _n_)
  - For example, if length of array is 8, we have to split it 3 times to get arrays of length 1
  - If length is 32, we split it 5 times etc
  - So there are O(log n) decompositions and O(n) comparisons per decomposition
- Space complexity O(n)

#### Quick sort

- Like merge sort, exploits the fact that 0 or 1 length arrays are already sorted
- Works by finding a single 'pivot' element, and finding the index where the pivot should end up in the sorted array
- The runtime of quick sort depends in part on the pivot picked
- Ideally it should be the median value of the dataset (not practical in reality)
- So in this code the first value is used

```
[4, 6, 9, 1, 2, 5, 3]
[3, 2, 1, 4, 6, 9, 5]
[2, 1, 3, 4, 5, 6, 9]
[1, 2, 3, 4, 5, 6, 9]
```

##### Pivot helper function

- This function designates an element as the pivot
- It then rearranges the elements in the array so smaller elements are moved to the left and larger ones are moved to the right
- The order of elements on either side of the pivot doesn't matter (will be solved recursively)
- The helper should do this **in place** (i.e. a new array is not created)
- When complete, the function returns the index of the pivot

##### Pivot function pseudocode

- Function that accepts array, start index and an end index (can default to 0 and arr.length - 1)
- Pick pivot from start of array
- Store current pivot index in variable
- Loop through array
  - If pivot is greater than the current element, increment the pivot index and swap the current element with the element at the pivot index
- Swap the starting element (the pivot) with the pivot index
- Return the pivot index

##### Quick sort pseudocode

- Call the pivot helper on the array
- When the helper returns the pivot index, recursively call it again on the subarrays on the left and right side of the pivot point (not including the pivot)
- The array will not be changed, so the base case will be if the left and right indexes of the subarray are equal (i.e. the subarray is of length 1)

###### Time complexity

- Worst case O(n<sup>2</sup>)
  - If the array is already sorted and the pivot is the first or last element, each decomposition is only one item (everything is already to the right or left of the pivot)
  - So this will be n decompositions and n comparisons per decomposition
  - To fix this, pivot around a random item or the middle element (but this does not completely avoid the chances of picking the minimum or maximum)
- Average O(_n_ log _n_)
  - As n grows we have to make log n decompositions
  - And n comparisons per decomposition
- Space complexity O(log n)
