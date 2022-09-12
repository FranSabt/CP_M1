const { BinarySearchTree } = require("../checkpoint/09");

const miArbol1 = new BinarySearchTree(13);

miArbol1.insert(7);
miArbol1.insert(24);
miArbol1.insert(27);
miArbol1.insert(16);
miArbol1.insert(6);
miArbol1.insert(3);
miArbol1.insert(4);
miArbol1.insert(45);

// Este árbol equivale a:
//             13
//          /      \
//        7         24
//      /          /   \
//     6         16     27
//   /                    \
//  3                     45
//   \
//    4

const miArbol2 = new BinarySearchTree(20);

miArbol2.insert(30);
miArbol2.insert(35);
miArbol2.insert(25);
miArbol2.insert(15);
miArbol2.insert(18);
miArbol2.insert(6);
miArbol2.insert(3);
miArbol2.insert(4);
miArbol2.insert(8);

// Este otro equivale a:
//                 20
//              /      \
//            15         30
//          /   \       /  \
//         6    18     25   35                                      
//       /   \
//      3     8
//       \
//        4

const miArbol3 = new BinarySearchTree(30);

miArbol3.insert(14);
miArbol3.insert(11);
miArbol3.insert(9);
miArbol3.insert(6);
miArbol3.insert(3);
miArbol3.insert(1);
miArbol3.insert(38);
miArbol3.insert(56);
miArbol3.insert(78);
miArbol3.insert(89);

// y este último equivale a:
//                   30
//                /      \
//              14        38
//             /            \
//           11              56                                      
//          /                 \
//         9                   78
//        /                      \
//       6                        89
//      /
//     3  
//    /
//   1

describe("Ejercicio 09 - BinarySearchTree.getHouseValues", () => {
  test("Debería retornar la suma de todos los valores de las ramas izquierda", () => {
    expect(miArbol1.getHouseValues("left")).toEqual(16);
    expect(miArbol2.getHouseValues("left")).toEqual(24);
    expect(miArbol3.getHouseValues("left")).toEqual(44);
  });
  test("Debería retornar la suma de todos los valores de las ramas derecha", () => {
    expect(miArbol1.getHouseValues("right")).toEqual(96);
    expect(miArbol2.getHouseValues("right")).toEqual(65);
    expect(miArbol3.getHouseValues("right")).toEqual(261);
  });
});
