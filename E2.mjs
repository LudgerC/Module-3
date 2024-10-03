import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("De tafel van? "));

console.log("\nDe tafel van " + getal + ":");
for(let tafels = 1; tafels <= 10; tafels++)
{
    console.log( getal + " x " + tafels + " = " + (getal * tafels));
}