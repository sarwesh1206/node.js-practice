
const duplicateArray = [1, 2, 2, 3, 3, 3, 4];

let obj = {}
let ct = 1;
duplicateArray.map((item) => {
    // console.log(item);
    // console.log(obj);
    console.log(obj[item]);
    if (obj[item]) {
        // console.log('yes',obj[item] );
        ct++;
        // obj[item] = ct;
        obj[item] = ++obj[item];

    }
    else {
        ct = 1;
        // console.log('else',obj[item]);
        // obj[item] = ct;
        obj[item] = 1;


    }
})
console.log(obj);
let ele = []
for (let key in obj) {
    if (obj[key] === 1) {
        console.log(key, obj[key]);
        ele.push(key)
    }

}