# Sorting Algorithms

### Links

[Sorting algorithms visualiser](https://visualgo.net/en/sorting?slide=1)

## Bubble sort, selection sort and insertion sort

- Roughly the same in terms of complexity
- All have average quadratic time complexities
- More complex algorithms are required to improve time complexity

| **Algorithm**  | **Time complexity (best)** | **Time complexity (average)** | **Time complexity (worst)** | **Space complexity** |
| -------------- | -------------------------- | ----------------------------- | --------------------------- | -------------------- |
| Bubble sort    | O(n)                       | O(n<sup>2</sup>)              | O(n<sup>2</sup>)            | O(1)                 |
| Selection sort | O(n<sup>2</sup>)           | O(n<sup>2</sup>)              | O(n<sup>2</sup>)            | O(1)                 |
| Insertion sort | O(n<sup>2</sup>)           | O(n<sup>2</sup>)              | O(n<sup>2</sup>)            | O(1)                 |

### Bubble sort

- Loops through array and sorts the largest values to the end of the array

```
[5, 3, 4, 1, 2]
[3, 4, 1, 2, 5]
[3, 1, 2, 4, 5]
[1, 2, 3, 4, 5]
```

##### Pseudocode

- Compare the first and second elements, starting with the first index.
- They are swapped if the first element is greater than the second.
- Compare the second and third elements now. If they are not in the correct order, swap them.
- The preceding procedure is repeated until it reaches the final element.

##### Time complexity

- Best case O(n)
- Worst case O(n<sup>2</sup>)
- Works well on nearly sorted data

#### Selection sort

- Similar to bubble sort, but instead of sorting large values at end of array first, sorts small values first as beginning of array
- Loops through array and finds minimum value and puts it at the front

```
[5, 3, 4, 1, 2]
[1, 3, 4, 5, 2]
[1, 2, 4, 5, 3]
[1, 2, 3, 4, 5]
```

##### Pseudocode

- First store the first element in array as smallest value
- Compare this to next item in array until smaller number found
- If smaller number found, designate it to be new minimum and continue to end of array
- If minimum is not value you began with (index), swap them
- Repeat this with array excluding the minimum and so on

##### Time complexity

- O(n<sup>2</sup>)
- Better than bubble sort if you want to minimise number of swaps, only one swap is made at end of each loop
- This is better in terms of saving memory
- Does not work well on nearly sorted data

#### Insertion sort

- Similar to bubble and selection sort, but has more benefits
- Builds up sort by gradually creating a larger left portion of array which is always sorted
- Takes each element and places it where it should go in the sorted portion

```
[5, 3, 4, 1, 2]
[3, 5, 4, 1, 2]
[3, 4, 5, 1, 2]
[1, 3, 4, 5, 2]
[1, 2, 3, 4, 5]
```

##### Pseudocode

- Start by picking second element in array (first element is now the sorted portion)
- Compare it with the element before and swap if necessary
- Continue to next element and if it is in the wrong place, iterate through the sorted portion to place it in the correct spot
- Repeat until array is sorted

##### Time complexity

- If data is nearly sorted, best case is O(n)
- Average case is O(n<sup>2</sup>)
- Insertion sort is great for live data, i.e. all the values are not provided at once. This is because one side of the array is always sorted
- Works well on nearly sorted data
