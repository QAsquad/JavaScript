const readline = require("readline-sync");

function printWelcomeMessage(){
console.log(`\nWelcome to the calculator!`);
console.log('=================================');
}

function performOneCalculation(){
console.log(`\nPlease enter the operator`);
const operator = readline.prompt();

console.log(`\nHow many numbers do you want to ${operator} ?`);
const numberCount = readline.prompt();
let arrayLength = parseInt(numberCount);

let num = Array(arrayLength);

console.log(`\nfor loop to populate the array`)
for (let i=0 ; i < arrayLength; i++)
{
    console.log(`Please enter number ${i+1}`);
    let n = readline.prompt();
    num[i] = parseInt(n);
}

console.log(`\nfor loop to print the array`)
for (let i=0 ; i < arrayLength; i++)
{
    console.log(num[i]);
}


if( operator == '+'){
    console.log(`\nfor loop to add numbers inside the array`)
    let count = 0;
    for (let i=0 ; i < arrayLength; i++)
    {   count = count + num[i];
    }
    console.log(`\nAddition of numbers inside the array is ${count}`);
} 

if( operator == '*'){
    console.log(`\nfor loop to multiply numbers inside the array`)
    let count = 1;
    for (let i=0 ; i < arrayLength; i++)
    {   count = count * num[i];
    }
    console.log(`\nMultiplication of numbers inside the array is ${count}`);
} 

if( operator == '/'){
    console.log(`\nfor loop to divide numbers inside the array`)
    let count = num[0];
    for (let i=1 ; i < arrayLength; i++)
    {   
        count = count / num[i];
    }
    console.log(`\nDivision of numbers inside the array is ${count}`);
} 

}