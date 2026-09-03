//Infosys in a service based company
// Barclays is the client who wanted to implement product from Infosys for that purpose they have provided what they want
//Infosys is resposible for implementing what barclays want

// Interface: its contract for structuring the an object

//ATM: -- Withdrawal, balanceCheck , deposite
//Barclays 
interface ATMMachine{
    AccountBalance: number;
    DepositorName: string;
    AccountNo: number;

    withdrawal(amount:number): void;
    balanceCheck(AccountNo: number): number;
    depositeAmount(amount:number): number;
}


interface Student{
     name: string;
     age:number;
}

