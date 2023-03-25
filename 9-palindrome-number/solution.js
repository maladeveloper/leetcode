/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const xStr = x.toString();
  const xStrLen = xStr.length;

  for (let leftIndex = 0; leftIndex < xStrLen; leftIndex += 1) {
    const rightIndex = xStrLen - leftIndex - 1;
    const leftDigit = xStr[leftIndex];
    const rightDigit = xStr[rightIndex];

    if (leftDigit !== rightDigit) {
      return false;
    }
  }
  return true;
};
