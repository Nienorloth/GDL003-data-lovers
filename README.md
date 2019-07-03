# Data Lovers - League of Legends

![](https://i1.wp.com/www.offlineplayers.com/wp-content/uploads/2015/08/LoL-Champions.jpg)

## Descripción del producto

Esta página web muestra data de los campeones (personajes) del juego League of Legends;permite al usuario filtrar y ordenar la misma,
calcular estadísticas de la colección (o subcolección).

//Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
tablets y desktops.//

## ¿Quienes son los principales usuarios del producto?

Son aquellos nuevos jugadores de League of Legends que desean conocer acerca de los campeones (personajes) para elegir al que sea más eficiente según el área del tablero que se quiera proteger

- [League of Legends - Challenger leaderboard](src/data/lol/lol.json):
  Este set de datos muestra la lista de jugadores en una liga del
  juego League of Legends (LoL), puedes revisar la documentación de su API en
  este [link](https://developer.riotgames.com/api-methods/).

## ¿Cuáles son los objetivos de estos usuarios en relación con Data LOvers-League of Legends?

Los objetivos de los usuarios son: conocer a todos los campeones para armar una estrategia en la cual el personaje que elijan sea el correcto para su rol a desempeñar

## ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Estos datos son cada campeon con su nombre, foto, biografía, el rol que desempeñan y las estadísticas (aclarar cuáles son)

## ¿Cómo el producto Data LOvers- League of Legedns está resolviendo sus problemas?

## ¿Cuándo utilizan o utilizarían el producto?

## Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

#### Prototipo de alta fidelidad

#### Testeos de usabilidad

Listado de problemas que detectaste a través de tests de usabilidad

Durante el reto deberás realizar tests de usabilidad con distintos usuarios, y
en base a los resultados de esos tests, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los tests y cómo los
mejoraste en tu propuesta final.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tus propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

- `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

- `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

- `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

### Diseño de experiencia de usuario (User Experience Design)

- Investigación con usuarios / entrevistas
- Principios de diseño visual
