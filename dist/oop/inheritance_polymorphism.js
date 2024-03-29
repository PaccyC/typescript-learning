"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, fistName, lastName) {
        super(fistName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        console.log("Taking a test...");
    }
}
let student = new Student(1, "Paccy", "Abayisenga");
console.log(student);
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("Kazora", "John");
console.log(teacher.fullName);
printNames([
    new Student(1, "Paccy", "Abayisenga"),
    new Teacher("Damascene", "Habanabashaka")
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=inheritance_polymorphism.js.map