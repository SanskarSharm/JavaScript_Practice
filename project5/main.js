//generate a random color

const ramdomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6; i++){
        color +=  hex[(Math.floor(Math.random()*16))];

    }
    return color;
}
console.log(ramdomColor());

let intervalId;
//start changing color
const startChangingColor = function(){
    intervalId = setInterval(changeBgColor,1000);

    function changeBgColor(){
        document.body.style.backgroundColor = ramdomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}




document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);