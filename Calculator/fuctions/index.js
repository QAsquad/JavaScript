const readline = require("readline-sync");

function printWelcomeMessage(){
console.log(`\nWelcome to the calculator!`);
console.log('=================================');
}

function getCalculationMode(){
    console.log(`Which calculator mode do you want?
    1) Arithmetic
    2) Vowel counting
    Please enter '1' for Arithmetic or '2' for 'Vowel counting'`);

    const calculationMode = readline.prompt();
    let response;
    if (calculationMode == '1')
    {
        do{
        performArithmaticCalculation();
        console.log("Press '1' to continue. Press '0' to change the calculation mode");
        response = readline.prompt();
        } while (response == '1');
    }
    else (calculationMode == '2')
    {
        do{
        performVowelCountingCalculation();
        console.log("Press '1' to continue. Press '0' to change the calculation mode");
        response = readline.prompt();
        } while (response == '1');
    }
    
    if (response == '0'){
        getCalculationMode();
    } else {
        console.log(`This is the end of the program. Thank you for using Calculator.`);
    }
}
 

function getNumber(){
    console.log(`Please enter number`);
    const res = readline.prompt();
    const a = parseInt(res);
    if (isNaN(a)){
        console.log('This is not a number!');
        } else {
            return a;
            }
}


function performArithmaticCalculation(){

let arrayLength;
let num = Array(arrayLength);
let operator;

do {
    console.log(`
    You have entered the arithmatic calculation mode.
    Please enter the operator. You can enter + for addition, * for multiplication, / for division`);
    operator = readline.prompt();

    if (!((operator == '+') || (operator == '*') || (operator == '/')))
        {console.log('Error: Invalid operator.');}

} while (!((operator == '+') || (operator == '*') || (operator == '/')));


console.log(`\nHow many numbers do you want to ${operator} ?`);

do{
    const numberCount = readline.prompt();
    arrayLength = parseInt(numberCount);
    if (isNaN(arrayLength))
    { console.log('Error: Invalid input. Please enter a number'); }
} while (isNaN(arrayLength));

console.log(`\nfor loop to populate the array`)
for (let i=0 ; i < arrayLength; i++)
{
    const a = getNumber();
    if (! isNaN(a))
    { num[i] = a; }
    else 
    {   i = i-1;
    }

}

console.log(`\nPrinting the array`)
for (let i=0 ; i < arrayLength; i++)
{ console.log(num[i]); }

//for loop to add numbers inside the array
if( operator == '+'){
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
    {  count = count / num[i]; }
    console.log(`\nDivision of numbers inside the array is ${count}`);
} 

}

function performVowelCountingCalculation(){
    console.log(`Please enter a string`);
    const str = readline.prompt();

    const strLength = str.length;
    let countA=0;
    let countE=0;
    let countI=0;
    let countO=0;
    let countU=0;

    for(let i=0; i<strLength ; i++){
        
        switch (str.charAt(i))
           { case ('a' OR 'A') :
            countA += 1;
            break;
    
            case ('e' OR 'E') :
            countE += 1;
            break;

            case ('i' || 'I') :
            countI += 1;
            break;

            case ('o' || 'O') :
            countO += 1;
            break;

            case ('u' || 'U') :
            countU += 1;
            break;
         }
    }

    console.log(`The vowel counts are:
    A/a: ${countA}
    E/e: ${countE}
    I/i: ${countI}
    O/o: ${countO}
    U/u: ${countU}
    Total vowel count is ${(countA+countE+countI+countO+countU)}
    `);
}

printWelcomeMessage();
getCalculationMode();