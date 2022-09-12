const { tipologiasSeparadas } = require("../checkpoint/05");
const { Stack } = require("../DS");

describe("Ejercicio 05 - tipologiasSeparadas", () => {
  test("En caso de recibir un array vacio debe retornar 'Tipologias inexistentes'", () => {
    expect(tipologiasSeparadas([])).toBe("Tipologias inexistentes");
  });
  test("El Stack que retorna debe ser una instancia de la clase Stack", () => {
    expect(
      tipologiasSeparadas([14, 1, 10, 10, 7, 7, 3, 1, 5]) instanceof Stack
    ).toEqual(true);
  });
  test("La función debe crear y retornar el Stack creado con las casas de forma correcta, sin tipologias repetidas . ", () => {
    expect(tipologiasSeparadas([14, 1, 10, 10, 7, 7, 3, 1, 5])).toEqual({
      array: [14, 1, 10, 7, 3, 1, 5, 10, 7],
    });
    expect(tipologiasSeparadas([14, 14, 2, 8, 5, 5, 3, 1, 5])).toEqual({
      array: [14, 2, 8, 5, 3, 1, 5, 14, 5],
    });
  });
  test("En caso de que no hayan tipologias repetidas debe retornar 'No hay tipologias repetidas'", () => {
    expect(tipologiasSeparadas([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(
      "No hay tipologias repetidas"
    );
    expect(tipologiasSeparadas([1, 6, 14, 2, 5, 4, 3, 11, 7])).toBe(
      "No hay tipologias repetidas"
    );
  });
});
