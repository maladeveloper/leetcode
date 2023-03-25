const { maxArea, findAreaBetweenHeights, lookForwardMaxArea } = require('./solution');

describe('maxArea', () => {
  it('finds the maximum area of the container', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toEqual(49);
  });
});

describe('lookForwardMaxArea', () => {
  it('looks forward starting from the furthest height to find maximum area', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(lookForwardMaxArea(height)).toEqual(40);
  });

  describe('when the heights are in reversed order', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    it('a different maximum area is found', () => {
      expect(lookForwardMaxArea([...height].reverse())).toEqual(49);
    });
  });
});

describe('findAreaBetweenHeights', () => {
  it('finds the area between two heights', () => {
    expect(findAreaBetweenHeights(0, 1, [4, 8])).toEqual(4);
  });
});
