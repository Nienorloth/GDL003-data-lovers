require('../src/data.js');


describe('filter', () => {
  it('is a function', () => {
    expect(typeof dataManager.filter).toBe('function');
  });
  it('returns  `filter`', () => {
    expect(dataManager.filter()).toBe('filter');
  });
});

describe('sort', () => {
  it('is a function', () => {
    expect(typeof dataManager.sort).toBe('function');
  });
  it('returns  `filter`', () => {
    expect(dataManager.sort()).toBe('sort');
  });
});

describe('computeStats', () => {
  it('is a function', () => {
    expect(typeof dataManager.computeStats).toBe('function');
  });
  it('returns `computeStats`', () => {
    expect(dataManager.computeStats()).toBe('computeStats'); 
});
});