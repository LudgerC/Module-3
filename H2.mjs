import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 0;
let i = 0;
let som = 0;
let gemiddelde = 0;
do
{
 
    i++;
    getal = parseFloat(await userInput.question("Geef een getal in: "))
    som += getal;
    gemiddelde = (som/i) 

}while(gemiddelde < 25);


console.log("Het gemiddelde is: " + gemiddelde );