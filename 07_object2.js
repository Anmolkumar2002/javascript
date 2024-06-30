
const tinderUser = {}

tinderUser.id = "12345"
tinderUser.name = "Anmol"
tinderUser.isLoggedIn = false

//console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Anmol",
            lastname: "kumar"
        }
    }
}
//console.log(regularUser.fullname?.userFullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3);

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);


// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]
//console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "Js in hindi",
    price: "000",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor)
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);