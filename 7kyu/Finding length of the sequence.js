// As part of this kata, you need to find the length of the sub-array that begins and ends with the specified number.

// For example, if the array arr is [0, -3, 7, 4, 0, 3, 7, 9], finding the length of the sub-array that begins and ends with 7s would return 5.

// For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

// If there are less or more than two occurrences of the number to search for, return 0.

// As a reminder, the sub-array to find will need to have both the first and last numbers matching.

// solution:

function findSubarrLength(arr, n) {
    const idx = arr.indexOf(n);
    if (idx === -1 || arr.lastIndexOf(n) === idx)
      return 0;
    return arr.lastIndexOf(n) - idx + 1;
  }
