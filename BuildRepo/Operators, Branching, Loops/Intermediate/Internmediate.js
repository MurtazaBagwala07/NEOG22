// 1.Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// for(let i=1;i<=100;i++){
//     if(i%15==0){
//         console.log("FizzBuzz")
//     }
//     else if(i%5===0){
//         console.log("Buzz")
//     }
//     else if(i%3===0){
//         console.log("Fizz")
//     }
//     else{
//         console.log(i)
//     }
// }


// 2.Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *
// for(var i=1; i<=5; i++){
//            console.log("* ".repeat(i));
//         }


//3.Write a program to take a number input from user and print multiplication table 12 times for that number.
// const table12=(num)=>{
//     for(let i=1; i<=12;i++){
//         console.log(num*i);
//     }
// }

// table12(8);


//4.Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
// const fibonacci =(num)=>{
//     let n1=0,n2=1,nextTerm;
//     for(let i=1;i<=num;i++){
//         console.log(n1);
//         nextTerm=n1+n2;
//         n1=n2;
//         n2=nextTerm;
//     }
// }
// fibonacci(6)


// 5.Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120
// const factorial =(num)=>{
//     fact=1;
//     while(num>0){
//         fact=fact*num;
//         num--;
//     }
//     console.log(fact)
// }
// factorial(7);


//6.Write a Program to take a number input from user and find if the number is Prime or not.
// const checkPrime=(num=19)=>{
//     for(let i=2; i<num/2;i++){
//         if(num%i===0){
//             return "Not Prime Number"
//         }
//     }
//     return "Prime Number"
// }
// console.log(checkPrime(12))


// 7.Write a program to take a day as an input and determine whether it is a weekday or weekend.
// const checkDay=(day)=>{
//     if(day.toLowerCase()=="sunday"||day.toLowerCase()=="saturday"){
//         return "weekend"
//     }else{
//         return "weekday"
//     }
// }
// console.log(checkDay("Sunday")) 