function makeRequest(name){
    return new Promise((resolve, reject) =>{
        if(name == "Murtaza"){
            resolve('Murtaza says HELLO');
        }
        else{
            reject('Only Murtaza is authorized to say anything')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log('Processing request')
        resolve("INFO : "+response);
    })
}

async function doWork(){
    try{
        const response = await makeRequest('Murtaza');
        console.log('response received')
        const processedResponse = await processRequest(response);
        console.log(processedResponse)
    } catch(err){
        console.log(err)
    }
}

doWork()