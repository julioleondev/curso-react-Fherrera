//funcion clasica
//en este ejemplo se usa una funcion simple para multiplicar un numero 
//esto no se recomienda por que tan solo con una reasignacion se rompe el codigo
//lo mejor es usar una variable constante 
function multiplicar (numb){
    return numb * 7
}
let resultado = multiplicar(23)
console.log(resultado)


// funcion  con una const para impedir una reasignacion
const multiplicar2 = (numero) =>{
  
    return numero * 20
  
}
console.log(multiplicar2(12))



//arrow functions 
//sintaxis  mas  leegible  


const getUsuarioActivo = (nombre) =>({uid:'abc345', username:nombre})

const usuarioActivo = getUsuarioActivo('Fernando')

console.log(usuarioActivo)


 