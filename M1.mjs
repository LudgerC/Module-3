import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = 0;
let getal2 = 0;

getal1 = parseFloat(await userInput.question("Geef getal 1: "));
getal2 = parseFloat(await userInput.question("Geef getal 2: "));

do
{

    while(getal1 <= 0 )
    {
        getal1 = parseFloat(await userInput.question("Getal moet groter dan 0 zijn! Geef getal 1: "));
    }

    while(getal2 <= 0 )
    {
        getal2 = parseFloat(await userInput.question("Getal moet groter dan 0 zijn! Geef getal 2: ")); 
    }

}while(getal1 < 0 && getal2 < 0);

console.log("som is: " + (getal1 + getal2));