let myObj = {
    name: 'JavaScript',
    compiled: false
};

console.log('Before:', myObj); // {name: 'JavaScript', compiled: false}

const newVal = 'This is another value for our Object.';

myObj = {newVal};
console.log('After:', myObj);

// ***

const name = 'JavaScript';
const compiled = false;

// These two approaches are equivalent! Property Shorthand
// const newObj = {name: name, compiled: compiled};
const newObj = {name, compiled}; // If your var name and prop name are the same...
// Just use the var names and it fills in the key/value pairs.
console.log('newObj (Property Shorthand!):', newObj);
