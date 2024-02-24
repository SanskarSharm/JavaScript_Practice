// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     // console.log(item)
//     return item
// })
// console.log(values)
//for each return nhi krta hain

// coding.forEach ((item) =>{
//     console.log(item)
// })

// filter

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// // const newNums = myNums.filter((num)=>num>4) yeh 
// // const newNums = myNums.filter((num)=>{ yeh dono same h
// //     return num>4
// // })

// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


//map

const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const newNumber = myNumber.map((num)=>num*2)
// const newNumber = myNumber.map((num)=>{
//     return num*2
// })
const newNumber = myNumber.map((num)=>{return num+10})
//ese bhi use kr skte hain
const newNums = myNumber
.map((num)=>num*10)
.map((num)=>num+3)
.filter((num)=>num>40)//jo true hoga vo print hoga

console.log(newNums)