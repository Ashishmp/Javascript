const name = "Ashish-Ranjan"
const repoCount = 50


//console.log(name + repoCount + " values");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Ashish-Ranjan')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
//original value will not be changed cause it use stack
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));


// go through string methods 

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(0,6)
const anotherString1 = gameName.slice(-3,6)
console.log(anotherString);
console.log(anotherString1);


const newStringone = "      Ashish      "
console.log(newStringone);
console.log(newStringone.trim());

//trim start and end  is also a method

const url = "https://facebook.com/Ashish%20Ranjan"
console.log(url.replace('%20', '-'));

console.log(url.includes('Ranjan'));


console.log(gameName.split('-'));

