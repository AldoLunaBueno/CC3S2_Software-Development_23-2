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

¿Cuál es la complejidad temporal de esta función en términos de notación O grande? Luego, modifica el código para mejorar la eficiencia del algoritmo en los mejores y promedios escenarios.