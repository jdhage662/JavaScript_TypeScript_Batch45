//Polymorphism:

//Poly -- Many , morphism -- form

// one thing having multiple forms 
// one method -- multiple things

// Run time polymorphism (Method Overriding)

//Run time polymorphism (Method overrriding)

//You have parent class --- someMethod with implementation

//Chile class want to use parent class method but wanted to change the implementation

//Compile time polymorphism (Method overloading) 
// you have same method name but different number of argument or different types of argument

class Polymorphism{


    addition(a:number, b:number): number;
    addition(a:string, b: string): string;
    addition(a:number, b:number, c: number): number;
    addition(a:any, b:any, c?: number){
        let result = a+b;
        return result;
    }
}

const methodOver = new Polymorphism();

const result = methodOver.addition( 10, 20)

console.log(result)

console.log(methodOver.addition(20,30,40))