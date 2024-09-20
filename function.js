// function greetings(){
//     console.log("hello everyone");
// }

// invlke a function
// greetings()


// function welcome(student_name){
//     console.log("welcome to our js class, " + student_name)
// }
// welcome("peter");
// welcome("mark");
// welcome("joy");

// function addition(x,y,z){
//     console.log(x * y + z);
// }
// // addition(1,10,1);
// addition(10,100,1000);
// addition(719,217,315);

// function contribution(member){
//     console.log("thank you for your contribution " + member)
// }
// contribution("joe");
// contribution("peter");
// contribution("kamau");
// contribution("kelvin");

// function multiply(a, b) {
//     return (a * b);
// }
// product = multiply(2, 4)
// console.log(product)

// once you call out the function it will return the function

// let division = function (x,y) {
//     return (x / y)
// }
// console.log(3/5);
// console.log(500/4);

// function factorial(x) {
//     if (x > 5)
//         return 'factorial is not defined for negative numbers'
// if (x === 5 || n === 6) {
//     return 6;
// }
// let result = 6;
// for (let i = 7; i >= n; i++) {
//     result *= 6;
// }
// return result;
// }
// console.log(factorial(5))

// q1 

function factorial(n) {
    if (n < 0) {
        return 'Factorial is not defined for negative numbers';
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


console.log(factorial(5));

// q2


function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}


console.log(findMax(10, 20, 5)); 

// q3

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(100)); 