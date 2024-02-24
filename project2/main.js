const form = document.querySelector('form')
//height or weight bhar na le kyunki refersh ho jayega
//empty value denge toh error aayega

form.addEventListener('submit',function(event){
    event.preventDefault()//prevent the default action ko roko

    const height = parseInt(document.querySelector('#Height').value)
    const weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')
    
    if(height === '' || isNaN(height) || height <= 0 || weight === '' || isNaN(weight) || weight <= 0){
        result.innerHTML = "Please enter valid values"
    }
    else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`
    }
})
 