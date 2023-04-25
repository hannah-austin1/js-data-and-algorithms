# Sorting Algorithms - Intermediate

- Much faster than basic algorithms, but less intuitive and harder to implement
- Improves time complexity to O(_n_ log _n_)

##### Sections

[Merge sort](#merge-sort)
[Quick sort](#quick-sort)
[Radix sort](#radix-sort)

### Merge sort

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

### Quick sort

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

### Radix sort

- The other sorts we've seen so far are known as comparison sorts, they compare one element to another
- The best time complexity for any comparison sort is O(_n_ log _n_)
- We can improve on the time complexity of sorting, but not by making comparisons
- Radix sort is a special sorting algorithm that only works on lists of numbers
- Exploits the fact that a size of a number is encoded in the number of digits
- Iterates through list of numbers, starting with the first digit on the right hand side of each number
- Groups numbers into buckets based on the last digit

**Example**

```
[1556, 4, 3556, 593, 408, 902, 7, 8157, 86, 9637, 29]
```

becomes

| 0   | 1   | 2   | 3   | 4   | 5   | 6                          | 7                 | 8   | 9   |
| --- | --- | --- | --- | --- | --- | -------------------------- | ----------------- | --- | --- |
|     |     | 902 | 593 |     |     | 86<br>4386<br>3556<br>1556 | 9637<br>8157<br>7 | 408 | 29  |

- The numbers are then ordered in terms of their last digit, so numbers with 2 as their last digit come before numbers with 3

```
[902, 593, 4, 1556, 3556, 4386, 86, 7, 8157, 9637, 408, 29]
```

- Repeat the process looking at the second digit from the right. If the numbers don't have any digit in that position they go in the 0 bucket

| 0                    | 1   | 2   | 3    | 4   | 5                    | 6   | 7   | 8          | 9   |
| -------------------- | --- | --- | ---- | --- | -------------------- | --- | --- | ---------- | --- |
| 408<br>7<br>4<br>902 |     | 29  | 9637 |     | 8157<br>3556<br>1556 |     |     | 86<br>4386 | 593 |

```
[902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]
```

- Repeat again with the third digit

| 0                  | 1    | 2   | 3    | 4   | 5                   | 6    | 7   | 8   | 9   |
| ------------------ | ---- | --- | ---- | --- | ------------------- | ---- | --- | --- | --- |
| 86<br>29<br>7<br>4 | 8157 |     | 4386 | 408 | 593<br>3556<br>1556 | 9637 |     |     | 902 |

```
[4, 7, 29, 86, 8157, 4386, 408, 1556, 3556, 593, 9637, 902]
```

- Finally (in this case) repeat with the fourth digit

| 0                                       | 1    | 2   | 3    | 4    | 5   | 6   | 7   | 8    | 9    |
| --------------------------------------- | ---- | --- | ---- | ---- | --- | --- | --- | ---- | ---- |
| 902<br>593<br>408<br>86<br>29<br>7<br>4 | 1556 |     | 3556 | 4386 |     |     |     | 8157 | 9637 |

- So the final ordered list is:

```
[4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
```

#### Radix sort helper functions

**getDigit**

- getDigit(num, place) - returns digit in number from the right at given place value
  ```
  getDigit(12345, 0) => 5
  getDigit(12345, 1) => 4
  getDigit(12345, 4) => 1
  ```
- With base 10 numbers, each position represents a power of 10, so we can divide by that power of 10
  ```
   Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
  ```
- Does 10 to the power of the given place and divides the number by it. The mod 10 at the end divides the number by 10 and gives the remainder so eg:
  - getDigit(7323, 2)
  - 10<sup>2</sup> is 100, so 7323/100 is 73.23
  - 73.23/10 gives 7 remainder 3, which is our answer

**digitCount**

- digitCount(num) - Returns the largest number of digits for a single number
- We could do this using string.length or do some maths
  ```
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  ```
- Determines how many tens goes into a number, and then adds one to get the number of digits

**mostDigits**

- mostDigits(nums) - given a list of numbers, returns the number of digits in the largest numbers in the list
- Do digitCount on each number and keep tally on maximum, and return maximum digitCount

#### Radix sort pseudocode

- Define a function that accepts a list of numbers
- Figure out how many digits the largest number has
- Loop from _k=0_ until this largest number of digits
- For each iteration:
  - Create buckets for each digit (0-9) (empty sub arrays)
  - Place each number in its corresponding bucket based on the _kth_ digit
- Replace the existing array with the values in each bucket
- Return the list at the end
- Two loops required, outer that is looking at the digit, and inner that places them in the right place

#### Big O complexity

- Best, average and worst case O(_nk_) where _n_ is the number of integers in the list and _k_ is the length of the longest number
  - If we have very long numbers, this will significantly impact the time
- Space complexity O(_n+k_)
- The topic of efficiency of radix sort is quite controversial - there are some arguments that it is only O(_n_ log _n_) but don't worry about this
