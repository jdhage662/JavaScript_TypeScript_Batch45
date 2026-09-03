//Abstraction : hiding the compicated details and only showing what is necessary

// which is not applicable in javascript 

//abstrct 

abstract class Animal{

    // abstract name: string;
    private age: number = 30;
    abstract makeSound(): void;

    move(){
        console.log('Animal is moving')
    }

    marrige(): void{
        console.log('Marry to xyz girl/boy')
    }
}


class Dog extends Animal{
    name: string = 'xyz';
    
    makeSound(): void {
        console.log('Woof')
    } 
    
    marrige(): void{
        console.log('I will marry to abc')
    }
    
}

const obj6 = new Dog()
obj6.marrige();




class Cat extends Animal{
    makeSound(): void {
        console.log('Meow')
    }
}

class Cow extends Animal{
    makeSound(): void {
        console.log('Moo')
    }   
}

const obj4 = new Dog()