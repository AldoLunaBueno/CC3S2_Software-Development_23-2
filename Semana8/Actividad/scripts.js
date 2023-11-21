// Clausuras

function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);

// La siguiente función devuelve si hay o no una “X” mayúscula dentro de una cadena.

function containsX(string) {
  foundX = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      foundX = true;
    }
  }
  return foundX;
}

console.log(containsX("ae"))

// ¿Cuál es la complejidad temporal de esta función en términos de notación O grande? 
// Luego, modifica el código para mejorar la eficiencia del algoritmo en los mejores y promedios escenarios.

// Métodos integrados

function containsX(string) {
  return string.includes("X")
}
console.log(containsX("ae"))

// Usando un diccionario

function containsX(string) {
  const charMap = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charMap[char] = true;
  }

  return charMap['X'] === true;
}
console.log(containsX("aXe"))