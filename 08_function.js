// console.log("A");
// console.log("N");
// console.log("M");
// console.log("O");
// console.log("L");

function myName(){
    console.log("A");
    console.log("N");
    console.log("M");
    console.log("O");
    console.log("L");
}
// myName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// //addTwoNumbers(3, 4); 
// const res = addTwoNumbers(3, 5);
// console.log("Result:" , res);

function addTwoNumbers(number1, number2){
    // let res = number1 + number2;
    // return res;
    return number1 + number2;
}
const result = addTwoNumbers(3, 5);
//console.log("Result:" , result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter your user name");
        return;
    }
    else{
        return `${username} just logged in`;
    }
    
}
// console.log(loginUserMessage("Anmol"));
// console.log(loginUserMessage());

function calculatePrice(val1, val2, ...num1){
    return num1;
}
//console.log(calculatePrice(200, 300, 400, 3000, 500));

const user = {
    username: "Anmol",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "avi",
    price: 399
})