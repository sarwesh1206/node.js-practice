// Set variable to current date and time
const now = new Date();

// View the output
// console.log("now", now.getTime());

// console.log("diff", now.getTime());
// getUTCMilliseconds()
// console.log("now.getTime()", now.getTime());
// Assign the timestamp 0 to a new variable
const epochTime = new Date(now.getTime());
// console.log("epochTime", epochTime);
const epochUtcTime = new Date(now.getTime());
// console.log("epochUtcTime", epochUtcTime);
const epochDateTime = now.toISOString();
console.log("======", new Date('2022-12-28'));


// Math.floor(new Date().getTime()/1000.0) The getTime method returns the time in milliseconds.



// Timestamp method
new Date(-6106015800000);

// Date string method
new Date("July 4 1776 12:30");

// Date and time method
new Date(1776, 6, 4, 12, 30, 0, 0);


console.log("date", new Date('2022-02-02T15:52:00'));