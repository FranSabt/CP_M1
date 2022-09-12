const { calcularImpuestos } = require("../checkpoint/02");
describe("Ejercicio 02 - calcularImpuestos", () => {
  test(`Si la función no es una boleta/factura (array), devolve "Error" `, () => {
    expect(calcularImpuestos({})).toEqual("Error");
    expect(calcularImpuestos({})).toEqual("Error");
  });
  test("La función debe retornar el total de la boleta/factura", () => {
    expect(calcularImpuestos([104.0, 203.21, 459, 59.24, 5.03])).toEqual(
      830.48
    );
    expect(calcularImpuestos([1.1, 23.54, 305.23, 409.32, 541.23])).toEqual(
      1280.42
    );
    expect(calcularImpuestos([1.14, 23.21, 89.21, 87.25, 51.05])).toEqual(
      251.86
    );
    expect(calcularImpuestos([74.25, 13.54, 67.25, 6.15, 78.2])).toEqual(
      239.39
    );
  });

  test("Si la función no tiene valores, devolve >false < ", () => {
    expect(calcularImpuestos([])).toEqual(false);
    expect(calcularImpuestos([])).toEqual(false);
  });
});
