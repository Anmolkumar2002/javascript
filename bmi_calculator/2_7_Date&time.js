let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

let myCreateDate = new Date(2024, 11, 11);
let myCreateDate1 = new Date(2024, 11, 11, 7, 1);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate1.toLocaleString());
let myCreateDate2 = new Date("11-12-2024");
// console.log(myCreateDate2.toLocaleString());

let newDate = new Date();
// console.log((newDate));
// console.log((newDate.getFullYear()));
// console.log((newDate.getDate()));
// console.log((newDate.getDay()));
// console.log((newDate.getMonth()));

newDate.toLocaleString('default', {
    weekday : "long"
})
