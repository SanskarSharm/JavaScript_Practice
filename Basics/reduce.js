//reduce method is used to reduce the array to a single value.
const array = [1, 2, 3, 4, 5];

// const initialValue = 0;
// const sumWithInitial = 
// array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
// console.log(sumWithInitial); 
//same hi h
// const sum = array.reduce(function(accumulator, currentValue) {
//     console.log(`accumulated ${accumulator} and current value is ${currentValue} `);

//     return accumulator * currentValue;
// },3)


//in arrow function
const myTotal = array.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName : "Js course",
        amount : 500
    },
    {
        itemName : "React course",
        amount : 600
    },
    {
        itemName : "Node course",
        amount : 700
    },
    {
        itemName : "Python course",
        amount : 800
    }
]

const totalAmount = shoppingCart.reduce((total, cartItem) => total + cartItem.amount, 0);
console.log(totalAmount);