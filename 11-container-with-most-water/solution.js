const findAreaBetweenHeights = (firstHeightIdx, secondHeightIdx, heights) => {
  const length = Math.abs(firstHeightIdx - secondHeightIdx);
  const height = Math.min(heights[firstHeightIdx], heights[secondHeightIdx]);
  return length * height;
};

const lookForwardMaxArea = (heights) => {
  let maxArea = 0;

  for (let firstHeightIdx = 0; firstHeightIdx < heights.length; firstHeightIdx += 1) {
    for (let furthestHeightIdx = heights.length - 1; furthestHeightIdx > firstHeightIdx; furthestHeightIdx -= 1) {
      if (heights[furthestHeightIdx] >= heights[firstHeightIdx]) {
        const area = findAreaBetweenHeights(firstHeightIdx, furthestHeightIdx, heights);

        if (area > maxArea) {
          maxArea = area;
        }
        break;
      }
    }
  }

  return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  return Math.max(lookForwardMaxArea(height), lookForwardMaxArea(height.reverse()));
};

module.exports = {
  maxArea,
  findAreaBetweenHeights,
  lookForwardMaxArea,
};
