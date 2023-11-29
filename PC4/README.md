# Práctica Calificada 4 <!-- omit in toc -->

- [Pregunta 1](#pregunta-1)
  - [Apartado 2: clases Pokemon y Charizard](#apartado-2-clases-pokemon-y-charizard)
- [Pregunta: introducción a Rails](#pregunta-introducción-a-rails)
  - [Apartado A: agregar columna id](#apartado-a-agregar-columna-id)
  - [Apartado B](#apartado-b)
  - [Apartado C](#apartado-c)
  - [Apartado D](#apartado-d)



## Pregunta 1

### Apartado 2: clases Pokemon y Charizard

Diseñamos e implementamos [estas dos clases](/Semana8/Actividad/README.md#clases) en la actividad de introducción a JavaScript.

## Pregunta: introducción a Rails

Para responder esta pregunta utiliza el repositorio y las actividades que has desarrollado de Introducción a Rails.

### Apartado A: agregar columna id

Modifica la vista Index para incluir el número de fila de cada fila en la tabla de películas.

**Solución:**

Editamos el código del archivo _index.html.erb_ agregando a las filas de datos el identificador `movie.id` mediante una expresión erb:

![](sources/2023-11-29-09-47-34.png)

Y no podemos olvidar cambiar la cabecera de la tabla agregando el campo correspondiente:

![](sources/2023-11-29-09-52-22.png)

El resultado se aprecia así al correr el servidor con `bin/rails server`:

![](sources/2023-11-29-09-54-33.png)

### Apartado B

Modifica la vista Index para que cuando se sitúe el ratón sobre una fila de la tabla, dicha fila cambie temporalmente su color de fondo a amarillo u otro color.

### Apartado C

Modifica la acción Index del controlador para que devuelva las películas ordenadas alfabéticamente por título, en vez de por fecha de lanzamiento. No intentes ordenar el resultado de la llamada que hace el controlador a la base de datos. Los gestores de bases de datos ofrecen formas para especificar el orden en que se quiere una lista de resultados y, gracias al fuerte acoplamiento entre ActiveRecord y el sistema gestor de bases de datos (RDBMS) que hay debajo, los métodos find y all de la biblioteca de ActiveRecord en Rails ofrece una manera de pedirle al RDBMS que haga esto.

### Apartado D


Simula que no dispones de ese fuerte acoplamiento de ActiveRecord, y que no puedes asumir que el sistema de almacenamiento que hay por debajo pueda devolver la colección de ítems en un orden determinado. Modifique la acción Index del controlador para que devuelva las películas ordenadas alfabéticamente por título. Utiliza el método sort del módulo Enumerable de Ruby.


