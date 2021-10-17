import { saveStorageKey } from "./storage";

export const createUser = async (user) => {
    const body = {
        'name': user.fullName,
        'email': user.email,
        'password': user.password,
        'role': user.role,
        'restaurant': 'Vixi', 
    }

    return await fetch('https://lab-api-bq.herokuapp.com/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(res => res.json())
        .catch((error) => console.log(error, 'erro na createUser'))
    };
    
export const loginWithEmail = async (user) => {
    return await fetch('https://lab-api-bq.herokuapp.com/auth', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify ({
            "email": user.email,
            "password": user.password,
        }),
    })
        .then((response) => response.json())
        .then((res) => {
            saveStorageKey(res.token);
            return res;
        })
        .catch((error) => console.log(error, 'erro de token na LoginWithEmail'))
};
