// let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// let flatArray = nestedArray.reduce((accumulator, value) => accumulator.concat(value), []);
// console.log(flatArray); // [1, 2, 3, 4, [5, 6], 7]

// function flattenArray(array) {
//     return array.reduce((accumulator, value) =>
//         Array.isArray(value) ? accumulator.concat(flattenArray(value)) : accumulator.concat(value), []);
// }

let nestedArray = [1, [2, 3], [4, [5, 6]], 7];
// // let flatArray = flattenArray(nestedArray);
// // console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7] 
// // let sum = 0;
// // for (let value of flatArray) {
// //     console.log("value", value);
// //     sum = sum + value

// // }

// // console.log("sum", sum)

// function flatArray(arr) {
//     return arr.reduce((acc, curr) => {
//         res = Array.isArray(curr) ? acc.concat(flatArray(curr)) : acc.concat(curr)
//         return res;
//     }, [])
// }

// let arr = flatArray(nestedArray);
// console.log(arr); // [1, 2, 3, 4, 5, 6, 7]


function flatArray1(arr) {

    return arr.reduce((acc, curr) => {
        res = Array.isArray(curr) ? acc.concat(flatArray1(curr)) : acc.concat(curr)
        return res;
    }, [])
}


let arr = flatArray1(nestedArray);
console.log("arr:", arr);


// stack method

function flattten(arr) {

    const stk = [...arr]
    const rst = [];

    while (stk.length > 0) {
        let next = stk.pop()

        if (Array.isArray(next)) {
            stk.push(...next)
        }
        else {
            rst.push(next)
        }
    }

    return rst.reverse(rst)
}

console.log("flattten", flattten(arr));