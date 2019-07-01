require('../src/data.js');


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof dataManager.filterData).toBe('function');
  });
  it('returns  `filterData`', () => {
    expect(dataManager.filterData()).toBe('filterData');
  });
});

describe('sortData', () => {
  it('is a function', () => {
    expect(typeof dataManager.sortData).toBe('function');
  });
  it('returns  `filterData`', () => {
    expect(dataManager.sortData()).toBe('sortData');
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
