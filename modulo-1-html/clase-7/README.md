# Flexbox

La idea básica de flexbox es darle al contenedor la capacidad de distribuir su espacio sobrante entre cada uno de los items que contiene, permitiéndoles crecer o achicarse según corresponda el caso.

El elemento al que le hemos dado un valor de *display: flex* actúa como un elemento a nivel de bloque en términos de cómo interactúa con el resto de la página, pero sus elementos secundarios se presentan como elementos flexibles.

### display: flex

Siempre tenemos que agregar esta propiedad al contenedor padre de los elementos que queremos que sean flexibles.

### flex-direction

La utilizamos para decidir en qué dirección queremos que se organicen los elementos flexibles. El valor por defecto es _row_.
Tenemos cuatro opciones:

- row (fila)
- row-reverse (fila con el orden invertido)
- column (columna)
- column-reverse (columna con el orden invertido)

### flex-wrap

Le indica al contenedor si puede distribuir los elementos en más de una línea a medida que se va a achicando. El valor por defecto es *nowrap*.

- nowrap (elementos distribuidos en una sola línea)
- wrap (elementos distribuidos en más de una línea)
- wrap-reverse (elementos distribuidos en más de una línea con orden invertido)

### justify-content

Le indica al contenedor como tiene distribuir los elementos cuando hay espacio libre de sobra. El valor por defecto es *flex-start*, que asienta todos los elementos al comienzo del eje principal.

- flex-start (elementos al comienzo del contenedor)
- flex-end (elementos al final del contenedor)
- center (elementos en el medio del contenedor)
- space-around (misma distancia de separación entre los elementos, la mitad de la distancia en cada punta)
- space-between (misma distancia entre los elementos, sin espacio hacia los bordes del contenedor padre)
- space-evenly (misma distancia entre todos los elementos y los bordes del contenedor padre)

### align-items

Define la alineación de los elementos en el eje vertical (perpendicular, eje y) del contenedor. El valor por defecto es _strech_.

- stretch (ensancha todos los elementos flexibles para rellenar el elemento primario en la dirección del eje vertical si no tiene alto definido)
- flex-start (elementos al inicio del eje vertical)
- flex-end (elementos al final del eje vertical)
- center (elementos en el medio del eje vertical)
- baseline (se alinean de manera que la base del contenido queda alineado)
