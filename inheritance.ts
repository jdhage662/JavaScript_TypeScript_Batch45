//OOPS: piller 

import Car from "./car.ts";
import { Instru } from "./Instrument.ts";

// Inheritance , encapsulation, abstration and polymorphism

//Inheritance: acquiring properties and methods from your parent 
//base/parent class -- properties and method will get available to child/derived /subclass
//extends

//Different Types of inheritance:
//1. Single level inheritance : You have properties and methods from your single parent 

// parent -- grand parent -- grand grand parent 

class VehicleInstrument extends Instru{


    calculateMethod(){
        this.addition();
    }
}

const result = new VehicleInstrument('','');
result.calculateMethod()