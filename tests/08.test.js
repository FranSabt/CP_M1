const { LinkedList } = require("../checkpoint/08");

describe("Ejercicio 08 - LinkedList.sliceRooms()", () => {
  test("Deberia devolver una nueva lista particionada a partir de los indices", () => {
    const list = new LinkedList();
    list.add("Cocina");
    list.add("Dormitorio");
    list.add("Baño");
    list.add("Living");
    list.add("Garage");
    const slicedList = list.sliceRooms("Dormitorio", "Garage");
    expect(slicedList).toBeInstanceOf(LinkedList);
    expect(slicedList.head.value).toEqual("Baño");
    expect(slicedList.head.next.value).toEqual("Living");
  });

  test("Deberia retornar false si no se encuentra ninguno de los índices en la lista", () => {
    const list = new LinkedList();
    list.add("Cocina");
    list.add("Dormitorio");
    list.add("Baño");
    list.add("Living");
    list.add("Garage");
    expect(list.sliceRooms("Oficina", "Lavadero")).toEqual(false)
    expect(list.sliceRooms("Cocina", "Lavadero")).toEqual(false)
    expect(list.sliceRooms("Oficina", "Garage")).toEqual(false)
  });
});
