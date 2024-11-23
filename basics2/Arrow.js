const user = {
    username: "Ashish",
    price: 999,

    welcomeMessege: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessege()
// user.username = "Sam"
// user.welcomeMessege()


//console.log(this);

// function one(){
//     let username = "Ashish"
//    // console.log(this.username);
// }


const one = () => {
    let username = "Ashish"
    console.log(this.username);
}
//one()

//Arrow function

// const add2 = (num1, num2) =>{
//     return num1+num2
// }
//object decared under paranthesis
const add2 = (num1, num2) => num1+num2
console.log(add2(4,6));


// const myArray = [2,3,4,5,6]
// myArray.forEach()