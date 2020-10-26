// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

const isPalindrome = function (str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
  }
  return true;
};
