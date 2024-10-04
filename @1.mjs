import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Tot welk getal de rij moet afgedrukt worden?"));
let i = 0;
let j = 1;

console.log(i);
for(; j <= getal;)
{ 
    console.log(j);
    let som = i + j;
    i = j;
    j = som;    
}