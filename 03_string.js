const name = "Anmol"
const repocount = 50

// console.log(name + repocount + "vall");

// console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('Anmolkumar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anothernewString = gameName.slice(-8, 4)
// console.log(anothernewString);

// const newStringone = "   anmol    "
// console.log(newStringone);
// console.log(newStringone.trim());

const url = "https://anmol.com/anmol%20kumar"
console.log(url.replace('%20', '-'));

console.log(url.includes('anmol'));
console.log(url.includes('maurya'));

console.log(gameName.split('-'));