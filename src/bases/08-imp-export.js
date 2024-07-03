// se  hace una exportacion por defecto y una no por defecto 
// la segunda se tiene que poner como una desestructuracion
import heroes, {owners} from "../data/heroes"
export const getHeroesById = (id) =>  heroes.find((heroes) => id === heroes.id)
const getHeroesByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner)






    
  
   


//console.log(getHeroesById(2))
//console.log(getHeroesByOwner('Marvel'))
//console.log(owners)


//console.log(heroes) 