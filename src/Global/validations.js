import validator from "validator";

function validation() {
    const validatePassword = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            return true;
        } else {
            return false;
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    };

    return {
        validatePassword,
        validateEmail
    };
}

export default validation;
