// datatypes => 1.Primitive,   2.Non-primitive
// primitive => String, Number, Boolean, Null, undefined, Symbol, Bigint
// Non-primitive => object , array, function

// learn about String, Number, Null, undefined and Bigint in previous lecture

// ##Symbol:- It create unique value
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

// ##Array:-
const heroes = ["Shaktimaan", "Nagraj", "doga"];

// ##Object:-
let myObject = {
    name :"Anmol",
    age : 22
}

// ##Function:-
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof id);
console.log(typeof heroes);
console.log(typeof myObject);
console.log(typeof myFunction);
