class Person{
    constructor ( public firstName:string, public lastName:string){}

    get fullName(){
        return this.firstName + ' ' +this.lastName;

    }
    walk(){
        console.log("Walking");
        
    }
}

class Student extends Person{
 constructor(public studentId :number,fistName:string,lastName:string){
    super(fistName,lastName)

 }


 takeTest(){

    console.log("Taking a test...");
    
 }
 
}

let student= new Student(1,"Paccy","Abayisenga")
console.log(student);

// Method overriding

class Teacher extends Person {
   override get fullName(){
        return "Professor "+ super.fullName;

    }
}


let teacher= new Teacher("Kazora","John");
console.log(teacher.fullName);

printNames ([
    new Student(1,"Paccy","Abayisenga"),
    new Teacher("Damascene","Habanabashaka")
])
// Polymorphism

function printNames(people: Person[]){
    for (let person of people){
   console.log(person.fullName);
   
    }
}