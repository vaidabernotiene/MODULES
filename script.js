import { mathsFunc } from "./maths.js"; 

document.querySelector('button').addEventListener('click', ()=>{
     let numb = mathsFunc(10)
     console.log(numb)
})

import { months } from "./maths.js";
console.log(months)

//Sukurkite modulį (t.y. file'ą - multi.js), kuriame būtų viena eksportuota (default) funkcija - multiplikacija. 
//Ji priims du skaičius kaip parametrus ir grąžins šiuos skaičius sudaugintus. 
//Pagrindiniame JS file'e (script.js) importuokite ir panaudokite šį modulį.

import multiFunc from "./multi.js"; 
console.log(multiFunc(4, 4))

//Sukurkite modulį pavadinimu header.js. 
//Šiame modulyje bus funkcija, kuri paims app kaip argumentą, tačiau nieko negrąžins. 
//Šios funkcijos tikslas - į app.innerHTML pridėti (t.y. +=) header'io kodą (pasirašykite standartinį HTML su inline CSS). 
//Šį modulį importuokite į pagrindinį file'ą ir paduokite app, kuris bus document.body. 
//Taip, puslapio viršuje turėtų atsivaizduoti header'is, kuris importuotas iš header.js.

import headerFunc from "./headers.js"; 
headerFunc('Vaida')