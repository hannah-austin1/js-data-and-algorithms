// standard array.sort uses unicode so number sorting is inaccurate
// can pass in comparitor function instead
// can do this with strings to order by string lengths etc

function compareNumbers(a, b) {
  return a - b;
}

const numberArray = [40, 1, 5, 200];
numberArray.sort(compareNumbers); // [1, 5, 40, 200]
