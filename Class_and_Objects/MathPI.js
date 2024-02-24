const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descripter)

const sanskar = {
    name: 'ginger Chai',
    price: 20,
    isAvailabe: true,

    orderChai:function(){
        console.log(`Order is placed for ${this.name}`)
    
    }
}
console.log(Object.getOwnPropertyDescriptor(sanskar, 'name'))

Object.defineProperty(sanskar, 'name', {
    writable: false,
    enumerable: false
})

for (const [key,value] of Object.entries(sanskar)) {
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`)
    }
    
    
}
console.log(Object.getOwnPropertyDescriptor(sanskar, 'name'))