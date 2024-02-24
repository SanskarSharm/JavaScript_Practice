class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Hi I am User:  ${this.username}`)
    }
    
    static creatId(){
        return `123`;
    }
}
const sanskar = new User("sanskar")
sanskar.logMe()
// console.log(sanskar.creatId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }

}
const sharma = new Teacher("sharma", "sanskar@gmail.com")
sharma.logMe()
// console.log(sharma.creatId());