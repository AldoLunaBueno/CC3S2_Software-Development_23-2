# Introducción a HTTP y URI <!-- omit in toc -->

## Comprendiendo Request y Response

Al visitar la página web http://randomword.saasbook.info, el resultado en el cuerpo de la página es solo una imagen y una palabra. Cuando recargamos la página, se muestra la misma imagen y otra palabra.

![](sources/2023-09-24-21-53-18.png)

Ahora probamos el comando `curl 'http://randomword.saasbook.info'` en el terminal:

![](sources/2023-09-24-22-00-22.png)

Comprobamos que este resultado se corresponde con el resultado al visitar la página a través del navegador. El elemento HTML `body` tiene dos contenedores `div`: uno es para la imagen y el otro para la palabra generada aletariamente (que en este caso es _letters_).

Guardamos el resultado en un archivo html:

![](sources/2023-09-24-22-11-09.png)

Y abrimos el archivo en nuestro navegador:

![](sources/2023-09-24-22-13-01.png)

Vemos que aparece la palabra generada y el título Random Word Generator, pero falta la imagen. Esto es porque en el archivo html la referencia a la imagen es local: es necesario tener la imagen en el mismo directorio que el archivo html para que esta se muestre.

Seguimos las sugerencias: agregar `>nombre_archivo` luego del comando curl para que la salida se almacene directamente en un archivo que denominamos con la extensión (.html).

Ahora solo ejecutamos el comando `curl 'http://randomword.saasbook.info' >curl1.html` para sobreescribir la nueva salida en el archivo _curl1.html_:

![](sources/2023-09-24-22-20-54.png)

Y recargamos la pestaña del navegador en la que habíamos abierto el archivo para ver la nueva palabra generada:

![](sources/2023-09-24-22-22-31.png)

**Pregunta:** ¿Cuáles son las dos diferencias principales entre lo que has visto anteriormente y lo que ves en un navegador web 'normal'? ¿Qué explica estas diferencias?

**Respuesta:** Las diferencia entre lo que visualizamos en el navegador cuando visitamos la página y lo que vemos cuando abrimos el archivo _curl1.html_ son dos: la url y la imagen. En el primer caso tenemos una url que sigue el protocolo HTTP y vemos la imagen, mientras que en el segundo caso la url es una ruta local hacia nuestro archivo y la imagen no se visualiza porque no disponemos de ella.

