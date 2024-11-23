const myObj = {
    js: "Javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
    
}


const programming  = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
   // console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('USA', " united States of America")
map.set('IN', "India")

// MAP is not iterable so it cant be used in for in
// for (const key in map) {
//     console.log(key);
    
// }

