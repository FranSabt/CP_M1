const { sortPrimeHouses } = require("../checkpoint/06");

describe("Test de ejercicio 06 - agregarProductos", () => {
  const sortSpy = jest.spyOn(Array.prototype, "sort");
  test("Debería ordenar el array de menor a mayor y filtrar los números primos", () => {
    sortPrimeHouses([]);
    expect(sortSpy).not.toHaveBeenCalled();
    expect(sortPrimeHouses([25, 3, 6, 8, 5, 12, 9, 18, 11, 7])).toEqual(false);
    expect(sortPrimeHouses([61, 7, 13, 11, 29, 3])).toEqual([3, 7, 11, 13, 29, 61])
    expect(sortPrimeHouses([29, 11, 2, 17, 13, 3, 7, 59, 61, 5])).toEqual([2, 3, 5, 7, 11, 13, 17, 29, 59, 61]);
    expect(sortPrimeHouses([4, 6, 8, 10, 12, 15, 18, 20, 21])).toEqual(false);
    expect(sortPrimeHouses([53, 3, 5, 11, 7, 59, 61, 97, 83, 71, 13, 89, 67, 73, 43, 41, 2])).toEqual([2, 3, 5, 7, 11, 13, 41, 43, 53, 59, 61, 67, 71, 73, 83, 89, 97]);
    expect(sortSpy).not.toHaveBeenCalled();
  });
});
