class KeyValuePair <T>{
    constructor(public key :T, public value :string){}
}

let keyValue= new KeyValuePair <number>(1,"a")


// Type mapping

interface Product{
    name:string;
    price:number;
}
type ReadOnlyProperty={
readonly [Property in keyof Product]:Product[Property]
}