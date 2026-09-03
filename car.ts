// Object : 
//State: attribute
//Behaviour : functions/ actions
// Car : template, properties and methods ,
// BMW m Audi , Tesla ,

//class: is a template or blueprint , used to create and object. help us to organize the object 

//why class: create multiple object with similar behaviour 
//Code Reusability 

//Object 
//How to import and export the class data 

//OOPS
//Inheritance , Encapsulation , Abstraction, Polymorphism 
// class ,object , constructor, export and import , access modifiers

//Access modifiers :
//Access card -- accessing the building -- Block 1 , Block 2 , Block 3
//Sahil  -- public access
//Shradha -- Block 1 , no access Block 2 and Block3

//Access modifiers : visibility or accessibility of your properties and methods 

//1. Public , Private and Protected  only applicable in case of inheritance 
 export default class Car{
    //variable
    private carName: string ;
    public readonly carColour: string;
    protected brand :string = 'BMW'
    private accountBalance:number;
    public x:number = 20;
    public y:number = 30;

    //constructor
    constructor(carName:string, carColour:string){
        this.carName = carName;
        this.carColour = carColour
        this.accountBalance=10;
    }

    addition(){
        const result = this.x + this.y
        console.log(result)
    }
    //functions
     accelarator(){
        
        console.log('To speed up the car :'+this.carName)
        console.log('Car colour is '+ this.carColour)
    }

    break(){
        console.log('To stop the car for :'+this.carName)
    }

    getCarName(){
        console.log(this.carName)
    }

    setAccountBAlance(withdrawalAmout:number){
        console.log(this.accountBalance - withdrawalAmout)
    }

}


//Object
//const refranceVariable = new Car()

const AudiCar = new Car('Audi','black')
console.log(AudiCar.accelarator())
console.log(AudiCar.break)

console.log(AudiCar.getCarName())

const PoloCar = new Car('VWPolo','Red')
console.log(PoloCar.accelarator())
console.log(PoloCar.break)

//blue print (class) -- createing new object(building) --initialinzing steps receive the input 


//1. Default constructor (if developer are not providing then Javascript at runtime)

//Encapsulation: Capsule Plastic coating--which is holding actual medicine items 
// Binding of properties(state) and methods(behaviours) into a single unit is called as Encapsulation
//hiding the internal details from the outsider

//Tightly encapsulation:










