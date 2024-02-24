//array

const myArr = [0,1,2,3,4,5]

const myHeros = ["shaktiman", "nagraj", "superman", "batman", "spiderman", "krrish"]

const myArr2 = new Array(1,2,3,4)
console.log(myHeros)
console.log(myArr)
console.log(myArr[2])

//Array methods

console.log(myArr.length)
console.log(myArr2.length)
myArr.push(6)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(-1)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.indexOf(2))
console.log(myArr.indexOf(6))


console.log(myArr.includes(2))
console.log(myArr.includes(6)) 
console.log(myArr.includes(7))
console.log(myArr.includes(-1))

console.log(myArr.join())
console.log(myArr.join(" "))
console.log(myArr.join("-"))
console.log(myArr.join("_"))
console.log(myArr.join("*"))

console.log(myArr.slice(1,3))
console.log(myArr.slice(1,4))
console.log(myArr.slice(1,5))

console.log(myArr.slice(1))


console.log(myArr.concat(myArr2))
console.log(myArr.concat(7))
console.log(myArr.concat(7,8,9))
console.log(myArr.concat(7,8,9,myArr2))

console.log(myArr.reverse())
console.log(myArr.sort())
console.log(myArr.sort((a,b)=>a-b))

console.log(myArr.splice(1,3))
console.log(myArr)

console.log(myArr.splice(1,0,1,2,3))
console.log(myArr)


console.log(myArr.splice(1,3,1,2,3))
console.log(myArr)
//slice(start, end)
//splice(start, deleteCount, item1, item2, item3, ...)
console.log(myArr.splice(1,3,1,2,3,4,5))
console.log(myArr)


const sanskar = ["sanskar", "sharma", "is", "good"]
const sharma = ["sharma", "also", "good"]

console.log(sanskar.concat(sharma))
console.log(...sanskar, ...sharma)
//concet or spread operator can be used to merge two arrays
//spread operator is used to merge two arrays
//concet is used to merge two arrays

console.log(Array.isArray("sanskar"))
console.log(Array.from("sanskar"))
console.log(Array.from({name: "sanskar"}))//interesting
console.log(Array.from("sanskar").join())
console.log(Array.from("sanskar").join(""))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
