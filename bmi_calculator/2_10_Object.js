const mySym = Symbol("key1");

const jsUser = {
    name : "Anmol",
    "full name" : "Anmol maurya",
    // mySym : "mykey1",
    [mySym] : "mykey1",
    age : 22,
    location : "Muzaffarpur",
    email : "ak@gmail.com",
    isloggedIn : false
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(typeof jsUser.mySym);
// console.log(typeof jsUser[mySym]);

// Object.freeze(jsUser);
jsUser.email = "anmol@gmail.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
jsUser.greeting();
jsUser.greetingTwo();

