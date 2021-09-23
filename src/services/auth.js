import { saveStorageKey } from "./storage";

export const registerUser = (user) => {
    const body = {
        'name': user.fullName,
        'email': user.email,
        'password': user.password,
        'role': user.role,
        'restaurant': 'Vixi', 
    }
    console.log(body);

    return fetch('https://lab-api-bq.herokuapp.com/users', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then(() => {
            return loginWithEmail({ email: user.email, password: user.password })
        })
        .catch((error) => console.log(error, 'erro na registerUser'))
    };
    
export const loginWithEmail = (user) => {
    return fetch('https://lab-api-bq.herokuapp.com/auth', {
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
        .then((json) => {
            saveStorageKey(json.token);
            return json;
        })
        .catch((error) => console.log(error, 'erro de token na LoginWithEmail'))
};










// function getAPI (endpoint) {
//     return fetch(`https://lab-api-bq.herokuapp.com/${endpoint}`, {

//     }) 
//         .then(function(response) {

//         })
//         .then(function(res) {

//         })
// } 
    