import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

for(let getal = 2; getal <= 20; getal += 2)
{
    console.log(getal);
}