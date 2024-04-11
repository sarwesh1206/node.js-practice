
// console.log('start');

// const promise1 = new Promise((resolve, reject) => {
//     // console.log(1)
//     resolve(2)
//     // console.log(3)
//     resolve(4);
// })

// promise1.then(res => {
//     console.log(res)
// })

// console.log('end');



// const promise2 = new Promise((resolve, reject) => {
//     resolve('res')
// })

// const promise3 = new Promise((resolve, reject) => {
//     reject('rej')
// })

// promise2.then(res => {
//     console.log("res1", res);
// })
//     .catch(err => {
//         console.log("err1:", err);
//     })

// promise3.then(res => {
//     console.log("res2", res);
// })
//     .catch((err => {
//         console.log("err2", err);
//     }))




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


// const name = {
//     firstName: "Sachin",
//     lastName: "Sarwesh",
// }

// let printFullName = function (homeTown, state) {
//     console.log(this.firstName + " " + this.lastName + " " + "from" + " " + homeTown + " " + state);
// }
// const name2 = {
//     firstName: "Sachin",
//     lastName: "Kumar",

// }
// printFullName.call(name, "siwan", "bihar");
// printFullName.apply(name, ["siwan", "bihar"]);

// the only difference between call and apply is passing the arguments
// let printName = printFullName.bind(name, "Siwan", "bihar");
// printName()


const nm1 = {
    fname: "sachin",
    lname: "sarwesh"
}

printname = function (home) {
    console.log(this.fname);
    console.log(this.lname);
    console.log(home);


}
printname.apply(nm1, ['sv']);