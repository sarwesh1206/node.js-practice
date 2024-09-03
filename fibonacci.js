// const arr = [0, 1]
// function fibo(max) {
//     for (let i = 2; i < max; i++) {
//         arr[i] = arr[i - 1] + arr[i - 2];

//     }
//     for (i of arr)
//         console.log(i);
// }
// fibo(9);
// const duplicateArray = [1, 2, 2, 3, 3, 3, 4];

// const newArr = duplicateArray.filter((item, position) => {
//     console.log("item,position", item, position);
//     return duplicateArray.indexOf(item) != position;
// })

// console.log("newArr:", newArr);

// const arr = [1, 2, 3, 4];

// const sum = arr.reduce((total, current) => {
//     return current + total;
// }, 0)

// console.log("sum:", sum);


// const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
//     array.splice(index, 1); // 2nd parameter means remove one item only
// }

// // array = [2, 9]
// console.log(array);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits.slice(1, 3);

// console.log("myBest", myBest);
// let arr = ['foo', 'bar', 10, 'qux'];
// arr.splice(2, 1, 'tmp');
// console.log("arr", arr);

//  tier in bucket

hash = data.reduce((p, c) => (p[c.color] ? p[c.color].push(c) : p[c.color] = [c], p), {}),
    newData = Object.keys(hash).map(k => ({ color: k, car: hash[k] }));

const hash = data.reduce((p, c) => {
    (p[c.color] ? p[c.color].push(c) : p)
}) 