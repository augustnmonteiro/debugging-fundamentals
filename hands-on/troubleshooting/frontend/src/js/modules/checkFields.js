import sharedVariables from "./sharedVariables.js";

class CheckFields {

    constructor(gameInstance) {
        this.game = gameInstance;
    }

    checkInputResponse(field) {
        try {
            if (field.value === '' || field.value === undefined) {
                field.classList.add('error');
    
                setTimeout(() => {
                    field.classList.remove('error');
                }, 2000);
                return false;
            }
            return true;
            
        } catch (error) {
            console.error(`Error when checking user response input: ${error}`);
        }
    }

    checkUsername() {
        try {
            if(sharedVariables.inputName.value === ''){
                sharedVariables.inputName.value = sharedVariables.inputName.placeholder;
            }
        } catch (error) {
            console.error(`Error handling user name: ${error}`);
        }
    }

    generatePlaceholder() {
        try {
            const numberRandomForUsernameRandom = Math.floor(Math.random() * 10000);
            return `Player${numberRandomForUsernameRandom}`;
        } catch (error) {
            console.error(`Error generating random placeholder: ${error}`);
        }
    }
}

const checkFields = new CheckFields();
export default checkFields;