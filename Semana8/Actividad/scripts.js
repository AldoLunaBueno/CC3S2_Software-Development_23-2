// Arrays

results = []
results[0] = [1, 2, 3] + [4, 5, 6]
results[1] = !![]
results[2] = [] == true

results[3] = [10, 1, 3].sort()
results[4] = [] == 0

for (let result of results) {
  console.log(result)
}

// Cómo ordenar números en un arreglo

var numArray = [140000, 104, 99];
numArray.sort(function(a, b) {
  return a - b;
});

console.log(numArray);

// Clausuras

function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);

// Algoritmos

// Encuentra el máximo en el arreglo de números array con O(n^2)

function greatestNumber(array) {
  for (let i of array) {
    let isIValTheGreatest = true;
    for (let j of array) {
      if (j > i) {
        isIValTheGreatest = false;
      }
    }
    if (isIValTheGreatest) {
      return i;
    }
  }
}

console.log(greatestNumber([1, 2, 10, 3]))

console.log(greatestNumber([1, 2, 10, 3]))

// Reescribimos la función para alcanzar O(n)

function greatestNumber(array) {
  let currentGreatest = array[0]
  for (let element of array) {
    if (currentGreatest < element) {
      currentGreatest = element
    }
  }
  return currentGreatest
}

console.log(greatestNumber([1, 2, 10, 3]))

// Dice si hay o no "X" en la cadena string

function containsX(string) {
  foundX = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      foundX = true;
    }
  }
  return foundX;
}

console.log(containsX("aXe"))

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