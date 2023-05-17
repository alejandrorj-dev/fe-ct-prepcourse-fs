/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto);

}
var miTelefono = {
   marca: "Samsung",
   modelo: "A21S",
   camaras: 2
}
console.log(deObjetoAarray(miTelefono));

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var StringObject = {};
   var stringArr = string.split("");
   var counter = 0;

   for (var i = 0; i < stringArr.length; i++) {
      if (stringArr[i] != stringArr[i+1]) {
         StringObject[stringArr[i]] = 1;
      } else if (stringArr[i] === stringArr[i+1]) {
         counter = counter + 1;
         StringObject[stringArr[i]] = counter;
      }
   };

   return StringObject;
}
console.log(numberOfCharacters("esternocleidomastoideo"));

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var stringArray = string.split("");
   var newString = [];

   for (var i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === stringArray[i].toUpperCase()) {
         newString.unshift(stringArray[i]);
      } else if (stringArray[i] === stringArray[i].toLowerCase()) {
         newString[i].push(stringArray[i]);
      }
   }

   return newString.join(" ");
}
console.log("soyHENRY");

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
console.log(asAmirror("Me gusta beber agua"));

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
console.log(capicua(3003));

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
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
