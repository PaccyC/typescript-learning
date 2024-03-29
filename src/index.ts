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



// Type aliases

type Employee={

  readonly id:number,
  name?:string,
  retire : (date: Date) =>void
}

type User ={
  name:string,
  age:number,
  occupation?:string
}

// Objects

let employee:Employee={
  id:1,
  name:"Paccy",

  retire :(date: Date) =>{
    console.log(date);
    
  }
}

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

// Optional chaining

type Customer={
 birthDay :Date
}


function getCustomer(id: number):Customer | null{
    return id  === 0 ? null :{birthDay : new Date()}
    }
let customer = getCustomer (1);

    // Optional property access operator (?.)
console.log(customer?.birthDay);



    