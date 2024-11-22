function sayMyName() {

    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

//sayMyName()

function addTwoNumbers(number1, number2) {
    // let result = number1+number2
    // return result
    // console.log(result); method 1

    return number1 + number2  //method 2
}
//for thid we need to check the number1 and number2 will be a number
addTwoNumbers(3, 4)

// const result = addTwoNumbers(3,5)
// console.log("Result:", result); here the result stores undefined


const result = addTwoNumbers(3, 5)
//console.log("Result:", result);


function loginUserMessege(username) { // you can pass a value after (username == "sam")
    if (!username) {
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessege())


// function calculateCartPrice(...num1) {     //... is called as rest and spread operator named depends on usage
function calculateCartPrice(val1, val2, ...num1) {
    return num1 
}

//console.log(calculateCartPrice(200, 500, 700, 1000))

const user = {
    username: "Ashish",
    price: "990"
}

function handleObject(anyObject){
    //console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Raj",
    price: 10

})

const myNewArray = [200,400.600,800]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,4]));
