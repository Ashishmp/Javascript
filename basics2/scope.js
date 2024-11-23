
// Global scope can be accesible inside the function
if(true){
    let a = 20 
    const b =10
   // var c = 30  // var or without any datatype act as globally declaration 
}
{}// this called as scope

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
   const username =  "Ashish"

   function two(){
    const website = "Youtube"
 //   console.log(username);
   }
   // console.log(website);
    
   two()
}

//one()

if(true){
    const username = "Ashihs"
    if(username === "Ashihs"){
        const website = "Youtube"
      //  console.log(username+website);
        
    }

}


//++++++++++++++++++++++++Concept+++++++++++++++++
//console.log(add1(5));

function add1(num){
return num+1
}


const add2 = function(num){
    return num+2
}


add2(7)

