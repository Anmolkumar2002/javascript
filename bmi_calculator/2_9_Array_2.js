const marvel_Heros = ["Thor", "Ironman", "Spiderman"];
const dc_Heros = ["Superman", "Aquaman", "Flash"];

// marvel_Heros.push(dc_Heros);
// console.log(marvel_Heros);  //it makes array of array so this type of merge is not good
// console.log(marvel_Heros[3][1]);

const allHeros = marvel_Heros.concat(dc_Heros); // This method is good for concat
// console.log(allHeros);

const all_Heros = [...marvel_Heros, ...dc_Heros];  // this is spread operator method it is also concat two or more array at a time
// console.log(all_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// console.log(another_array);
// console.log(another_array.flat(Infinity));

console.log(Array.isArray("Anmol"));
console.log(Array.from("Anmol"));

