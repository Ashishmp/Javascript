const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function (item) {
//     console.log(item);
    
// }  )


// coding.forEach((item) => {
// console.log(item);

// })



// function printMe(item){
//     console.log(item);
    
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++14",
        languageFileName: "cpp"
    },
    {
        languageName: "C",
        languageFileName: "c"
    }
    

]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})