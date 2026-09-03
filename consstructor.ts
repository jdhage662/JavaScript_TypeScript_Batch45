class Student{
    x:number;
    y:number;
    //constructor overloading 
    constructor(x:number, y:number)
    constructor(xy:string)
    constructor(x:string|number, y:string|number=0){
        if(typeof(x) === 'string' || typeof(y) === 'string'){

        }else{
            this.x = x;
            this.y = y;
        }
    }
}