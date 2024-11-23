const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(Accumulataor, currentValue){
//     console.log(`Accumulator:${Accumulataor} and Current Value: ${currentValue}`);
    
//     return Accumulataor+currentValue
// }, 0)


// const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 2999
    },
    {
        itemName: 'Data Science',
        price: 22999
    },
    {
        itemName: 'Python',
        price: 599
    },
    {
        itemName: 'App Dev',
        price: 299
    }
]


const priceToPay = shoppingCart.reduce((acc, item)=> acc+item.price, 0 )
console.log(priceToPay);

