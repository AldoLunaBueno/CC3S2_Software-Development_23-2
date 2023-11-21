# Actividad de introducción a JavaScript

## Clausuras

**Pregunta**

Determina la salida del siguiente código.

```javascript
function f1(x) {
  var baz = 3;
  return function (y) {
    console.log(x + y + (baz++));
    }
}
var bar = f1(5);
bar(11);
```

**Respuesta**

El resultado es 19. Veamos lo que sucede paso a paso:

1. f1(5) se llama, por lo que x toma el valor de 5 y baz se inicializa en 3.
   
2. La función anidada se devuelve, y ahora bar es igual a esta función anidada, la cual trae consigo todo el contexto de la función que la contiene (los valores de x y de baz).
   
3. bar(11) se llama, y dentro de la función anidada, se imprime la suma de x (que es 5), y (que es 11), y el resultado de (baz++).
   
4. La expresión (baz++) primero usa el valor actual de baz (que es 3) en la suma y luego incrementa baz en 1.

La suma al final 5 + 11 + 3 = 19.

## Algoritmos

### Método `()`

### Método `containsX()`

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

