//for
// for(let i=0; i<10; i++){

//     if(i==3){
//         console.log("Three")
//     }
//     console.log(i);
// }


for(let i=1;i<=10;i++){
    console.log(`Outer loop value: ${i}`)
    for(let j=1;j<=10;j++){
        // console.log(`Inner loop value: ${j} and inner loop ${i}`)
        console.log(i+"*"+j+" = "+i*j)
    }
}


let myArray = ["flash","arrow","superman","batman"]
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i])
}

//break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("Detect Five")
        continue
    }
    console.log(`Outer loop value: ${i}`);
}