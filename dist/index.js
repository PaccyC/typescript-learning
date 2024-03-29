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
let employee = {
    id: 1,
    name: "Paccy",
    retire: (date) => {
        console.log(date);
    }
};
let users = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller',
        age: 28
    }
];
console.log(employee);
function getCustomer(id) {
    return id === 0 ? null : { birthDay: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthDay);
//# sourceMappingURL=index.js.map