import sharedVariables from "./sharedVariables.js";

class NumberGenerator {

    generateRandomNumbers() {
        try {
            sharedVariables.manipulateLevel = sharedVariables.matchLevel[sharedVariables.levels + 1];
    
            sharedVariables.n1 = Math.floor(Math.random() * (sharedVariables.maxNumber - sharedVariables.minNumber) + sharedVariables.minNumber);
            sharedVariables.n2 = Math.floor(Math.random() * (sharedVariables.maxNumber - sharedVariables.minNumber) + sharedVariables.minNumber);
            sharedVariables.positionUnknownEquation = Math.floor(Math.random() * 3);
    
            if (sharedVariables.levels <= 2) {
                const operacoesPermitidas = sharedVariables.manipulateLevel.operations;
                sharedVariables.nOperation = operacoesPermitidas[Math.floor(Math.random() * operacoesPermitidas.length)];
            } else {
                sharedVariables.nOperation = Math.floor(Math.random() * 4);
            }
        } catch (error) {
            console.error(`Error when generating random numbers: ${error}`);
        }
    }

    generateN1andN2forMultiplicationAndDivision() {
        try {
            sharedVariables.n1 = Math.floor(Math.random() * (sharedVariables.maxNumberMultiplication - sharedVariables.minNumber) + sharedVariables.minNumber);
            sharedVariables.n2 = Math.floor(Math.random() * (sharedVariables.maxNumberMultiplication - sharedVariables.minNumber) + sharedVariables.minNumber);
        } catch (error) {
            console.error(`Error when generating random n1 and n2 for multiplication: ${error}`);
        }
    }

    generateN1andN2() {
        try {
            sharedVariables.n1 = Math.floor(Math.random() * (sharedVariables.maxNumber - sharedVariables.minNumber) + sharedVariables.minNumber);
            sharedVariables.n2 = Math.floor(Math.random() * (sharedVariables.maxNumber - sharedVariables.minNumber) + sharedVariables.minNumber);
        } catch (error) {
            console.error(`Error when generating random n1 and n2: ${error}`);
        }
    }
}

export default NumberGenerator;