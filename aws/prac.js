function xyz() {
    let a = b = c = 0
    a++;
    return a;
}

// console.log(typeof xyz);

// function nested(arr) {
//     return arr.reduce((acc, curr) => {
//         return Array.isArray(curr) ? nested(acc.concat(curr)) : acc.concat(curr)
//     }, [])
// }
// const ar = [7, [1, 2], [[2, 3], [[5, 6]]]]

// function flatFun(arr) {
//     let input = [...arr]
//     let stk = []
//     while (input.length) {
//         const next = input.pop();
//         if (Array.isArray(next)) {
//             input.push(...next)
//         }
//         else {
//             stk.push(next)
//         }
//     }
//     return stk.reverse()
// }
// console.log("flatFun", flatFun(flatFun(ar)));
// function nested(arr) {
//     let stk = []

// }

// console.log("nested", nested(ar));


// let arr = [{ id: 1, name: 'javascript' }, { id: 2, name: "aode" }, { id: 2, name: "boode" }]

// let sortarr = arr.sort((a, b) => {
//     return a.name.toLowerCase() - b.name.toLowerCase()
// })



// let sortarr = arr.sort((a, b) => {
//     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
//     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
//     if (a.name.toLowerCase() == b.name.toLowerCase()) return 0


// })

// console.log("arr", sortarr);
let arr = [1, 2, 3, 4, 5]

// function move(arr, index, offset) {
//     let position = index + offset;

//     if (position >= arr.length || position < 0) {
//         return "invalid argument"
//     }
//     else {
//         let deleted = arr.splice(index, 1)[0]
//         arr.splice(position, 0, deleted)
//     }
//     return arr;

// }
// console.log("move:", move(arr, 1, 1));



// function Circle(radius) {
//     this.radius = radius

//     this.move = function () {
//         console.log('move')
//     }
// }

// Circle.prototype.draw = function () {
//     console.log('draw')
// }

// c = new Circle(5)
// // console.log(c)

// console.log(Object.keys(c))

// for (let val in c) console.log(val)

// function Circle(radius) {
//     this.radius = radius;
//     this.move = function () {
//         console.log("move",);
//     }

// }
// Circle.prototype.draw = function () {
//     console.log("draw",);
// }
// c = new Circle(5);
// console.log(Object.keys(c))
// for (let key in c)
//     console.log("key:", key, c.hasOwnProperty(key));


// let ar = [1, 2, 3, 4, 3, 6, 6, 6, 5, 4]
// let obj = {}

// for (let item of ar) {
//     if (obj[item])
//         obj[item]++
//     else
//         obj[item] = 1
// }
// rst = []
// for (let key in obj) {
//     if (obj[key] >= 2) {
//         rst.push(key)
//     }
// }
// console.log("rst", rst);


// async function testFun() {
//     for (let i = 0; i < 5; i++) {
//         console.log("sleeping",);
//         await sleepFunction(5);
//         console.log("resume",);

//     }
// }

// function sleepFunction(ms) {
//     return new Promise((resolve) => {
//         console.log("sleep function called",);
//         setTimeout(() => {
//             console.log("----",);
//             return resolve('res');

//         }, ms)
//     })
// }

// testFun()


// function a() {
//     setTimeout(() => {
//         console.log("time1",);
//     }, 0)

//     setImmediate(() => {
//         console.log("immediate",);
//     })
// }
// a()
// console.log("end",);

// const delay = (time) => new Promise(res => setTimeout(res, time));

// const showData = async () => {
//     const res = await callapi();
//     await delay(2000);
//     return res;
// }
// console.log("==", showData())


// const promise = () =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("done");
//         }, 1500);
//     });

// const makeRequest = async () => {
//     return await promise();
// };

// const test = async () => {
//     const result = await makeRequest();
//     console.log(result);
// };

// test();

// result
// after 1.5s, print out "done"

const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);