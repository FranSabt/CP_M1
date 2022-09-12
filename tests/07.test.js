const { LinkedList } = require("../checkpoint/07");

describe("Ejercicio 07 - LinkedList.mapHouses()", () => {
  test("Debería modificar los valores de la lista actual", () => {
    const list = new LinkedList();
    list.add("Casa Moderna")
    list.add("Casa Moderna")
    list.add("Casa Moderna")
    list.mapHouses("Cabaña Antigua");
    expect(list.head.value).toEqual("Cabaña Antigua");
    expect(list.head.next.value).toEqual("Cabaña Antigua");
    expect(list.head.next.next.value).toEqual("Cabaña Antigua");
  });
  test("Debería funcionar con otros tipos de datos", () => {
    const arrayList = new LinkedList();
    const objectList = new LinkedList();
    arrayList.add(["Casa de verano", "Casa de invierno"]);
    arrayList.add(["Casa de verano", "Casa de invierno"]);
    arrayList.add(["Casa de verano", "Casa de invierno"]);
    arrayList.mapHouses(["Casa de otoño", "Casa de primavera"])
    expect(arrayList.head.value).toEqual(["Casa de otoño", "Casa de primavera"]);
    expect(arrayList.head.next.value).toEqual(["Casa de otoño", "Casa de primavera"]);
    expect(arrayList.head.next.next.value).toEqual(["Casa de otoño", "Casa de primavera"]);
    objectList.add({ casa: "Disponible" });
    objectList.add({ casa: "Disponible" });
    objectList.add({ casa: "Disponible" });
    objectList.mapHouses({ casa: "Ocupada" });
    expect(objectList.head.value).toEqual({ casa: "Ocupada" });
    expect(objectList.head.next.value).toEqual({ casa: "Ocupada" });
    expect(objectList.head.next.next.value).toEqual({ casa: "Ocupada" });
  });
  test("Debería retornar false si la lista está vacía", () => {
    const emptyList = new LinkedList();
    expect(emptyList.mapHouses()).toEqual(false);
  });
});
