const promise1 = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async Task is done');
        resolve();//resolve ka connection h then ke sath
    },1000)
});


promise1.then(function(){
    console.log('Promise consumed')
})

//yeh dono same hi h^



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2 is done');
        resolve();//resolve ka connection h then ke sath
    },1000)
}).then(function(){
    console.log('Promise consumed 2')
})


//promise 3
//resolve me data bhi pass kr skte h
//or then me mil jaega
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "sanskar", email:"sanskarsharma4546@gmail.com"})
    },1000)
}).then(function(user){
    console.log('User:', user)
})


const promise4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "sanskar", password:"12"});
        }
        else{
            reject('Failed');
        }
    },1000)
})

promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Finally');
})



const promise5= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: "JavaScript", password:"12"});
        }
        else{
            reject('Failed to fetch data');
        }
    },1000)
});
//isko then ki trh use kr skte h
async function consumePromise5(){
    try{
        let user = await promise5;
        console.log(user);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('Finally');
    }
}
consumePromise5();


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('Finally');
    }
}
getAllUsers();