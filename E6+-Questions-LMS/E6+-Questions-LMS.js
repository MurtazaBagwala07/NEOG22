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

function something() {
    // a = undefined
    console.log(a)
    var a = 2
  }
  
  something()
    //output will be undefined cause var is hoisted at top and can be used before initialization as it wil be automatically initialized as undefined