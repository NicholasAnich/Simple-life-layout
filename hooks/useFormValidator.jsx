import { useState } from "react";
import { emailValidator, nameValidator, messageValidator } from "../components/validators";

const touchErrors = (errors) => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty: true,
        };
        return acc;
    }, {});
};

export const useFormValidator = (form) => {
    const [errors, setErrors] = useState({
        firstName: {
            dirty: false,
            error: false,
            message: "",
        },
        email: {
            dirty: false,
            error: false,
            message: "",
        },
        message: {
            dirty: false,
            error: false,
            message: "",
        },
    });

    const validateForm = ({ form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        let nextErrors = JSON.parse(JSON.stringify(errors));

        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const { firstName, email, message } = form;

        if (nextErrors.email.dirty && (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email, form);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
            if (!!emailMessage) isValid = false;
        }

        if (nextErrors.firstName.dirty && (field ? field === "firstName" : true)) {
            const firstNameMessage = nameValidator(firstName);
            nextErrors.firstName.error = !!firstNameMessage;
            nextErrors.firstName.message = firstNameMessage;
        }

        if (nextErrors.message.dirty && (field ? field === "message" : true)) {
            const messageMessage = messageValidator(message);
            nextErrors.message.error = !!messageMessage;
            nextErrors.message.message = messageMessage;
        }

        setErrors(nextErrors);

        return {
            isValid,
            errors: nextErrors,
        };
    };

    const onBlurField = (e) => {
        const field = e.target.name;
        const fieldError = errors[field];
        if (fieldError.dirty) return;

        const updateErrors = {
            ...errors,
            [field]: {
                ...errors[field],
                dirty: true,
            },
        };

        validateForm({ form, field, errors: updateErrors });
    };

    return {
        validateForm,
        onBlurField,
        errors,
    };
};
