const { BinarySearchTree } = require("../checkpoint/10");

describe("Ejercicio 10 - ingresoEmpleado", () => {
  test("Debería retornar true si los árboles son iguales", () => {
    const housePrices = new BinarySearchTree(6);
    housePrices.insert(4)
    housePrices.insert(8)
    housePrices.insert(3)
    housePrices.insert(5)
    housePrices.insert(7)
    housePrices.insert(9)
// este arbol equivale a:
//                6
//             /      \
//           4         8
//         /  \       /  \
//        3    5     7    9

    const anotherHousePrices = new BinarySearchTree(13)
    anotherHousePrices.insert(8)
    anotherHousePrices.insert(3)
    anotherHousePrices.insert(1)
    anotherHousePrices.insert(7)
    anotherHousePrices.insert(15)
    anotherHousePrices.insert(16)
    anotherHousePrices.insert(14)
    anotherHousePrices.insert(20)
    anotherHousePrices.insert(5)
    // y este otro equivale a:
//                13
//             /      \
//           8         15       
//         /  \       /  \
//        3    7     14   16
//      /  \                \
//     1    5                20
//      
    expect(housePrices.spotHousePrices(6, [])).toEqual([8, 7, 9]);
    expect(housePrices.spotHousePrices(4, [])).toEqual([6, 5, 8, 7, 9]);
    expect(housePrices.spotHousePrices(12, [])).toEqual([]);
    expect(housePrices.spotHousePrices(1, [])).toEqual([6, 4, 3, 5, 8, 7, 9]);
    expect(anotherHousePrices.spotHousePrices(6, [])).toEqual([13, 8, 7, 15, 14, 16, 20]);
    expect(anotherHousePrices.spotHousePrices(14, [])).toEqual([15, 16, 20]);
    expect(anotherHousePrices.spotHousePrices(4, [])).toEqual([13, 8, 7, 5, 15, 14, 16, 20]);
  });
});
