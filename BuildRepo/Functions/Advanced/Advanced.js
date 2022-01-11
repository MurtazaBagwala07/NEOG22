// 1.Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
// const encodeString=(string,shift)=>{
//     let result=string;
//     for(let i=0;i<string.length;i++){
        
//         result[i]=(String.fromCharCode(string.charCodeAt(i)+shift));
        
//     }
//     return result;
// }
// console.log(encodeString("neogcamp",2))


// 2.Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
// const toSentence=(string)=>{
//     const sentence=string.split(' ');
//     for(let i=0; i<sentence.length; i++){
//         sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
//     }
//     const str2 = sentence.join(" ");
//     return str2;
// }
// console.log(toSentence('hello good hooman'))


// 3.Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
// const sortArray =(arr)=>{
//     for(let i=0; i<arr.length;i++){
//          for(let j = 0; j < ( arr.length - i -1 ); j++){
//      if(arr[j] > arr[j+1]){
//        let temp = arr[j]
//        arr[j] = arr[j + 1]
//        arr[j+1] = temp
//      }
//    }
 
//     }
//     return arr;
// }
// console.log(sortArray([100,83,32,9,45,61]))


// 4.Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen
// const reverseCharactersOfWord =(str)=>{
//     const string= str.split("");
//     for(let i=0; i<string.length; i++){
//         string[i]=string[i].split('').reverse();
//     }
//     const str2=string.join("");
//     return str2;
// }
// console.log(reverseCharactersOfWord('we are neoGrammers'))