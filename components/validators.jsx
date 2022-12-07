export const emailValidator = (email) => {
    if (!email) {
        return "This field is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return "Incorrect email format";
    }
    return "";
};

export const nameValidator = (firstName) => {
    if (!firstName) {
        return "This field is required";
    }

    return "";
};

export const messageValidator = (message) => {
    if (!message) {
        return "This field is required";
    }

    return "";
};
