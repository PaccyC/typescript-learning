
function Capitalize (target:any,methodName:string,descriptor:PropertyDescriptor){
    const original= descriptor.get
    descriptor.get =()=>{
      const result=original!.call(this)
      return (typeof result ==='string')? result.toUpperCase():result;
    }
}


class Doctor{
    constructor(public firstName:string,public lastName:string){}
  @Capitalize
    get fullName(){
     return`${this.firstName} ${this.lastName}`;
        
    }
}