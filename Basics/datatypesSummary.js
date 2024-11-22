//Primitive


// 7 types: String, number, boolean, null, undefined,symbol BigINt

const score = 100
const ScoreValue = 100.98


let userEmail;
const isLoggedin = false
const outsideTemp = null


const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id == anotherID);

//Reference (Non Primitive)
//Array, Object, Functions


const heros = ["Shahrukh", "Nagraj", "doga"]
let myObj = {
    name: "Ashish",
    age: 22,
}


const myFunction = function(){
    console.log("Hello World!");
    
}


//+++++++++++++++++++++++++++++++++++
//Memory
//Satck( used in Primitive), Heap(used in Non Primitive )

let myYoutubename = "Ranjandotcom"

let anothername = myYoutubename
anothername = "Ashishdotcom"
console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
/* primitive values will be gone in stack but in non primitive the reference will be passed */