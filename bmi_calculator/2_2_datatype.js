"use strict";  // Treat all js code as newer version    

//  alert(2 + 2);  -> We are using nodejs, not browser

let name = "Anmol";
let age = 22;
let isloggedIn = false;
let state = null;

//  number => 2 to the power 53
//  bigint
//  string => ""
//  boolean => true/false
//  null => it is a standalone value
//  undefined

console.table([typeof(name), typeof(age), typeof(isloggedIn), typeof(state), typeof(undefined)]);
