# Actividad: código limpio, manejo de excepciones, depuración

# Parte 2

Instalamos las dependencias:

![](sources/2023-11-20-00-58-23.png)

Clonamos el repositorio:

![](sources/2023-11-20-00-57-38.png)

![](sources/2023-11-20-01-00-25.png)

El paso siguiente es correr el comando `npm install`. Por defecto, estecomando instalará todos los módulos listados como dependencias en package.json. Pero falla porque hay paquetes obsoletos que deben actualizarse a nuevas versiones:

![](sources/2023-11-20-01-03-14.png)

![](sources/2023-11-20-01-05-56.png)

Por eso antes ejecutamos este comando:

```bash
npm update
```

![](sources/2023-11-20-01-17-54.png)