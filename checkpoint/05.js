const { Stack } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 5️⃣ ***** EJERCICIO 5 ***** - tipologiasSeparadas() 5️⃣
// En este ejercicio debemos implementar la funcion tipologiasSeparadas() la cual va a recibir por parametro un array con el numeros de tipologias en el orden que se van a construir.
// Supongamos que tenemos un barrio en donde la construccion de casas pueden ser de distintos tipos de tipologias en una misma manzana.
// Pero hay una limitacion, que no puede haber 2 tipologias iguales una al lado de la otra.
// Nuestro objetivo es utilizar el STACK para poder detectar si cuando nos pasan el array de como se van a construir las casas necesitamos separar las tipologias que se repiten.
//
// EJEMPLOS:
// let arr = [1, 2, 2, 3, 3, 6, 4, 5]
// tipologiasSeparadas(arr) => [1, 2, 3, 6, 4, 5, 2, 3]
//
// REQUISITOS:
// 🟢 La función debe crear y retornar el Stack creado con las casas de forma correcta sin tipologias repetidas.
// 🟢 El Stack que retorna debe ser una instancia de la clase Stack.
// 🟢 En caso de que no hayan tipologias repetidas o que ya las recibamos separadas correctamente, debe retornar "No hay tipologias repetidas".
// 🟢 En caso de recibir un array vacio debe retornar "Tipologias inexistentes".

function tipologiasSeparadas(arr) {
  // Tu código aquí:
  if (arr.length < 1) return "Tipologias inexistentes";

  let tipologias = new Stack();
  let temp = []
  let repe = false;

    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === arr[i + 1]){
        temp.push(arr[i])
        tipologias.push(arr[i + 1]);
        i++;
        repe = true
      }
      else{
        tipologias.push(arr[i]);
      }
    }

    if(!repe){
      return "No hay tipologias repetidas";
    }
    for (e in temp){
      tipologias.push(temp[e])
    }

  return tipologias
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  tipologiasSeparadas,
};
