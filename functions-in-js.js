// // passing variable no of arguments in function call
// function sum(...param) {
//     let total = 0;
//     return param.reduce((a, b) => a + b)
// }
// console.log("sum", sum(1, 2, 3));

// const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

// function flattenArray(data) {
//     // our initial value this time is a blank array
//     const initialValue = [];

//     // call reduce on our data
//     return data.reduce((total, value) => {
//         // if the value is an array then recursively call reduce
//         // if the value is not an array then just concat our value
//         return total.concat(Array.isArray(value) ? flattenArray(value) : value);
//     }, initialValue);
// }

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag)
        }.bind(this))
    }
}
// above will work as same below. using bind method
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(this.title, tag)
//         },this)
//     }
// }

// above will work as same below. using arrow function
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach((tag) => {
//             console.log(this.title, tag)
//         })
//     }
// }

video.showTags()