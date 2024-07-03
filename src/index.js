import { getHeroesById } from "./bases/08-imp-export";

const promesa =  new Promise ((resolve, rejected)=>{
setTimeout(() => {
const heroe = getHeroesById(3);
console.log(heroe) 
//resolve();
}, 3000);
});

promesa.then(()=>{
    console.log('then de la promesa')
});
