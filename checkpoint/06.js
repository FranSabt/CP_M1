//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:
  for (let i = 0; i < array.length; i++) {
    let j = 2
    while ( j < array[i]) {
      if (array[i] % j === 0) {
        return false
      }
      j++
    }
    array = quickSort(array)
    
    return array
  }
}

function quickSort(array) { // on average => the algorithm takes O ( n log ⁡ n ) ||  In the worst case, it makes O ( n 2 ) 
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  const mid = [];
  const minor = [];
  const mayor = [];

  let num;

  if(array.length <= 1){
    return array;
  }
  
  num = Math.floor(Math.random() * array.length);

  for(let i = 0; i < array.length; i++){
      if(array[i] === (array[num])){
          mid.push(array[i])
      }
      if(array[i] < (array[num])){
          minor.push(array[i])
      }
      if(array[i] > (array[num])){
          mayor.push(array[i])
      }
  }
  
  return quickSort(minor).concat(mid.concat(quickSort(mayor)))
}


// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};