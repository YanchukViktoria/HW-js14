const users = [
    { name: "John", eyeColor: "blue", gender: "male", isActive: true, email: "john@example.com", age: 25 },
    { name: "Jane", eyeColor: "brown", gender: "female", isActive: false, email: "jane@example.com", age: 30 },
    { name: "Sam", eyeColor: "green", gender: "male", isActive: true, email: "sam@example.com", age: 40 },
    { name: "Alice", eyeColor: "blue", gender: "female", isActive: false, email: "alice@example.com", age: 35 }
];

/* 1.1 */

function names() {
    console.log(getNames(users));
};

function getNames(obj) {
    let namesArr = [];
    obj.map((el) => namesArr.push(el.name));
    return namesArr;
};

names();

/* 1.2 */

function eyeColor() {
    console.log(geteyeColor(users));
};

function geteyeColor(obj) {
    let eyesArr = [];
    obj.map((el) => eyesArr.push(el.eyeColor));
    return eyesArr;
};

eyeColor();

/* 1.3 */

function female() {
    console.log(getFemale(users));
};

function getFemale(obj) {
    let womans = [];
    obj.map((el) => {
        if (el.gender == "female") {
            womans.push(el.name)
        }
        return
    });
    return womans;
};

female();

/* 1.4 */

function notActive() {
    console.log(getNotActive(users));
};

function getNotActive(obj) {
    let isntActive = [];
    obj.map((el) => {
        if (el.isActive == false) {
            isntActive.push(el.name)
        }
        return
    });
    return isntActive;
};

notActive();

/* 1.5 */

console.log(users[0].email);

/* 1.6 */

function Age() {
    console.log(getAge(users));
};

let min = 20;
let max = 30;

function getAge(obj) {
    let middleAge = [];
    obj.map((el) => {
        if (el.age <max && el.age >min) {
            middleAge.push(el.name)
        }
        return
    });
    return middleAge;
};

Age();