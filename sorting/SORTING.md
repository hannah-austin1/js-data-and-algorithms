# Sorting Algorithms

[Sorting algorithms visualiser](https://visualgo.net/en/sorting?slide=1)

## Bubble sort

- Loops through array and swaps based on value
- Compare the first and second elements, starting with the first index.
- They are swapped if the first element is greater than the second.
- Compare the second and third elements now. If they are not in the correct order, swap them.
- The preceding procedure is repeated until it reaches the final element.

### Time Complexity

- Best case O(n)
- Worst case O(n^2)

## Selection sort

- Simiilar to bubble sort, but instead of sorting large values at end of array first, sorts small values first as beginning of array
- Loops through array and finds minimum value and puts it at the front
- First store the first element in array as smallest value
- Compare this to next item in array until smaller number found
- If smaller number found, designate it to be new minimum and continue to end of array
- If minimum is not value you began with (index), swap them
- Repeat this with array excluding the minimum and so on

### Time Complexity

- O(n^2)
- Better than bubble sort if you want to minimise number of swaps, only one swap is made at end of each loop
- This is better in terms of saving memory
