let p = new Promise((resolve, reject) => {
    let a=1+1;
    if(a==2){
        resolve('success')
    }else{
        reject('failure');
    }
})

p.then((message) => {
    console.log('this is in the then ' + message)
}).catch((message)=>{
    console.log('this is in the catch' + message)
})

const consoleOne= new Promise((resolve, reject) => {
    resolve('1');
})

const consoleTwo= new Promise((resolve, reject) => {
    resolve('2');
})

const consoleThree= new Promise((resolve, reject) => {
    resolve('3');
})

Promise.all([consoleOne, consoleTwo, consoleThree])
.then((messages)=>{
    console.log(messages);
})
