function multipleBy5(num){
    return num * 5;
}

//function object bhi h
multipleBy5.power = 2;
console.log(multipleBy5(2)); // 10
console.log(multipleBy5.power); // 2


function creatUser(username, score){
    this.username = username;
    this.score = score;

}
creatUser.prototype.increment = function(){
    this.score++;
}
creatUser.prototype.printMe = function(){
    console.log(`Username is ${this.username} and score is ${this.score}`)

}

const sanskar = new creatUser('sanskar', 9);
const sharma = new creatUser('sharma', 8);

sanskar.printMe();
sharma.printMe();