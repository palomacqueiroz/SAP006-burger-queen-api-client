import { useState } from 'react';
import validation from "../../services/errors"
import createUser from "../../services/auth"

const useForm = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value, 
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(errors));

        createUser(values)
            .then((json) => {
                console.log(json);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return { handleChange, values, handleFormSubmit};
}

export default useForm;