const personajes = ['Goku', 'Vegeta', 'Picoro']

const [per1, , per2] = personajes
console.log(per1, per2)


const Perros = ['Blacky', 'Hades', 'Norberto', 'Junior']

const [, , , Rey] = Perros
console.log(Rey)

const retornaArreglo = () => {
   return ['AbC', '123']
}

const arr = retornaArreglo();

console.log(arr)
// aqui  una funcion que retorna un arreglo se desestructura 
//notese que  no importa  el nombre que se  le de al valor  se resperta la posicion  del arreglo orignal "[ABC,123]
const [, Letras] = retornaArreglo();

console.log(Letras);

////////////////////////////

const UsoEstado = (valor) => {
   return [valor, () => console.log('Hola Mundo')]
}
const arrr = UsoEstado('Juniors')
console.log(arrr)
//tarea 
//1. el prinmer valor se debe de llamar nombre 

const [nombre, setNombre] = UsoEstado('JUNIORS')

console.log(nombre)
setNombre();

/*En el código que proporcionaste, la función `UsoEstado` devuelve un arreglo con dos elementos:

1. El primer elemento es el valor que se pasa como argumento a la función.
2. El segundo elemento es una función de flecha que imprime "Hola Mundo" en la consola.

Luego, cuando llamas a `UsoEstado('Juniors')`, obtienes un arreglo con dos elementos: `'Juniors'` y una función que imprime "Hola Mundo" en la consola. Esto se almacena en la variable `arrr`.

Después, cuando haces la asignación desestructurada `const [nombre, setNombre] = UsoEstado('JUNIORS')`, estás extrayendo los dos elementos del arreglo devuelto por `UsoEstado`. `nombre` contendrá el primer elemento del arreglo (`'JUNIORS'`) y `setNombre` contendrá el segundo elemento (la función de imprimir "Hola Mundo").

Finalmente, al imprimir `nombre` con `console.log(nombre)`, se imprimirá `'JUNIORS'`. Y cuando llamas a `setNombre()`, se ejecutará la función que imprime "Hola Mundo" en la consola.*/

