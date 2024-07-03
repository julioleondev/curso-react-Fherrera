// desestruccion 
//asignacion desestructurada 
 
const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
    
}
//console.log(persona.clave)

//const {edad,nombre,clave} = persona

const Context = ({nombre,edad,rango='capitan',clave}) =>{
    return {
        nombreClave: clave,
        anios:edad,
        ltlng: {
            lat:332.3342,
            lng:83245.234,
        }
    }
}
//desestructuracion por asignanacion
//en este caso se destructura el objeto literal que retorna  la funcion useContext
//ademas aqui se usa la desestructuracion anidada de objetos "ltlng:{lat,lng}"
const {nombreClave,anios,ltlng:{lat,lng}} = Context(persona)
console.log(nombreClave,anios)
console.log(lat,lng)


//NOTA ESTE CODIGO ES VALIDO SOLO QUE SE ESTA USANDO UN HOOK DE REACT  FUERA DE UN COMPONENETE 
// EL EJERCICIO ES SOLO PARA ENTENDER LA DESETRUCTURACION DE OBJETOIS Y LA ASIGANCION DESETRUCTURADA