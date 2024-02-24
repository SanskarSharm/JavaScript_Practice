const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(item){
//     console.log(item)
// })
// //same h
// coding.forEach((item)=>{
//     console.log(item)
// })

function printMe(item){
    console.log(item)
}   

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(`Index: ${index} and Item: ${item} and Array: ${arr}`)
})

const myCoding =[
    {
        languageName: "js",
        languageFileName: "javascript"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    },
    
]
myCoding.forEach((item)=>{
    console.log(item.languageName)
    console.log(item.languageFileName)
})