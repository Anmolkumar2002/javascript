// const tinder = new Object(); //  singelton Object

const tinderUser = {}; // non singelton

tinderUser.id = "123";
tinderUser.name = "Anmol";
tinderUser.isloggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "ak@gmail.com",
    fullname : {
        userFullname : {
            firstname : "Anmol",
            lastname : "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};
const obj3 = {5 : "a", 6 : "b"};

const obj4 = {obj1, obj2, obj3}
const obj5 = Object.assign({}, obj1, obj2, obj3);
const obj6 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);

const users = [
    {
        id : 1,
        email : "Ak@gmail.com"
    },
    {
        id : 1,
        email : "Ak@gmail.com"
    },
    {
        id : 1,
        email : "Ak@gmail.com"
    },
]
// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isloggedIn'));

const course = {
    courseName : "Js in Hindi",
    price : "999",
    courseInstructor : "Hitesh"
}
// const{courseInstructor} = course;
// console.log(courseInstructor);

const{courseInstructor : instructor} = course;
console.log(instructor);

