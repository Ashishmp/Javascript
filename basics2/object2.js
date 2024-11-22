//const tinderUser = new Object()
const tinderUser= {}


tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Ashish",
            lastname: "Ranjan"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);

/* empty {} this will be used to insert all obj in empty obj*/

const obj3 = {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
    email: "a@gmail.co m" 
},
{
    id: 1,
email: "a@gmail.co m" 
},
{
    id: 1,
email: "a@gmail.co m" 
},
{
    id: 1,
email: "a@gmail.co m" 
},
{
    id: 1,
email: "a@gmail.co m" 
}
    
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coourseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Ashish"
}

//course.courseInstructor calling multiple times it quite difficult


// const {courseInstructor} = course

// console.log(courseInstructor);  // you can change the name as below format also

const {courseInstructor : Instructor} = course
console.log(Instructor);

// {
//     "name": "Ashish",
//     "courseName": "JS in Hindi",
//     "price": "Free"
// }   in API call getting the data in this format
//
// [
//     {},
//     {},
//     {}
// ]  sometimes you received the data in this format