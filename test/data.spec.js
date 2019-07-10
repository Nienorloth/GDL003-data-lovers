require("../src/data.js");
const LOL = require("..src/data/lol/lol.json");

describe('filterData()', () => {
    it('debería devolver true para function filterData', () => {
    assertEqual(function('filterData'), true);
  });

  it('debería devolver false para function filterData', () => {
    assertEqual(function('filterData'), false);
  });
});

describe('sortData()', () => {
  it('debería devolver true para function sortData', () => {
  assertEqual(function('sortData'), true);
});

it('debería devolver false para function sortData', () => {
  assertEqual(function('sortData'), false);
  });
});

describe('computeStats()', () => {
  it('debería devolver true para function compuStast', () => {
  assertEqual(function('compuStast'), true);
});
it('debería devolver false para function compuStast', () => {
  assertEqual(function('compuStast'), false);
  });
});
/*describe("filterData", () => {
  it("is a function", () => {
    expect(typeof dataManager.filterData).toBe("function");
  });
  it("returns  `filterData`", () => {
    expect(dataManager.filterData()).toBe("filterData");
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof dataManager.sortData).toBe("function");
  });
  it("returns  `filterData`", () => {
    expect(dataManager.sortData()).toBe("sortData");
  });
});

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof dataManager.computeStats).toBe("function");
  });
  it("returns `computeStats`", () => {
    expect(dataManager.computeStats()).toBe("computeStats");
  });
});
