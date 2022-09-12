const { construccionCasas } = require("../checkpoint/04");

describe("Ejercicio 04 - construccionCasas", () => {
  test("En caso de que la cantidad de casas que recibimos es 0 o menor, retornar 'Por favor ingresar cuantas casas quieres construir'", () => {
    let construcciones = construccionCasas(50);
    expect(construcciones(0)).toEqual(
      "Por favor ingresar cuantas casas quieres construir"
    );
    expect(construcciones(-10)).toEqual(
      "Por favor ingresar cuantas casas quieres construir"
    );
  });
  test("En caso de que las bolsas sean insuficiente para crear aunque sea una casa, retornar 'No se puede construir casas con esa cantidad de bolsas'", () => {
    let construcciones = construccionCasas(9);
    let construcciones2 = construccionCasas(4);
    expect(construcciones(1)).toEqual(
      "No se puede construir casas con esa cantidad de bolsas"
    );
    expect(construcciones2(1)).toEqual(
      "No se puede construir casas con esa cantidad de bolsas"
    );
  });
  test("En caso de que la cantidad de casas que recibimos sea mayor a la cantidad de bolsas, retornar 'No se puede construir casas con esa cantidad de bolsas'", () => {
    let construcciones = construccionCasas(10);
    expect(construcciones(11)).toEqual(
      "Solo puedes construir esta cantidad de casas: 1"
    );
    let construcciones2 = construccionCasas(50);
    expect(construcciones2(11)).toEqual(
      "Solo puedes construir esta cantidad de casas: 5"
    );
  });
  test("En caso de que la cantidad de casas sea igual a la cantidad de bolsas, retornar true", () => {
    let construcciones = construccionCasas(10);
    expect(construcciones(1)).toBe(true);
    let construcciones2 = construccionCasas(50);
    expect(construcciones2(5)).toBe(true);
  });
});

// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
