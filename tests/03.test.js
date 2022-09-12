const { casasPorAño } = require("../checkpoint/03");
describe("Ejercicio 03 - casasPorAño", () => {
  let n;
  let data = {
    0: 0,
    1: 30,
    2: 60,
    3: 90,
    4: 120,
    5: 150,
    6: 180,
    7: 210,
    8: 240,
    9: 270,
  };
  beforeEach(() => {
    n = Math.floor(Math.random() * 10);
  });

  test("La función debe obtener la cantidad de casas por año de forma recursiva.", () => {
    expect(casasPorAño(3)).toEqual(90);
    expect(casasPorAño(n)).toEqual(data[n]);
  });
  test("Si el valor de n recibido por parámetro es menor a 0, debe retornar false", () => {
    expect(casasPorAño(-1)).toEqual(false);
    expect(casasPorAño(-2)).toEqual(false);
    expect(casasPorAño(-3)).toEqual(false);
  });
  test("Si el valor de n recibido por parámetro es 1, debe retornar 30.", () => {
    expect(casasPorAño(1)).toEqual(30);
  });
});
