# Actividad: Uso de JUnit5 y RSpec <!-- omit in toc -->

## Tutorial de JUnit5

Enlazo [los archivos creados en este apartado](./junit_tutorial/) según [el tutorial](https://www.digitalocean.com/community/tutorials/junit5-tutorial).

Configurando el *pom.xml* para poder usar JUnit5:

![](sources/2023-09-09-16-32-36.png)

Usando las anotaciones de JUnit:

![](sources/2023-09-09-17-09-48.png)

Usando las aserciones de la librería de JUnit5:

![](sources/2023-09-09-18-13-55.png)

![](sources/2023-09-09-18-14-47.png)

Cómo importar las anotaciones y aserciones:

![](sources/2023-09-09-18-26-33.png)

Uso de JUnit5 Assumptions:

![](sources/2023-09-09-19-04-44.png)

![](sources/2023-09-09-19-05-55.png)

La anotación Nested:

![](sources/2023-09-09-19-15-13.png)

## RSpec

A partir de aquí seguimos con el [tutorial de introducción a RSpec]() y creamos [estos archivos](./BDD%20with%20RSpec/)

Obtenemos un error porque el método no está definido:

![](sources/2023-09-11-08-32-08.png)

![](sources/2023-09-11-08-39-29.png)

![](sources/2023-09-11-09-04-05.png)

Ahora vamos a imprimir los resultados de las pruebas en un nuevo formato con el comando

```bash
bundle exec rspec --format documentation
```

Este formato resulta muy cómodo para visualizar rápidamente los problemas de nuestro código:

![](sources/2023-09-11-09-01-37.png)

## De RSpec a JUnit5

Para esta parte creamos un [nuevo proyecto en IntelliJ](./rspec_to_junit/).

Siguiendo la metodología de rojo a verde, primero creamos la prueba más simple que evalúa si el método retorna cero cuando recibe la cadena vacía. La prueba falla porque ni siquiera hemos definido el método `add()`:

![](sources/2023-09-11-09-15-45.png)

Resulto eso, la prueba pasa:

![](sources/2023-09-11-09-16-41.png)

Codificamos otro requerimiento de nuestro método en forma de prueba: dada una cadena con un solo número, el método debe retornar el valor del número. Para esta prueba usamos la parametrización. Vemos que esta prueba no pasa:

![](sources/2023-09-11-09-23-36.png)

La siguiente implementación pasa las pruebas:

![](sources/2023-09-11-16-45-19.png)

Ahora codificamos en forma de prueba unitaria el último requerimiento de este ejemplo: dada una cadena con dos números separados por coma, retornar la suma de los valores de los números. La prueba falla: 

![](sources/2023-09-11-16-54-20.png)

Y nuestra nueva implementación, que ya se va volviendo más elaborada, pasa todas las pruebas que teníamos hasta el momento, por lo que estamos seguros de que cumple todos los requerimientos:

![](sources/2023-09-11-17-03-40.png)