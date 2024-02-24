//for of
// ["","",""]
// [{},{},{}] 

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// const greeting = "Hello World!"
// for (const greet of greeting) {
//     if(greet == " "){
//         console.log("Space")
//        break
//     }
//     console.log(`Each letter: ${greet}`)
// }

//maps

const map =new Map()
map.set("name","Sanskar")
map.delete("name")
map.has("name")
map.set("name","Sanskar")
map.set("age",20)
console.log(map.get("name"))
console.log(map.get("age"))


map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")
// console.log(map)

for(const key of map){
    console.log(key)
}

for(const [key,value] of map){
    console.log(key,':-',value)
}

//abhi yeh iterate nhi hoga
//lekin yeh iterate hoga 
//isme for in use kiya or for of use kiya
//for in key deta hain
//but object[key] se value mil jati hain
const myObject ={
    Game1:'Cricket',
    Game2:'Football',
    Game3:'Basketball'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["JavaScript","Python","Java","C++"]

for (const key in programming) {
    console.log(key)
}
