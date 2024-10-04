import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef getal 1: "));
let getal2 = parseFloat(await userInput.question("Geef getal 2: "));


while (getal2 !== 0) 
{
    let rest = getal1 % getal2; 
    getal1 = getal2;            
    getal2 = rest;              
}

console.log("De grootste gemene deler van het getallen is: " + getal1);