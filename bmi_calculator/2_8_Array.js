const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["Shaktimaan", "Naagraj"];
// console.log(myArray[3]);
// console.log(myHeros[1]);


const myArray1 = new Array(1, 2, 3, 4);
// console.log(myArray1[3]);


// ##  Array methos : -
//  push
myArray.push(6);
myArray.push(7);
// pop
myArray.pop();
// unshift
myArray.unshift(10);
// shift
myArray.shift();
// console.log(myArray.includes(4));
// console.log(myArray.indexOf(4));

const newArary = myArray.join();

// console.log(myArray);
// console.log(newArary);
// console.log(typeof(newArary));

// ##slice and splice
console.log("A ", myArray);

const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3);
console.log(myn2);
console.log("C ", myArray);



