

type ComponentOptions ={
    selector: string
}

function Pipe (constructor: Function){
    console.log("Pipe decorator called");
    constructor.prototype.pipe=true;
    
}

// Decorator factory
function Component (options:ComponentOptions){
 return (constructor :Function)=>{
        console.log("Component decorator called");
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.options=options;
        constructor.prototype.insertInDOM =()=>{
            console.log("Inserting the element into DOM");
            
        }
    
    }
}

@Component({selector :"div"})
@Pipe
class ProfileComponent{

}