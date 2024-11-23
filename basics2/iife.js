//immediately Invoked Function Expression(IIFE)

(function one(){
    //named iife
    console.log(`DB Connected`);
    
})();

//()=function declaration()= object

(  (name) => {
    //unnamed iife
    console.log(`DB connected ${name}`);
    
})('Ashish');