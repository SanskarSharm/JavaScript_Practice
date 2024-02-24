// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //isko time lgega to await krayenge
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log('Finally');
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})