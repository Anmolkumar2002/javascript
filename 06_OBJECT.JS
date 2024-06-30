





const JsUser = {
    name: "Anmol",
    "full name": "Anmol kumar",
    age: 22,
    email: "anm0dhfkhfk@gmail"
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// //console.log(JsUser.full name)
// console.log(JsUser["full name"])

JsUser.email = "anmolkumar@gmail.com"
// console.log(JsUser.email)
// Object.freeze(JsUser)
JsUser.email = "anmol@gmail.com"
//console.log(JsUser.email)


JsUser.greeting = function(){
    console.log("Hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());