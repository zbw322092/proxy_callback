'use strict';

const proxyCb = require('../index');

let foo = (age, cb) => {
    if (typeof age === "function") {
        cb = age;
    }

		cb = proxyCb(cb);

    if (typeof age !== "number") {
        return cb(new Error("Invalid age."));
    }

    setTimeout(() => {
        cb(null, `The provided age is ${age}`);
    }, 100);

		return cb._;
}

foo(err => console.log(err));


