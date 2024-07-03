//arrays
//array en js
const arreglo = [1,2,3,4,5,]


//agrgar elementosal al array con spread ...
//es similar a hacer .push pero en este caso se rompe la referencia

let arreglo2 = [...arreglo,5]

//impresion  en consola del array   
console.log(arreglo)
console.log(arreglo2)
//aqui se usa ,map para crear otro arreglo y multiplicar los valores *4 
//.map crea un arreglo nuevo sin modificar el orginal
//se guarda en la variable arreglo 3 
let arreglo3 = arreglo2.map((num)=> num * 7)
//se imprime el valor en consola
console.log(arreglo3)