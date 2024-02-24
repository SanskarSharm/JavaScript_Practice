class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    //getter & setter
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
    //without _ it will go in infinite loop
}
const sanskar = new User("sanskar","abc")
console.log(sanskar.email);
console.log(sanskar.password);