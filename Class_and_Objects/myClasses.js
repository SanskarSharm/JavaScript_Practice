//ES^6 ke baad

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    
    }
}

const sanskar = new User('sanskar', "sanskar@gmail.com","123")
console.log(sanskar.encryptPassword());
console.log(sanskar.changeUsername());


//behind the scene

function SUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
SUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
SUser.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const sharma = new SUser('sanskar', "sanskar@gmail.com","123")
console.log(sanskar.encryptPassword());
console.log(sanskar.changeUsername());
