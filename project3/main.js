const clock = document.getElementById('clock')

// setInterval(function(){
//     let date = new Date()
//     //console.log(date.toLocaleDateString())  isko document me uptade krna h
//     clock.innerHTML = date.toLocaleTimeString()
// },1000)

setInterval(function(){
    let date = new Date()
    hour.innerHTML = date.getHours()
    minute.innerHTML = date.getMinutes()
    second.innerHTML = date.getSeconds()
},1000)