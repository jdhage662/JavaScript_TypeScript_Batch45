
//to access variable and methods from one class to another class we can use export
//Default export , Named Export

import Car from './car';
import CarVehical  from './car'   //Named export
// import { Car } from './car'

class Vehical extends Car{
    carType:string;
    constructor(carName:string, carColour:string, carType:string){
        super(carName, carColour)
        this.carType=carType;
    }

   
}