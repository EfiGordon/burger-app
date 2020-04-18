export const checkValidity = (value, rules) => {
    if (!rules) return true; // If there is no validation rules.
    let valid = true;

    if (rules.required) {
        valid = value.trim() !== '' && valid;
    }
    if (rules.minLength) {
        valid = (value.length >= rules.minLength) && valid;
    }


    return valid;
};

