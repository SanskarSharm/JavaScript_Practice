class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Hi I am User:  ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email,password){
        super(username);
        this.email = email;
        this.password = password;
        
        
    }
    addCourse(course){
        console.log(`Course added: ${course}`)
    }
}

const sanskar = new Teacher("sanskar", "sanskar@gmail.com", "123")
sanskar.logMe()
sanskar.addCourse("Javascript")

const ram = new User("ram")
ram.logMe()
// ram.addCourse("C++") error 
console.log(sanskar == ram) //false
console.log(sanskar == Teacher)//false
console.log(sanskar instanceof Teacher)//true
console.log(sanskar instanceof User)//true
console.log(sanskar instanceof Object)//true