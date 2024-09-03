/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     let stk = []
//     console.log("s:", s);
//     for (let st of s) {
//         if (st === 'c') {
//             if (stk.length >= 2 && stk[stk.length - 1] === 'b' && stk[stk.length - 2] === 'a') {
//                 stk.pop()
//                 stk.pop()
//             } else {
//                 return false
//             }

//         } else {
//             stk.push(st)
//         }
//     }

//     return stk.length === 0

// };


// var isValid = function (s) {
//     while (s.length) {
//       if (s.indexOf("abc") === -1) break;
//       s = s.replaceAll("abc", "");
//     }
//     return !s.length;
//   };

// var isValid = function (s) {
//     while (s.length) {
//         if (s.indexOf("abc") === -1) break;
//         s = s.replaceAll("abc", "");
//     }
//     return !s.length;
// };
// console.log(isValid('abcA'))

// function validStr(str) {

//     const stk = [];
//     for (let st of str) {
//         if (st === 'c') {
//             if (stk.length >= 2 && stk[stk.length - 1] == 'b' && stk[stk.length - 2] == 'a') {
//                 stk.pop();
//                 stk.pop();
//             }
//         }
//         else {
//             stk.push(st)
//         }
//     }
//     return stk.length === 0
// }

// abcabc

// console.log(validStr('aabcbc'))



// What is the difference between monolithic architecture and microservices architecture ?
// ➡ How do you handle errors and exceptions in your code ?
// ➡ What is the difference between synchronous and asynchronous programming ?
// ➡ How do you optimize the performance of your code ?
// ➡ What is the difference between a stack and a queue ?

// Backend frameworks

// ➡ What is the difference between Node.js and Express.js ?
// ➡ How do you handle dependencies and injections in a backend framework ?
// ➡ What is the difference between a monolithic and a modular backend architecture ?

//     Databases

// ➡ What is the difference between a relational database and a NoSQL database ?
// ➡ How do you optimize the performance of a database query ?
// ➡ What is the difference between a join and a subquery ?
// ➡ How do you handle database transactions and locking ?
// ➡ What is the difference between a primary key and a foreign key ?

//     API design

// ➡ What is the difference between REST and GraphQL ?
// ➡ How do you design a scalable and secure API ?
// ➡ What is the difference between a GET and a POST request ?
// ➡ How do you handle API versioning and backwards compatibility ?
// ➡ What is the difference between a query parameter and a body parameter ?

//     Security

// ➡ What is the difference between authentication and authorization ?
// ➡ How do you handle sensitive data and encryption ?
// ➡ What is the difference between a vulnerability and a threat ?
// ➡ How do you implement rate limiting and IP blocking ?
// ➡ What is the difference between a secure token and a session ID ?

//     Cloud computing

// ➡ What is the difference between a cloud provider and a cloud platform ?
// ➡ How do you deploy and manage a cloud - based application ?
// ➡ What is the difference between a virtual machine and a container ?
// ➡ How do you handle scalability and load balancing in a cloud environment ?
// ➡ What is the difference between a cloud function and a serverless architecture ?

//     DevOps

// ➡ What is the difference between continuous integration and continuous deployment ?
// ➡ How do you implement automated testing and CI / CD pipelines ?
// ➡ What is the difference between a staging environment and a production environment ?
// ➡ How do you handle monitoring and logging in a production environment ?
// ➡ What is the difference between a rollback and a deployment ?


// let str = 'ranjesh singh'
// upper case the first letter of string
// function upper(str) {
//     const queue = [];
//     const result = [];

//     for (let st of str) {
//         console.log("st:", st);
//         if (st === ' ') {
//             for (let i = 0; i < queue.length; i++) {
//                 if (i == 0)
//                     result.push(queue[i].toUpperCase())
//                 else {
//                     result.push(queue[i])
//                 }
//             }
//             result.push(' ');
//             queue.length = 0;
//         }
//         else {
//             queue.push(st);
//         }
//     }
//     if (queue.length !== 0) {
//         for (let i = 0; i < queue.length; i++) {
//             if (i == 0)
//                 result.push(queue[i].toUpperCase())
//             else {
//                 result.push(queue[i])
//             }
//         }
//     }

//     return result.join("");

// }

// console.log("upper: ", upper('ranjesh singh '));



