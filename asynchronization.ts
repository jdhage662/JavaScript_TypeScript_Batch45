//Synchronization: 
//Asynchronization :API testing: when sending the request -- it is taking to get response
// you can start executing the request 



//synchronization
console.log('start')

console.log('process')

console.log('end')

//asynchronization
console.log('Asynchronization start')
setTimeout(()=>{
    console.log('asyn process')
}, 2000)

console.log('End')

// Promise : pass : ps5 :  ps5   , fulfilled , rejected
//Object that is used to check the asynchronization nature of js and TS

// Pending: Fulfilled , Rejected

let promise = new Promise((resolved, rejected)=>{
    let boolVar = false;
    if(boolVar){
        resolved('PS5')
    }else{
        rejected('NO PS5')
    }
})

promise
.then(result => console.log(result))
.catch(error=>console.log(error));


//async and await


class Vehical{

    async additionOfNumbers(): Promise<string>{
        let result = await Promise.resolve('DataBAse Connection')
        console.log(result)

         return 'HEllo'
    }


}

let obj = new Vehical();

obj.additionOfNumbers()


