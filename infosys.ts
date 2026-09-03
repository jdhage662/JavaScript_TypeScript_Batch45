

class ATMImplementation implements ATMMachine, Student{
    name: string='Kiran';
    age: number = 30;
    AccountBalance: number = 2000;
    DepositorName: string=  "Jyoti"
    AccountNo: number=  4000;

    withdrawal(amount: number): void {
        console.log('Amount is withdraw from account '+ amount)
    }

    balanceCheck(AccountNo: number): number {
        //fetch based account no 
        this.AccountBalance = 2000+ 1000;
        return this.AccountBalance
    }

    depositeAmount(amount: number): number {
        return 3000
    }
}

const obj = new ATMImplementation();