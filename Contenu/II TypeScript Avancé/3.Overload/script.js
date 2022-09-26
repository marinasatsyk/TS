"use strict";
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
console.log(combine("test1", "test2"));
console.log(combine(2, "test2"));
console.log(combine("test1", 5));
console.log(combine(5, 5));
