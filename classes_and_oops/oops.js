const user = {
    username: "Anmol",
    logInCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got users details");
        // console.log(`Username: ${username}`);
        console.log(`Username: ${this.username}`);
        console.log(this); //  current context
    }
}
console.log(user.username);
console.log(user.getUserDetails());