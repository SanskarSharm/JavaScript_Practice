//Immediate Invoked Function Expression (IIFE)

(function chai(){
    console.log(`Db CONNECTED`)

})();
//Niche vaale ke liye hmko semicolon use krna padega
//kunki isko pta nhi kha end krna h
((name)=>{
    console.log(`Db CONNECTED two ${name}`)
})(`Sanskar`)
//yeh dono method same kaam krte hain
// chai()
//global scope ke polution se bachne ke liye use hota hain

