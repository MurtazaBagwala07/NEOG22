// 1.Try converting these codes to ES6 syntax-

// 1.1
// var aloo = 1;
// if (aloo == 1) {
//    var a = 2;
//    console.log(a);
// }
// console.log(aloo);

// // let aloo=1;
// // if (aloo == 1) {
// //     let a = 2;
// //     console.log(a);
// // }
// // console.log(aloo);


// 1.2
// var multiply = function(x, y) {
//     return x * y;
//   };

// let multiply =(x,y)=>x*y;
// console.log(multiply(3,4))


// 1.3
// var customer = {
//     name: "Bhaalo"
//   };
//   var card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece";

//   let customer = {
//     name: "Bhaalo"
//   };
//   let card = {
//     amount: 20,
//     product: "Aaalo",
//     unitprice: 50
//   };
//   let message =` Hello ${customer.name} wants to buy ${card.amount}  ${card.product}  for price of  ${card.unitprice}  per piece`
//   console.log(message);


// 1.4
// var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];
// console.log(Neog,CEO,Mentor);

// const Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
// CEO = Neog[0],
// Mentor = Neog[2];
// console.log(Neog,CEO,Mentor);


// 1.5
// var arr = ["MA", "TA", "PA", "CA"];
// var firstName = arr[0],
// var surname = arr[1];
// console.log(firstName);
// console.log(surname);

// const arr = ["MA", "TA", "PA", "CA"];
// const firstName = arr[0],
// surname = arr[1];
// console.log(firstName);
// console.log(surname);


// 1.6
// var Aaloo = "Tasty";
// var Bhaloo = "Cute";
// var Obj = {
//   Aaloo: Aaloo,
//   Bhaloo: Bhaloo
// };

// let Aaloo = "Tasty";
// let Bhaloo = "Cute";
// const Obj = {
//   Aaloo,
//   Bhaloo
// };

// console.log(Obj.Aaloo)


// 1.7
// var a = 5;
// var b = 10;
// console.log("Fifteen is ".concat(a + b, " and not ").concat(2 * a + b, "."));

// const a=5;
// const b=10;
// console.log(`Fifteen is ${a+b} and not ${2*a+b}`)


// 1.8
// var arithmeticsObj = {
//     sum: function sum(num1, num2) {
//       return num1 + num2;
//     },
//     multiply: function multiply(num1, num2) {
//       return num1 * num2;
//     }
//   };

// let arithmeticsObj={
//     sum: (num1, num2) =>num1 + num2,
//     multiply:(num1, num2) =>num1 * num2,
// }

//1.9
// var avengers = {
//     operation: "Assemble",
//     members: [
//       {
//         ironMan: "Tony Stark"
//       },
//       {
//         captainAmerica: "Steve Rogers"
//       },
//       {
//         blackWidow: "Natasha Romanoff"
//       }
//     ]
//   };
//   var operation = avengers.operation,
//     members = avengers.members;

// const avengers = {
//     operation: "Assemble",
//     members: [
//       {
//         ironMan: "Tony Stark"
//       },
//       {
//         captainAmerica: "Steve Rogers"
//       },
//       {
//         blackWidow: "Natasha Romanoff"
//       }
//     ]
//   };
 
//   const {operation,members}=avengers;

//   console.log(members);



//2.Convert ES6 to ES5

//2.1
const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5)