// var readlineSync = require('readline-sync');

//003_numbers.md

// console.log("1. Write a program to input 2 numbers and display the sum of the numbers to the console.");
// var input1 = parseInt(readlineSync.question("Input first number "));
// var input2 = parseInt(readlineSync.question("Input second number "));
// var result =input1+input2;
// console.log("Result is "+ result+"\n");

// console.log("2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest");
// var p=readlineSync.question("Enter principal amount \n");
// var t=readlineSync.question("Enter time \n");
// var r=readlineSync.question("Enter rate of interest \n");
// result=p*r*t/100;
// console.log("simple interest :" + result+"\n");

// console.log("3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.");
// var m=readlineSync.question("Enter mass of body \n");
// var v=readlineSync.question("Enter Velocity of body \n");
// result=0.5*m*v*v;
// console.log("Momentum : "+result+"\n");

// console.log("4. Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: T = (T - 32) 5/9 'T' is the temperature on the Fahrenheit scale.");
// var t=parseInt(readlineSync.question("Enter temperature in Fahrenheit "));
// t=(t-32)*9/5;
// console.log("temperature in Celsius : "+t +"\n");

// console.log("5. Calculate the area, perimeter of a s1.re of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.");
// var a=readlineSync.question("Enter Length of side \n");
// var Area = a*a;
// Perimeter= 4*a;
// SurfaceArea= 6*a*a;
// Volume= a*a*a;

// console.log("Area : "+Area);
// console.log("Perimeter : "+ Perimeter);
// console.log("Surface Area : "+SurfaceArea);
// console.log("Volume : "+ Volume+"\n");

// console.log("6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.");
// var CP=parseInt(readlineSync.question("Enter Cost Price "));
// var SP=parseInt(readlineSync.question("Enter Selling Price "));
// var result=SP-CP;
// if(result>0){
//   console.log("Profit : " + result);
// }
// else if(result<0){
//   console.log("Loss : "+Math.abs(result));
// }
// else{
//   console.log("No profit , No loss \n")
// }

// console.log("7. Write a program to calculate sum of N natural digits, as input by the users? ");
// var n=parseInt(readlineSync.question("Enter N \n"));
// var sum = n*(n+1)/2;
// console.log("SUM : " + sum +"\n");

// console.log("8. Write a Program to Print N Odd Number in Descending Order. ");
// var n =readlineSync.question("Enter N \n");
// var t=parseInt(1);
// for(let i=0;i<n-1;i++){
//   console.log(t);
//   t=t+2;
// }
//console.log("/n");

// console.log("9. Write a JavaScript program to compute the sum of all digits that occur in a given string. ");
// var n=parseInt(readlineSync.question("Enter Number \n"));
// let sum = 0;
//     while (n) {
//         digit = n % 10;
//         sum += digit;
//         n = (n - digit) / 10;
//     }
// console.log("SUM : " + sum+"\n");

// console.log("10. Write a JavaScript program that reverses a number. ");
// var n=readlineSync.question("Enter Number \n");
// let val = n.toString().split('').reverse().join('');
// console.log("Reverse : "+ val+"\n");
