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

console.log(containsX("X"))

// ¿Cuál es la complejidad temporal de esta función en términos de notación O grande? 
// Luego, modifica el código para mejorar la eficiencia del algoritmo en los mejores y promedios escenarios.

function containsX(string) {
    foundX = false;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === "X") {
        foundX = true;
      }
    }
    return foundX;
  }
  
console.log(containsX("X"))