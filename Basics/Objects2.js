//const tinderUser = new Object() single object

const tinderUser = {} //literal


tinderUser.id = "123abc"
tinderUser.name = "sanskar"
tinderUser.age = 20
tinderUser.location = "jaipur"
tinderUser.email = "sanskarsharma4546@gmail.com"
tinderUser.isLogged = false


// console.log(tinderUser)

const regularUser = {
    email:"somesh4546@gmail.com",
    fullname:{
        userfullname:{
            firstname:"somesh",
            lastname:"sharma"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.lastname)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"d"}

const obj3 = Object.assign({},obj1,obj2)
// yeh dono same kaam krte hain 
// const obj3 = {...obj1,...obj2}
console.log(obj3)


const users =[
    {
        id:1,
        email : "san@gmail.com"
    },
    {
        id:2,
        email : "san@gmail.com"
    },
    {
        id:3,
        email : "sha@gmil.com"
    }
]
users[1].email
console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("name"))
