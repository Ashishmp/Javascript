//singleton

//object literals

const mySym = Symbol("key1")

Object.create // this is a singleton type of object creation
const jsUser = {
    name: "Ashish",
    "lName": "Ranjan sir",
    [mySym] : "Key1",
    age: 20,
    location: "Riga",
    isLoggedIn: false,
    lastLoginDays: ["Mondays", "Sunday"] 
}

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["lName"]);
// console.log(jsUser.lName);
// console.log(jsUser[mySym]);

jsUser.name = "Rajna"
// console.log(jsUser.name);

//Object.freeze(jsUser)
jsUser.name = "gaurav"
// console.log(jsUser.name);


jsUser.greeting = function(){
    console.log("Hello");
    
}
 console.log(jsUser.greeting());


 jsUser.greeting1 = function(){
    console.log(`Hello user ${this.name}`);

    
}

console.log(jsUser.greeting1());
