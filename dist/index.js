"use strict";
let age = 30;
if (age < 50)
    age += 10;
console.log(age);
let user = [1, "Paccy"];
let mySize = 2;
console.log(mySize);
function calcTax(income, taxYear = 2024) {
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}
console.log(calcTax(40000));
//# sourceMappingURL=index.js.map