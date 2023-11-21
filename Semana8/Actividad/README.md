# Actividad de introducción a JavaScript

## Algoritmos



La siguiente función devuelve true o false si hay o no una “X” mayúscula dentro de una cadena.

```js
function containsX(string) {
  foundX = false;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "X") {
      foundX = true;
    }
  }
  return foundX;
}
```

Para correr solo el segmento seleccionado usamos la extensión Code Runner (clic drecho y clic en la opción _run code_). El resultado en la salida es true porque se le pasó a la función la cadena "X", la cual contiene la letra que esta función detecta.

![](sources/2023-11-20-12-39-46.png)

**Pregunta**

¿Cuál es la complejidad temporal de esta función en términos de notación O grande? Luego, modifica el código para mejorar la eficiencia del algoritmo en los escenarios mejores y promedios.

**Respuesta**

La complejidad temporal de la anterior función es O(n) porque conteine un bucle itera linealmente por cada caracter de la cadena hasta encontrar la "X" o llegar al final. Lamentablemente, la complejidad temporal para lograr el objetivo de esta función no se puede reducir en Javascript. Si hubiera una manera, con toda seguridad sería un método integrado. 

Tenemos dos métodos que pueden decirnos si una subcadena está incluida en una cadena: `includes()` e `indexOf()`. El primero básicamente usa por dentro al segundo, y el segundo usa un bucle muy parecido al de la anterior función. Esto se puede ver en el pseudocódigo proporcionado en la página oficial del estándar ECMAScript:

![](sources/2023-11-21-00-00-17.png)

Por lo tanto, los siguientes códigos, si bien puede que sean igual o más eficientes que la anterior función, siguen siendo de complejidad O(n):

```javascript
// Con includes()
function containsX(string) {
  return string.includes("X")
}

// Con indexOf()
function containsX(string) {
  return string.indexOf("X") !== -1
}
```

La única manera de superar a O(n) sería usando tablas hash, un diccionario. Sin embargo, el lenguaje no crea las cadenas con una representación interna de datos en forma de diccionario. La creación del diccionario sería igual de costosa en complejidad temporal:

```javascript
function containsX(string) {
  const charMap = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charMap[char] = true;
  }

  return charMap['X'] === true;
}
```

De hecho, parece que es la opción menos eficiente. En cada iteración hay dos instrucciones elementales que hacer, mientras que en las anteriores opciones solo era una operación elemental.

