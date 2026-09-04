class Calculation {

    addition(a: number, b: number): number {
        return a + b;
    }

    subtraction(a: number, b: number): number {
        return a - b;
    }

    multiplication(a: number, b: number): number {
        return a * b;
    }

    division(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}

// Create object of Calculation class
const calc = new Calculation();

// Call methods
console.log("Addition:", calc.addition(10, 5));
console.log("Subtraction:", calc.subtraction(10, 5));
console.log("Multiplication:", calc.multiplication(10, 5));
console.log("Division:", calc.division(10, 5));