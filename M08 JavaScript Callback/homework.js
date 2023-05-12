/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var arrNombre = nombre.split("");
   arrNombre[0] = arrNombre[0].toUpperCase();
   return arrNombre.join("");
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   var realizarOperacion = function (num1, num2) {
      return cb(num1, num2);
   }

   realizarOperacion(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   var sumarArreglo = function (arrNumbers, cb) {
      var suma = 0;
      for (var i = 0; i < arrNumbers.length; i++) {
         suma = suma + arrNumbers[i];
      }
      cb(suma);
   };
   sumarArreglo(arrayOfNumbers, cb);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   var ejecutarCallbackPorElemento = function (arr, cb) {
      for (var i = 0; i < arr.length; i++) {
          cb(arr[i]);
      }
   };
   ejecutarCallbackPorElemento(array, cb);
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var iterarArreglo = function (arr, cb) {
      var nuevoArreglo = [];

      for (var i = 0; i < arr.length; i++) {
         nuevoArreglo.push(cb(arr[i]));
      }

      return nuevoArreglo;
   }

   var resultado = iterarArreglo(array, cb);
   return resultado;
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   
      var nuevoArr = [];

      for (var i = 0; i < arrayOfStrings.length; i++) {
         if (arrayOfStrings[i].startsWith("a") == true) {
            nuevoArr.push(arrayOfStrings[i]);
         }
      }

      return nuevoArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
