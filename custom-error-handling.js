// // class based experience
// class Myerror extends Error {
//     constructor(msg) {
//         super(msg);
//         // Error.captureStackTrace(this,Myerror)
//     }
// }

// const err = new Myerror('cust error');
// console.log(err)

// // function based implementation
// function CustomError(msg) {
//     this.message = msg;
//     this.name = "CustomError";
//     Error.captureStackTrace(this, CustomError);
// }
// CustomError.prototype = Error.prototype
// const custError = new CustomError('log error')
// console.log(ercustErrorr)


// // Try catch construct is used to hndle error in synchronous operation
// // In  below function exception is not handle correctly. as It is an asynchronous operation.
// // https://blog.appsignal.com/2022/11/16/nodejs-error-handling-tips-and-tricks.html
// function doSomeThingAsync() {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("some error")), 5000)
//     );
// }

// try {
//     doSomeThingAsync();
// } catch (err) {
//     console.log("ERROR: ", err);
// }

// // Correct way of handling errors
// function doSomeThingAsync() {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("some error")), 5000)
//     );
// }

// doSomeThingAsync()
//     .then((resolvedValue) => {
//         // resolved the do something
//     })
//     .catch((err) => {
//         // an exception is raised
//         console.error("ERROR: ", err.message);
//     });


// function doSomeThingAsync() {
//     return new Promise((resolve, reject) =>
//         setTimeout(() => reject(new Error("some error")), 5000)
//     );
// }

// async function run() {
//     try {
//         await doSomeThingAsync();
//     } catch (err) {
//         console.log("ERROR: ", err);
//     }
// }

// run();



class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        // this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }

    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;

    try {
        user = JSON.parse(json);
    }
    catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error------------------------------------", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    }
    catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        } else {
            throw err;
        }
    }

}

try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e);
        // Original error: SyntaxError: Unexpected token b in JSON at position 1
        // console.log("Original error:------------------- " + e);
    } else {
        throw e;
    }
}