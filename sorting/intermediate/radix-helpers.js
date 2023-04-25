// getDigit(num, place) - returns digit in number from the right at given place values
export const getDigit = (num, place) =>
  Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

// digitCount(num) - Returns the largest number of digits for a single number
// could do this alternatively using string.length
export const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

//mostDigits(nums) - given a list of numbers, returns the number of digits in the largest numbers in the list
export const mostDigits = (nums) => {
  let mostDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    mostDigits = Math.max(mostDigits, digitCount(nums[i]));
  }
  return mostDigits;
};
