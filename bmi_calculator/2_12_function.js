function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}
// addTwoNumber(2, 3);
// addTwoNumber("2", 3);
// addTwoNumber(2, "3");
// addTwoNumber(2, "a");
// addTwoNumber(2, null);

function addTwoNumber(number1, number2){
    console.log(number1 + number2);
}
// const result = addTwoNumber(3, 5);
// console.log(result);

function addTwoNumber(number1, number2){
    let result = number1 + number2;
    console.log(result);
    return result;
}
// const result = addTwoNumber(3, 5);
// console.log(result);

function loginUserMessage(username){
    if(username === undefined) {
        console.log("Please Enter a username");
        // return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("Anmol"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


const user = {
    username : "Anmol",
    prices : 999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username : "sam",
    price : 399
})