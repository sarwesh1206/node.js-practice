const person = {
    name: "Mosh",
    age: 30
}

for (let key in person) // key will be the attribute
    console.log(key, person[key]);
// for in loop iterate through all the properties of objects even method.

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

//for of loop
for (let color of colors)
    console.log(color);
// For of loop is not uded in objects because objects are not iterable.

for (let key of Object.keys(person))
    console.log(key);

for (let entry of Object.entries(person))
    console.log(entry);
if ('radius' in person)
    console.log("yes",);


// for in loop iterates over all the properties and methods of object: prototype + ownPropety

// =======arguments Object

// arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function.
function sum() {
    let sum = 0;
    for (let val of arguments) {
        sum = sum + val
    }
    return sum;

}
console.log(sum(1, 2, 3))