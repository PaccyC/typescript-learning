"use strict";
class BankAccount {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new BankAccount(1, "Paccy", 10);
account.deposit(1000);
console.log(account);
console.log(account.balance);
//# sourceMappingURL=index.js.map