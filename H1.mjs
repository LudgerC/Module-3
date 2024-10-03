import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let hoogte = parseFloat(await userInput.question("Geef een hoogte: "));

for(let i = 0; i <= hoogte; i++)
{
    let rij = " ";

    for(let j = 1; j <= hoogte - i; j++)
    {
        rij += " ";
    }

    for(let k = 1; k <=(2 * i - 1); k++)
    {
        rij += "*";
    }

    console.log(rij);

}
for(let i = hoogte - 1; i >= 1; i--)
    {
        let rij = " ";
    
        for(let j = 1; j <= hoogte - i; j++)
        {
            rij += " ";
        }
    
        for(let k = 1; k <=(2 * i - 1); k++)
        {
            rij += "*";
        }
    
        console.log(rij);
    
    }
