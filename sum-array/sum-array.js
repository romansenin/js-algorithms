// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
};
