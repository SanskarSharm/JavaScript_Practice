const score = 40
console.log(typeof score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(2))

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4)) //round off

const hundereds = 100000
console.log(hundereds.toLocaleString('en-IN')) //indian currency

// maths

console.log(Math.PI)
console.log(Math.E)
console.log(Math.round(2.3))
console.log(Math.round(2.6))
console.log(Math.ceil(2.3))
console.log(Math.ceil(2.6))
console.log(Math.floor(2.3))
console.log(Math.floor(2.6))
console.log(Math.trunc(2.3))
console.log(Math.trunc(2.6))
console.log(Math.sign(2))
console.log(Math.sign(-2))
console.log(Math.sign(0))
console.log(Math.abs(-2))
console.log(Math.abs(2))
console.log(Math.pow(2,3))
console.log(Math.sqrt(4))
console.log(Math.cbrt(8))
console.log(Math.max(2,3,4,5,6,7,8,9))
console.log(Math.min(2,3,4,5,6,7,8,9))
console.log(Math.random())
console.log(Math.random()*100)
console.log(Math.floor(Math.random()*100))

console.log(Math.sin(0))

console.log(Math.cos(0))

console.log(Math.tan(0))

console.log(Math.asin(0))

console.log(Math.acos(0))

console.log(Math.atan(0))

console.log(Math.sinh(0))

console.log(Math.cosh(0))

console.log(Math.tanh(0))

console.log(Math.log(2))

console.log(Math.log10(2))

console.log(Math.log2(2))

console.log(Math.exp(2))

console.log(Math.expm1(2))

console.log(Math.hypot(3,4))

console.log(Math.log1p(2))

console.log(Math.imul(2,3))

console.log(Math.clz32(2))

console.log(Math.trunc(2.3))

console.log(Math.fround(2.3))

console.log(Math.round(2.3))

console.log(Math.round(2.6))

console.log(Math.random())//0 to 1


const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min+1))+min)

