import { getDigit, digitCount, mostDigits } from "./radix-helpers.js";

const radixSort = (nums) => {
  const maxDigitCount = mostDigits(nums);
  console.log("max digits in this array:", maxDigitCount);
  for (let k = 0; k < maxDigitCount; k++) {
    // creates empty buckets for each digit 0-9
    const digitBuckets = Array.from({ length: 10 }, () => []);
    // loop over every number
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(`these are the digit buckets for k=${k}`, digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(`this is the sorted array on round k=${k}`, nums);
  }
  return nums;
};

console.log("radix sorted array: ", radixSort([23, 345, 5467, 12, 2345, 9853]));
