// for of

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
    
    
}

// const greetings = "hello world!"
// for (const great of greetings) {
//     console.log(`Each char id ${great}`);    
// }


// MAP
const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('USA', " united States of America")
map.set('IN', "India")


// console.log(map);


for (const [key, value] of map){
  //  console.log(key, ':-', value);
    
}

const myObj = {
    'game1': "NFS",
    'game2': "BGMI"
}

// for (const[key, value] of myObj) {
//     console.log(key, ':-', value);
// }