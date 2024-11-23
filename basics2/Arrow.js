const user = {
    username: "Ashish",
    price: 999,

    welcomeMessege: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessege()
// user.username = "Sam"
// user.welcomeMessege()
