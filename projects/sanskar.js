const buttons =document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);//kis se aaya h 

        if(event.target.id == 'grey'){
            body.style.backgroundColor = 'grey'
        }
        if(event.target.id == 'blue'){
            body.style.backgroundColor = 'white'
        }
        if(event.target.id == 'white'){
            body.style.backgroundColor = 'green'
        }
        if(event.target.id == 'yellow'){
            body.style.backgroundColor = 'purple'
        }
        if(event.target.id == 'pink'){
            body.style.backgroundColor = 'beige'
        }
    })
});