// Booleano
results = []
results[0] = undefined == null
results[1] = NaN == NaN
results[2] = null == false
results[3] = 0 == false
results[4] = "" == false

for (let result of results) {
  console.log(result)
}

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


// Último método

function firstNonRepeatedCharacter(string) {
  const frequency = {}
  const nonRepeatedCharacters = []

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    frequency[char] = (frequency[char] || 0) + 1
    if (frequency[char] === 1) {
      nonRepeatedCharacters.push(char)
    } else {
      const index = nonRepeatedCharacters.indexOf(char)
      if (index !== -1) {
        nonRepeatedCharacters.splice(index, 1)
      }
    }
  }
  for (let i = 0; i < nonRepeatedCharacters.length; i++) {
    const char = nonRepeatedCharacters[i];
    if (string.indexOf(char) !== -1) {
      return char;
    }
  }
  return null;
}

const result = firstNonRepeatedCharacter("minimum");
console.log(result); // Salida: "n"

// Clases

// Sin azúcar ////////////////////////

// Función constructora para Pokemon
function Pokemon(HP, ataque, defensa) {
  this.HP = HP
  this.ataque = ataque
  this.defensa = defensa
  this.movimiento = ""
  this.nivel = 1
  this.tipo = ""
}

// Método flight para Pokemon
Pokemon.prototype.flight = function () {
  if (!this.movimiento) {
    throw new Error("No se especificó ningún movimiento.")
  }
  console.log(`${this.movimiento} utilizado.`)
};

// Método canFly para Pokemon
Pokemon.prototype.canFly = function () {
  if (!this.tipo) {
    throw new Error("No se especificó ningún tipo.")
  }
  return this.tipo.includes("volar")
};

// Función constructora para Charizard que hereda de Pokemon
function Charizard(HP, ataque, defensa, movimiento) {
  Pokemon.call(this, HP, ataque, defensa)
  this.movimiento = movimiento
  this.tipo = "disparar/volar"
}

// Establecer la herencia de Charizard desde Pokemon
Charizard.prototype = Object.create(Pokemon.prototype)
Charizard.prototype.constructor = Charizard

// Sobrescribir el método fight para Charizard
Charizard.prototype.fight = function () {
  if (this.movimiento) {
    console.log(`Utilizando el movimiento ${this.movimiento}.`)
    return this.ataque
  } else {
    throw new Error("No se especificó ningún movimiento.")
  }
}

// Ejemplo de uso:
const charizardInstance1 = new Charizard(80, 100, 70, "Lanzallamas");
charizardInstance1.flight(); // Lanza un error ya que el movimiento no está especificado para Pokemon
charizardInstance1.canFly(); // Devuelve true, ya que el tipo incluye "volar"
charizardInstance1.fight(); // Imprime "Utilizando el movimiento Lanzallamas." y devuelve el campo de ataque.

// Con azúcar /////////////////////////

class Pokemon {
  constructor(HP, ataque, defensa) {
    this.HP = HP;
    this.ataque = ataque;
    this.defensa = defensa;
    this.movimiento = "";
    this.nivel = 1;
    this.tipo = "";
  }

  flight() {
    if (!this.movimiento) {
      throw new Error("No se especificó ningún movimiento.");
    }
    console.log(`${this.movimiento} utilizado.`);
  }

  canFly() {
    if (!this.tipo) {
      throw new Error("No se especificó ningún tipo.");
    }
    return this.tipo.includes("volar");
  }
}

class Charizard extends Pokemon {
  constructor(HP, ataque, defensa, movimiento) {
    super(HP, ataque, defensa);
    this.movimiento = movimiento;
    this.tipo = "disparar/volar";
  }

  fight() {
    if (this.movimiento) {
      console.log(`Utilizando el movimiento ${this.movimiento}.`);
      return this.ataque;
    } else {
      throw new Error("No se especificó ningún movimiento.");
    }
  }
}

 // Ejemplo de uso:
const charizardInstance = new Charizard(80, 100, 70, "Lanzallamas");
charizardInstance.flight(); // Lanza un error ya que el movimiento no está especificado para Pokemon
charizardInstance.canFly(); // Devuelve true, ya que el tipo incluye "volar"
charizardInstance.fight(); // Imprime "Utilizando el movimiento Lanzallamas." y devuelve el campo de ataque.