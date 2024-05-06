# Flexbox Avanzado

### order

Se aplica al elemento que se encuentra dentro de un contenedor flexible. Se indica simplemente con un número.
Por defecto todos tienen orden 0.
Si dos elementos tienen el mismo orden, se distribuyen según el html.
Si le doy orden a un elemento pero me queda alguno sin indicar orden, todos los que tengan orden se ubicaran a la derecha de los que no lo tengan.

### flex-grow

Se aplica al elemento que se encuentra dentro de un contenedor flexible. Se indica simplemente con un número.
Indica cuánto más espacio va tomar un elemento del espacio libre restante del contenedor con respecto a otros.
Por defecto es 0, es decir, no va a tomar ningún espacio libre.
Si todos los elementos tienen un valor de 1, el espacio a ocupar se distribuye equitativamente entre ellos.

### flex-shrink

Se aplica al elemento que se encuentra dentro de un contenedor flexible. Se indica simplemente con un número.
Indica hasta cuánto puede reducirse un elemento proporcionalmente a los otros, si fuera necesario, cuando el tamaño de los elementos sea mayor al de su contenedor flexible.
Por defecto es 1.
Si todos los elementos tienen un valor de 1, se reducen equitativamente entre ellos.

### align-self

Alinea el elemento flexible dentro de un contenedor flexible.
Reemplaza el valor de align-items.
Si el límite transversal de alguno de los elementos está definido como auto, el valor de align-self es ignorado.

### flex-flow

Es una propiedad atajo que combina las propiedades flex-direction y flex-wrap.
Los valores por defecto son flex-direction: row y flex-wrap: nowrap.
Se aplica al contenedor padre.
flex-flow: row nowrap (primer valor para flex-direction, segundo valor para flex-wrap)
