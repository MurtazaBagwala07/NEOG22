// 1.Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8
// const power=(a, b)=> {
//     let ans=1;
//     for(let i=1; i<=b;i++){
//         ans= ans*a
//     }
//     return ans;
// }
// console.log(power(2,11))


// 2.Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// const areaOfHexagon =(side)=>{
//     return (2.5980*side*side).toFixed(2);
// }
// console.log(areaOfHexagon(1));


// 3.Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3
// const noOfWords=(sentence)=>{
//     return sentence.split(' ').length;
// }
// console.log(noOfWords('We are neoGrammers'));


// 4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// const findMin=(...args)=>{
//     let min=1000000;
//     args.map(arg=>{
//         if(arg<min){
//             min=arg;
//         }
//     })
//     return min;
// }
// console.log(findMin(3,5,9,1));


// 5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)
// const findMax=(...args)=>{
//     let max=-1000000;
//     args.map(arg=>{
//         if(arg>max){
//             max=arg;
//         }
//     })
//     return max;
// }
// console.log(findMax(3,5,9,1));


// 6.Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle
// const typeOfTriangle =(a,b,c)=>{
//     if(a==b&&b==c){
//         return 'equilateral'
//     }
//     else if(a!=b&&b!=c){
//         return 'scalene'
//     }
//     else{
//         return 'scalene'
//     }
// }
// console.log(typeOfTriangle(60,60,60))


