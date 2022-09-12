const { henryParty } = require("../checkpoint/01");
const { Queue } = require("../DS");

describe("Ejercicio 01 - henryParty", () => {
const date = [{
    name:"Carol",
    ticket:"FALSO",
    estado: "Desconocido"
  },{
    name:"Gonzalo",
    ticket:"VIP",
    estado: "Conocido"
  },{
    Name: "Micaias",
    ticket:"VIP",
    estado: "Conocido"
  },{
    Name: "Coraline",
    ticket:"FALSO",
    estado: "Desconocido"
  },{
    Name: "Micaias",
    ticket:"VIP",
    estado: "Desconocido"
  },{
    name:"Mati",
    ticket:"VIP",
    estado: "Conocido"
  }
]

  test("La función debe retornar la QUEUE resultante de procesar los movimientos", () => {
    expect(henryParty([date[0], date[1], date[2], date[3], date[4]])).toEqual({ array: [{
      name:"Gonzalo",
      ticket:"VIP",
      estado: "Conocido"
    },{
      Name: "Micaias",
      ticket:"VIP",
      estado: "Conocido"
    }]});
    expect(henryParty([date[1], date[2], date[3], date[4],date[5]])).toEqual({ array: [{
      name:"Gonzalo",
      ticket:"VIP",
      estado: "Conocido"
    },{
      Name: "Micaias",
      ticket:"VIP",
      estado: "Conocido"
    },{
      name:"Mati",
      ticket:"VIP",
      estado: "Conocido"
    }]});
  });
  test("Si la función intenta retirar a una persona cuando la Queue se encuentra vacía, debe retornar false", () => {
    expect(henryParty([])).toEqual(false);
    expect(henryParty([{name: "Macarena"}])).toEqual(false);
    expect(henryParty(["Franco", 43, [], {name: "John", ticket: "VIP", estado: "Desconocido"}])).toEqual(false);
    expect(henryParty([{name: "John"}, {name: "Lei"}])).toEqual(
      false
    );
  });
  test("La Queue retornada debe ser instancia de la clase Queue", () => {
    expect(henryParty([date[0], date[1], date[2], date[3], date[4]]) instanceof Queue).toEqual(true);
    expect(henryParty([date[5], date[1], date[2], date[3], date[4]]) instanceof Queue).toEqual(true);
  });
});