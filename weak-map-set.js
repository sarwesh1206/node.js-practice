const ws = new WeakSet();
let john = { nam: 'john' };
let sachin = { nam: 'sachin' };

ws.add(john);
// console.log("ws", ws);
john = null;
// console.log("john", ws.has(john));



const arr = [];
obj2 = { "name": "sachin" }
arr[0] = obj2;
obj2 = null;
// console.log("obj[0]", arr[0]);

const wmp = new WeakMap()
let wobj1 = { name: "wobj1" }
let wobj2 = { name: "wobj2" }
wmp.set(wobj1, "test");
wobj1 = null;
console.log("wmp", wmp.get(wobj1));

