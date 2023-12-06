# Práctica Calificada 5

## Pregunta 1



## Pregunta 2



## Pregunta 3

Para el siguiente ejercicio utiliza la lista de proyectos Rails de código abierto en Open Source Rails: https://github.com/gramantin/awesome-rails#open-source-rails-apps 

**Pregunta**

Describa uno o más patrones de diseño que podrían ser aplicados al diseño del sistema.

**Respuesta**

Elejimos estudiar el sistema de administración de contenidos de aprendizaje canvas-lms: https://github.com/instructure/canvas-lms

En esta app hay dos tipos de usuarios principales: docentes y estudiantes hay docentes que editan páginas web para crear contenido y hay estudiantes que leen este contenido. 

Los estudiantes pueden ser independientes o estar registrados como parte de una institución académica. Como unos tienen algunos privilegios, podríamos aplicar el patrón de diseño creacional Factory, de manera que cada tipo de estudiante concreto se comporte de manera distinta.

También podríamos 

**Pregunta**

Dado un sistema simple que responde a una historia de usuario concreta, analice y elija un paradigma de diseño adecuado

**Pregunta**

Analice y elija una arquitectura software apropiada que se ajuste a una historia de usuario concreta de este sistema. ¿La implementación en el sistema de esa historia de usuario refleja su idea de arquitectura?

**Respuesta**


