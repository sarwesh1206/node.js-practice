// const name = {
//     firstName: "Sachin",
//     lastName: "Sarwesh",
//     printFullName: function () {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// const name2 = {
//     firstName: "Sachin",
//     lastName: "Kumar",

// }
// name.printFullName.call(name2);
// It is also called function borrowing
////////////////////////////////////////////////


const name = {
    firstName: "Sachin",
    lastName: "Sarwesh",
}

let printFullName = function (homeTown, state) {
    console.log(this.firstName + " " + this.lastName + " " + "from" + " " + homeTown + " " + state);
}
const name2 = {
    firstName: "Sachin",
    lastName: "Kumar",

}
// printFullName.call(name, "siwan", "bihar");
// printFullName.apply(name, ["siwan", "bihar"]);

// the only difference between call and apply is passing the arguments
let printName = printFullName.bind(name, "Siwan", "bihar");
