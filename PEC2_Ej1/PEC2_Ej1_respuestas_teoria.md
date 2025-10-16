He modificado el código cambiando la operación c.apple * c.banana por c.apple * 'banana', es decir, un número por un string.
TypeScript muestra un error de tipo ("La parte derecha de una operación aritmética debe ser de tipo "any", "number", "bigint" o un tipo de enumeración.") porque he intentado multiplicar un número por una cadena.
Este error se detecta antes de ejecutar el código, lo cual es una ventaja respecto a JavaScript, ya que permite detectar errores lógicos en tiempo de compilación. Mantiene bien jerarquizado las variables de nuestro código, impidiendo realizar así operaciones que nos darían error al ejecutar.

![Error ejercicio 1](/assets/Captura%20de%20pantalla%202025-10-16%20a%20las%209.06.41.png)

**-Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos:** 

a- Es un tipo número. Se trata de un valor númerico sin nada más.
b- Es un tipo string. Es una cadena de texto.
c- Es un tipo string. Es una cadena de texto con una única palabra.
d- Es de tipo booleano. Es una array cuyos elementos son de valor booleano: o true o false.
e- Es un objeto tipo string. El objeto contiene un único valor de tipo string.
f- Es un array de tipo número | booleano. Crea un tipo unión en el que uno de los valores es un número y el otro es booleano.
g- Es un tipo número. Este array con un sólo número y TS lo infiere como tal.
h- Es un tipo null. El valor es null y TS lo infiere como tal.

**-¿Por qué se dispara cada uno de los errores del fichero code3.ts?**

i- Salta error porque estamos tratando de asignar un valor nuevo a una constante.
j- En este caso, hemos asignado a j un array de tipo numérico. Por ello, no podemos hacer un push a un valor de tipo string dentro de ese array.
k- No se puede asignar ningún valor a un tipo 'never'. Su función es, precisamente, que no se le asigne otro valor no deseado.