import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question("Geef het hoogte in: "));

for(let tellerhoogte = 0; tellerhoogte < hoogte; tellerhoogte ++){

for(let breedteller = 0; breedteller < tellerhoogte; breedteller++){
    process.stdout.write("*");

}
console.log("*")
}