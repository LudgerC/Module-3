import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });



for(let teller = 1; teller <= 100; teller++)
{
    if(teller % 3 == 0 && teller % 5 == 0)
    {
        console.log(teller + " FizzBuzz");
    }
    else if(teller % 5 == 0)
    {
        console.log(teller + " Buzz");
    }
    else if(teller % 3 == 0)
    {
        console.log(teller + " Fizz");
    }
    else 
    {
        console.log(teller);
    }
}