let inputStr = " THAT AND THIS SAME ";
let outputStr = 'SAME THIS AND THAT';


// function reverseStr(str) {
//     let stk = []
//     let rst = []

//     let input = [...str];
//     console.log("input", input);

//     for (let i = input.length - 1; i >= 0; i--) {
//         if (input[i] == ' ') {
//             console.log("stk", stk);
//             for (let i = stk.length - 1; i >= 0; i--) {
//                 rst.push(stk.pop())
//             }
//             rst.push(' ');
//             stk.length = 0;
//         }
//         else {
//             stk.push(input[i])
//         }

//     }
//     if (stk.length !== 0) {
//         for (let i = stk.length - 1; i >= 0; i--) {
//             rst.push(stk.pop())
//         }
//     }

//     return rst.join('');
// }

// console.log("reverseStr: ", reverseStr(inputStr));


// var isValid = function (s) {
//     const stack = [];
//     const mapping = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     for (const c of s) {
//         if (Object.values(mapping).includes(c)) {
//             stack.push(c);
//         } else if (mapping.hasOwnProperty(c)) {
//             if (!stack.length || mapping[c] !== stack.pop()) {
//                 return false;
//             }
//         }
//     }

//     return stack.length === 0;
// };

// function isValidParenthesis(str) {
//     let stk = []
//     const mapping = {
//         ")": "(",
//         "}": "{",
//         "]": "["
//     }

//     for (st of str) {
//         console.log("stk:", stk);

//         if (st === ')' || st === '}' || st === ']') {

//             if (mapping[st] !== stk.pop()) {
//                 return false;
//             }
//         } else {
//             stk.push(st)
//         }
//     }


//     if (stk.length !== 0)
//         return false;
//     else
//         return true;
// }

// console.log("isValidParenthesis", isValidParenthesis('[]'));


// Input: s = "abbaca"
// Output: "ca"
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

// function removeAdjacentDuplicate(str) {

//     const stk = [];

//     for (let st of str) {

//         st == stk[stk.length - 1] ? stk.pop() : stk.push(st)
//     }
//     return stk.join('');
// }

// console.log("removeAdjacentDuplicate", removeAdjacentDuplicate('abbaca'));


// const arr = [7, [1, 2], [[2, 3], [5, 6]]]

// function flat(arr) {

//     return arr.reduce((acc, curr) => {
//         return Array.isArray(curr) ? acc.concat(flat(curr)) : acc.concat(curr)

//     }, [])
// }

// function flatten(input) {
//     const stack = [...input];
//     const res = [];

//     while (stack.length) {
//         // pop value from stack
//         const next = stack.pop();
//         if (Array.isArray(next)) {
//             // push back array items, won't modify the original input
//             stack.push(...next);
//             console.log("stack:", stack);
//         } else {
//             console.log("res:", res);
//             res.push(next);
//         }
//     }
//     // reverse to restore input order
//     return res.reverse();
// }
// // const arr = [1, 2, [[[3, 4]]]];
const arr = [[1], [2, [4, 5, [6, 7]]]]
// // const arr = [1, 2]
// // flatten(arr);
// // [1, 2, 3, 4, 5, 6]
// console.log("flat", flatten(arr));


// var oldArray = [[1], [2, [3]], [4]];
// var newArray = Array.prototype.concat.apply([], oldArray);
// console.log(newArray); // [ 1, 2, 3, 4 ]

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


//input
var str = "hey this is nodejs program";
// output - yeh siht si sjedon margorp;
console.log(reversWord(str))

function reversWord(str) {
    let stk = [];
    let res = [];

    for (st of str) {
        if (st == ' ') {
            while (stk.length) {
                res.push(stk.pop());
            }

            res.push(' ')
        }
        else {
            stk.push(st);

        }
    }
    // For last element
    if (stk.length) {
        while (stk.length) {
            res.push(stk.pop());
        }
    }
    return res.join('')
}
console.log(0 || 1); // 1
console.log(1 || 2); // 1
console.log(0 && 1); //0
console.log(1 && 2); //2

function sum(a) {
    if (arguments[0] && arguments[1]) {
        return arguments[0] + arguments[1]
    }
    else {
        return function (b) {
            return a + b
        }
    }
}



function sum() {
    var a = b = 50;
}
sum();

console.log(a, b); // a & b are not defined
