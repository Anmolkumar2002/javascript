
//Promise ---- 1
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});
promiseOne.then(function(){
    console.log("promise consumed");
});

// Alter Promise - 2
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 complete");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


// Promise --- 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Anmol", email : "anmolkumar@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user);
})


//Promise --- 4
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Anmol", pass : "anmolkumar@#$"})
        } else{
            reject('Error: Something went wrong')
        }
    }, 1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("The promise is either resolved or rejected");
})



// Promise --- 5
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "JavaScript", pass: "Akm2002"})
        } else{
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


//fetch()----
fetch('https://api.github.com/users/Anmolkumar2002')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})