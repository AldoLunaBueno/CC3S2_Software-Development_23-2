# Semana 6

Fijas:

- Un filtro para los logs de una aplicación


logger::INFO

Flujos estándares: STDIN, STDOUT, STDERR
Mecanismo que conecta entradas a nivel de SO para 

Es mejor no usar la opción de flujos estándares, sino la opción FILE. Es decir, en vez de 

    logger = Logger.new(STDOUT)

hacemos

    logger = Logger.new("log_example.txt")

¿Qué haces con un archivo logging de 80 GB?

    Es un caso de sobrecarga de loggings, y hay que evitarlo. Vamos a controlar estos problemas con la técnica rollover. Buscamos renovar y retener ciertos logs siguiendo algún criterio: basado en la cantidad, almacenamiento, tiempo. Ejemplo:

    log_bytes = 100
    log_limit = 5
    logger = Logger.new("log.txt", log_limit, log_bytes)
    
Podmeos usar herramientas de apoyo para almacenar los archivos con los logs: AWS S3 bucket, cron y rsync.

Para depuración: pry-debugger

Cómo depurar en RubyMine:

https://www.youtube.com/watch?v=8QXWPpuQe-Q

## Importante

El miércoles veremos depuración y se libera la PC3 (grupos de 3)

Repasa el libro base. El capítulo 5 es el más difícil.