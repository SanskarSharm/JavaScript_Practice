let a =300
if(true){
    let a=80
    const b=100
    var c=120
    console.log("Inear : ",a)
}
console.log(a)
console.log(c)


function one(){
    const username = "Sanskar"

    function two(){
        const website = "google.com"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()
// hmesa chote bde se le skte hain 
//pr chote nhi
//child se parent nhi le skte hain

if(true){
    const username = "Sanskar"
    if(username === "Sanskar"){
        const website = "google.com"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


function addone(num){
    return num+1
}
console.log(addone(5))


//isko kabhi expression function bhi kehte hain
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))