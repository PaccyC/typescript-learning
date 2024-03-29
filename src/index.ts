let age: number = 30;
if (age < 50)
  age +=10;

console.log(age);

// Tuples

let user :[number,string] = [1, "Paccy"];


// Enums
const enum Size {
  Small=1,
  Medium,
  Large
}
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions

function calcTax(income: number,taxYear =2024):number {

  if(taxYear <2024)
   return income * 1.2;

  return income *1.3;
}
console.log(calcTax(40_000)
);
