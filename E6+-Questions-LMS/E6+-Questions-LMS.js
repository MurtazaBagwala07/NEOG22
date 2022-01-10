// section 1: let, const, and var
// example 01#

// What will be the output and why?
// if (true) {
//     let a = 2
//     // var a = 2;
//   }
//   console.log(a)

  //error cause it is not defined in global scope when we are trying to access it

//   let a = 42
// {
//   let a = 100
// }
// console.log(a)

    //console.log(a) will give output as 42 cause in global scope its defined as 42;

// let a = 100
// function App() {
//   console.log('1', a)
//   let a = 42
//   console.log('2', a)
//   {
//     let a = 100
//   }
//   console.log('3', a)
// }
// App()
    // error cause we cant access a before initialization

// let a = 100
// function App() {
//   a = 42
//   console.log('1', a)
// }
// App()
    //output will 1,42



// example 02#
// Topic: TDZ. Temporal Dead Zone What will be the output of this? And why?
// function something() {
//     console.log(a)
//     let a = 2
//   }
  
//   something()
    //cant access a before initialization cause let needs to be initialized before using it , it wont be error if var was used instead of let
    


// example 03#
// Topic: Hoisting.
// Output and why?

// function something() {
//     // a = undefined
//     console.log(a)
//     var a = 2
//   }
  
//   something()
    //output will be undefined cause var is hoisted at top and can be used before initialization as it wil be automatically initialized as undefined



// example 04#
// Topic: const VS var
// Output and why?

// const tanay = 2
// tanay = 3
    //Type error cause const cant be reassigned



// example 05#
// Topic: const with objects
// Will we get an error?

// const obj = { a: 1, b: 2 }
// obj.a = 22
// console.log(obj.a)
//     //no error cause it allowed

// const obj = { a: 1, b: 2 }
// const obj2 = { a: 3, b: 4 }
// obj = obj2
    //we get cause we reassigned already defined object



// example 06#
// Topic: const with arrays
// Will we get an error?
// What will it return?

// const array = [1, 2, 3, 4]
// array.push(55)
    //return length of array

// const array = [1, 2, 3, 4]
// array = array.push(55)
    //error as we are tryin to store length of array in const array and we cant reassign in const



// section 2: arrow functions
// example 07#
// Topic: Short arrow function/Lamda function/Fat arrow function
// What will be the output?
// Can you convert below arrow function into function declaration (normal function) format?

// with no parameter
// const getNum = () => 2

// // ES5 function
// function getNum() {
//   return 2
// }

// with one parameter
// Function
// const isOne = (num) => num == 1 // HW: === vs == in JavaScript, write a blog.

// function isOne(num){
//     return num==1;
// }

// // Calling the function
// console.log(isOne(12))

// Vinay
// function isOne(num) {
//   return num === 1 ? true : false
// }
 
// // Hiren
// function isOne(num) {
//   console.log(num)
// }



// example 08#
// Topic: Arrow function with more than 1 parameter
// const isBigger = (a, b) => a > b
// console.log('Is 2 bigger than 3?', isBigger(2, 3))

// // How would you write this with the least amount of characters
// function Add22andReturn(num) {
//   let sum = 0
//   sum = num + 22
//   return sum
// }

// // Version 1
// const Add22andReturn = (num) => {
//   let sum = 0
//   sum = num + 22
//   return sum
// }

// // Version 2
// const Add22andReturn = (num) => {
//   let sum = 0
//   sum = num + 22
//   return sum
// }

// // Version 3
// const Add22andReturn = (num) => {
//   return num + 22
// }

// // Version 4
// const Add22andReturn = (num) =>
//   num +
//   (22)[
//     // Doing it on an array
//     (1, 2, 3, 4, 5)
//   ].map((num) => num + 22)



// example 09#
// Topic: Arrow function when there are more than 1 statement
// const printSomethingAndReturn = (a) => {
//     console.log('squaring a.....')
//     return a * a
//   }
//   console.log(printSomethingAndReturn(2))



// example 10#
// Topic: Short arrow funtion while returning an object / object literal syntax
// const giveMeAnObject = (a) => ({ value: a })
// console.log(giveMeAnObject(5))



// section 3: default parameters
// example 11#
// Topic: default parameters
// What will be the output?
// const defaultExample = (a, b) => a + b
// console.log(defaultExample(2))
    //NaN cause we adding 2+undefined

// const defaultExample = (a, b) => {
//   if (b === undefined) {
//     b = 5
//   }
//   return a + b
// }

// // Instead
// const defaultExample2 = (a, b = 5) => a + b

// console.log(defaultExample(2, 4))
// console.log(defaultExample2(3))
// const defaultExample3 = (a, b=5, c) => a + b + c
// console.log(defaultExample3(1, 2, 3));   //will work
// console.log(defaultExample3(1, , 3));    //error cause we cant skip an element



// section 4: rest and spread
// example 12#
// Topic: rest
// const restExample = (a, ...rest) => {
//     console.log(a, rest)
//   }
//   console.log(restExample(2, 3, 4, 5, 6, 7, 8, 9, 10))


// example 13#
// Topic: spread with object
// const spreadExample = ({ a, b }) => {
//     console.log(a, b)
//   }
//   const obj = { a: 1, b: 2 }
//   console.log(spreadExample(obj))


// example 14#
// Topic: spread with array
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const spreadExample2 = ([first, second, ...rest]) => {
//   console.log(first, second, rest)
// }

// console.log(spreadExample2(array))

// // rest with spread
// console.log(spreadExample2([...array, 11, 12, 13]))


// example 15#
// Topic: spread ( can rename parameters )
// Will we get an error?
// const spreadExample = ({ a: aaloo, b: bhaaloo }) => {
//     // destructuring
//     // console.log(a,b)
//     console.log(aaloo, bhaaloo)
//   }
  
//   const obj = { a: 1, b: 2 }
//   spreadExample(obj)


// const spreadExample = ({ b: bhaaloo, a: aaloo }) => {
//     console.log(aaloo, bhaaloo)
//   }
//   const obj = { a: 1, b: 2 }
//   spreadExample(obj)



// section 5: Dynamic fields/ Object literal/ Template literal
// example 16#
// Topic: Dynamic fields in an object/computed property syntax
// let key = 'ram'
// const obj = { [key]: 122 }
// console.log(obj)

// example 17#
// Topic: Object literals/Shorthand property value

// let aaloo = 1
// let bhaaloo = 2

// const obj1 = { aaloo: aaloo, bhaaloo: bhaaloo }
// console.log(obj1)
// const obj2 = { aaloo, bhaaloo }
// console.log(obj2) // { aaloo: 1, bhaaloo: 2}


// example 18#
// Topic: Template Literal

// let name = 'Tanay'
// let line = 'Helloo ' + name + ' !'
// console.log(line)

// const helloTemp = `Hello ${name} !`
// console.log(helloTemp)

// const giveMeFive = () => 5
// const line2 = `Hey, my roll is ${giveMeFive()}`
// console.log(line2)

// // Question: variable 5 // "odd" ->> write this function, using arrow
// // Question: use this function in a sentence using template literal

// // Shivam's answer
// const oddOrEven = (num) => (num % 2 === 0 ? 'even' : 'odd')
// const res = `The number 5 is ${oddOrEven(5)} ${name}`


// section 6: Module system
// example 19#
// Topic: import/export

//  →  /utils.js
// export const add = (a, b) => a + b
// export const square = (a) => a * a

// //  →  /app.js
// import { add, square } from './utils'

// console.log(add(1, 2))
// console.log(square(2))

