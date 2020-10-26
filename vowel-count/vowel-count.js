// Write code to return the the number of vowels in `str`

const vowelCount = function (str) {
  return str.length ? str.match(/a|e|i|o|u/gi).length : 0;
};
