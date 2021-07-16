const readline =     require("readline-sync");

console.log('Welcome to the calculator!');
console.log('=================================');
console.log('Please enter the operator');
const operator = readline.prompt();
//readline prompt will receive input in the form of string
//hence we will need to do conversion from string to integer
//there are two ways to convert string to integer
//1st method: use + before the string var or 'string value'

// console.log('Please enter first number:');
// const a = readline.prompt();

// console.log('Please enter second number:');
// const b = readline.prompt();

// console.log('The multiplication of given two numbers is = ' + ((+a) * (+b)));

// const c = '100' + '200';
// console.log('Value before conversion = ' + c);
// const d = +'100' + +'200';
// console.log('Value after conversion = ' + d);


//2nd method: parseInt / parseFloat
console.log('Please enter first number:');
const e = readline.prompt();

console.log('Please enter second number:');
const f = readline.prompt();

// //conditional control flow using if-else

if (operator == '+')
{
    let g = parseInt(e) + parseInt(f);
    console.log('The answer using ifelse is = ' + g);
} else if (operator == '-')
{
    let g = parseInt(e) - parseInt(f);
    console.log('The answer using ifelse is = ' + g);
} else if (operator == '*')
{
    let g = parseInt(e) * parseInt(f);
    console.log('The answer using ifelse is = ' + g);
} else if (operator == '/')
{
    let g = parseInt(e) / parseInt(f);
    console.log('The answer using ifelse is = ' + g);
};


//control flow using switch

switch(operator){
    case '+':
        let g = parseInt(e) + parseInt(f);
        console.log('The answer using switch is = ' + g);
        break;
    
    case '-':
        let h = parseInt(e) - parseInt(f);
        console.log('The answer using switch is = ' + h);
        break;
    
    case '*':
        let i = parseInt(e) * parseInt(f);
        console.log('The answer using switch is = ' + i);
        break;

    case '/':
        let j = parseInt(e) / parseInt(f);
        console.log('The answer using switch is = ' + j);
        break;
    


}



