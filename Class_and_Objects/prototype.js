let myName = "sanskar  "

// console.log(myName.trim().length);
console.log(myName.length);


let myHeros = ['superman', 'batman', 'spiderman', 'thor']

let heroPower = {
    thor: 'hammer',
    spiderman: 'web',
    superman: 'fly',
    batman: 'money',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
       
}
Object.prototype.sanskar = function(){
    console.log('I am sanskar')
}


Array.prototype.heySanskar = function(){
    console.log('I am sanskar sharma')

}
myHeros.heySanskar()//access h 
// heroPower.heySanskar()//error
// heroPower.sanskar()
myHeros.sanskar()// access h
console.log(heroPower.getSpiderPower())



//inheritance


const user = {
    name: 'sanskar',
    loginCount: 8,
    signedIn: true,
    role: 'admin'

}
const teacher = {
    makeVideo: true
}
const TeacherSupport ={
    isAvailabe: false
}
const TASupport ={
    makeAssignment:'JS Assignment',
    fullTime: true,
    __proto__: TeacherSupport //inheritance
}

teacher.__proto__ = user;

//morden way

Object.setPrototypeOf(TeacherSupport, teacher)


let anotherUser = "sanskarSharma   "
String.prototype.trueLength = function(){
    // return this.trim().length;
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`${this.trim().length} and ${this.length}`)
}
anotherUser.trueLength()
"hello".trueLength()
"iceTea".trueLength()