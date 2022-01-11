// 1.Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5
// const arrayLength =(array)=>{
//     let length=0;
//     array.map(num=>{
//         length++;
//     })
//     return length;
// }
// console.log(arrayLength([3,4,5,5,6,43,2,45,6]));


// 2.Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
// const indexOf =(array,num)=>{
//     for(let i=0;i<array.length;i++){
//         if(array[i]===num){
//             return i;
//         }
//     }
// }
// console.log(indexOf([1,2, 3, 4, 5, 6, 7, 8, 9, 10],5))


// 3.Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
// const replace=(array,num,repl)=>{
//     for(let i=0;i<array.length;i++){
//         if(array[i]===num){
//             array[i] =repl;
//         }
//     }
//     return array;
// }

// console.log(replace([1,2,3,3,3],3,9))


// 4.Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
// const mergeArray =(arrOne,arrTwo)=>{
//     return [...arrOne,...arrTwo]
// }
// console.log(mergeArray([1,2,3,5], [2,4]))


// 5.Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c
// const charAt =(string,index)=>{
//     return string[index];
// }
// console.log(charAt("hello sir",7))


// 6.Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
// const minDate=(date1,date2)=>{
//     const d1=new Date(date1);
//     const d2=new Date(date2);
//     if(d1>d2){
//         return d1;
//     }else{
//         return d2;
//     }
// }
// console.log(minDate('02/05/2021', '24/01/2021'))

