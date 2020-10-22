// Write code to return the largest number in the given array

const maxNum = function (arr) {
  if (!arr.length) {
    throw new Error("Array must have at least one element");
  }

  let maxNum = arr[0];

  arr.forEach((num) => {
    maxNum = num > maxNum ? num : maxNum;
  });

  return maxNum;
};
