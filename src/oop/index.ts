
class BankAccount {

  constructor  (public readonly id:number,
    public  owner:string,
    private _balance:number){}
  deposit (amount:number){
    if(amount <= 0){
        throw new Error ("Invalid amount");
    }
    this._balance +=amount;
  }
  get balance ():number{
    return this._balance;
  }
}

let account= new BankAccount(1,"Paccy",10);

account.deposit(1000);
console.log(account);
console.log(account.balance);



