const name = "Anmol";
const repoCount = 20;
// console.log(name + repoCount + "Val");
// console.log(`Hello my name is ${name} and repocount is ${repoCount}`);

const gameName = new String('Anmol kumar');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4);
// console.log(newString);
const anotherString = gameName.slice(-8, 5);
// console.log(anotherString);

const newStringOne = "   Anmol    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://anmol.com/ak%20maurya";
console.log(url.replace('%20', '-'));
console.log(url.includes('anmol'));
console.log(gameName.split('m'));
