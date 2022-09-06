
/* Create an Object */
const myObj = {
    name: "JavaScript",
    compiled: false
};

/* Destructuring: Assign a var with a matching property name! */
const {compiled} = myObj;
const {name} = myObj;

console.log('myObj:', myObj);
console.log('compiled:', compiled);
console.log('name:', name);
