/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayDeObjeto = [];

   for (var clave in objeto) {
      var arrayEnForIn = [clave, objeto[clave]];
      arrayDeObjeto.push(arrayEnForIn);
   }

   return arrayDeObjeto;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringEnArray = string.split("").sort();
   var objeto = {};
   var veces = 1;

   for (var i = 0; i < stringEnArray.length; i++) {
      if (stringEnArray[i] !== stringEnArray[i-1]) {
         objeto[stringEnArray[i]] = 1;
         veces = 1;
      } else if (stringEnArray[i] === stringEnArray[i-1]) {
         veces = veces + 1;
         objeto[stringEnArray[i]] = veces;
      }
   }
   
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var stringEnArreglo = string.split("");
   var arregloMayusculas = [];
   var arregloMinusculas = [];
   var resultado = "";

   for (var i = 0; i < stringEnArreglo.length; i++) {
      if (stringEnArreglo[i] == stringEnArreglo[i].toUpperCase()) {
         arregloMayusculas.push(stringEnArreglo[i]);
      } else if (stringEnArreglo[i] == stringEnArreglo[i].toLowerCase()) {
         arregloMinusculas.push(stringEnArreglo[i]);
      }
   }

   resultado = arregloMayusculas.join("") + arregloMinusculas.join("");

   return resultado;
   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseEnArreglo = frase.split("");
   var resultado = [];
   var palabra = "";

   for (var i = 0; i < fraseEnArreglo.length; i++) {
      if (fraseEnArreglo[i] !== " ") {
         palabra = palabra + fraseEnArreglo[i];
      } else {
         resultado.push(palabra);
         palabra = "";
      }
   }

   resultado.push(palabra);

   var resultadoMap = resultado.map( (element) => {
      return element.split("").reverse().join("");
   });

   return resultadoMap.join(" ");
   
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroEnArreglo = Array.from(String(numero), num => Number(num));
   var otrosNumeros = [];
   var esCapicua = true;
   var c = 0;

   while (c < numeroEnArreglo.length) {
      otrosNumeros.unshift(numeroEnArreglo[c]);
      c++;
   }

   for (var i = numeroEnArreglo.length; i >= 0; i--) {
      if (numeroEnArreglo[i] !== otrosNumeros[i]) {
         esCapicua = false;
         break;
      }
   }

   if (esCapicua) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var stringEnArreglo = string.split("");
   var resultado = "";

   for (var i = 0; i < stringEnArreglo.length; i++) {
      if (stringEnArreglo[i] !== "a" && stringEnArreglo[i] !== "b" && stringEnArreglo[i] !== "c") {
         resultado = resultado + stringEnArreglo[i];
      }
   }

   return resultado;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArreglo = arrayOfStrings.sort((a, b) => a.length - b.length);
   return nuevoArreglo;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArreglo = [];
   array1.forEach((element) => {
      if (array2.includes(element)) {
         nuevoArreglo.push(element);
      }
   });

   return nuevoArreglo.sort((a, b) => a - b);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
