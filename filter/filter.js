//const coding = ["js", "rb", "py", "java", "cpp"]

// const values =coding.forEach((item)=>{
//     //console.log(item);
//     return item
    
// })


//console.log(values);


//+++++++++++++++++++Filter++++++++++++++++++++++++++++
const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//    return num > 4
// } )

const newNums = []

// myNums.forEach((num) =>{
//     if(num>7){
//         newNums.push(num)
//     }
// } )


// console.log(newNums);
//craete a book object
const books = [
    {
        title: 'Book 1', genre: 'Fiction', publish: 1981, edition: 2001
    },
    {
        title: 'Book 2', genre: 'Non-Fiction', publish: 1992, edition: 2004
    },
    {
        title: 'Book 3', genre: 'History', publish: 1971, edition: 2005
    },
    {
        title: 'Book 4', genre: 'Science', publish: 1881, edition: 2008
    },
    {
        title: 'Book 5', genre: 'History', publish: 1881, edition: 2019
    },
    {
        title: 'Book 6', genre: 'Science', publish: 2001, edition: 2016
    },
]
// const userbooks = books.filter((bk)=> bk.genre === "History")

// console.log(userbooks);

const userbooks = books.filter((bk)=> bk.publish >= 2000 && bk.genre === "Science")

console.log(userbooks);


// if you are using scope apply return else remove scope


