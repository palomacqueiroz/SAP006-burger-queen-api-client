import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUser } from '../../services/auth';
import validation from '../../services/errors';
import { getRouteByRole } from '../../routes/redirections';
import GeneralButton from '../../components/Button/Button';
import { Input }  from '../../components/Input/Input.jsx';
import vixiDesktop from '../../Assets/logodesktop.png';
import './register.scss';

const Register = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
    });

    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value, 
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));

        createUser(values)
            .then((response) => {
                console.log(111, response)
    
                if (response.code && response.code === 400) {
                console.log(response.message)
                } else {
                console.log(response.token);
                }
                const route = getRouteByRole(values.role);
                history.push(route);
            })            
            .catch((error) => {
                console.log(error);
            })
    };
    
    return (
        <section className="mainBox">
            <img className="imageDesktop" src={vixiDesktop} alt='icon-register' />
            <div className="signUpBox">
                <p className="titleRegister">Crie sua conta</p>
                <form className="form">
                    <Input variant="secondary"
                        type='text' 
                        id='name'
                        name='fullName'
                        values={values.fullName}
                        onChange={handleChange}
                        placeholder='Nome completo' 
                        errormessage='Por favor, insira um nome válido.' />
                    {errors.fullName && <p className='error'>{errors.fullName}</p>}
                    <Input variant="secondary"
                        type='email' 
                        id='email' 
                        name='email'
                        values={values.email}
                        onChange={handleChange}
                        placeholder='E-mail'
                        errormessage='Por favor, insira um e-mail válido.' />
                    {errors.email && <p className='error errorsMessage'>{errors.email}</p>}
                    <Input variant="secondary"
                        type='password' 
                        id='password' 
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        placeholder='Senha'
                        errormessage='Por favor, insira uma senha válida.' />
                    {errors.password && <p className='error errorsMessage'>{errors.password}</p>}
                    <Input variant="secondary"
                        type='password'
                        id='confirm-password' 
                        name='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        placeholder='Confirmar senha'
                        errormessage='As senhas não conferem.' />
                    {errors.confirmPassword && <p className='error errorsMessage'>{errors.confirmPassword}</p>}
                    </form>
                    <form className="inputRadioBox">
                        <label className="labelRadioInput">
                            <Input
                            variant='true'
                            type='radio'
                            name='role'
                            className='input-radio'
                            onChange={handleChange}
                            value='Salão'
                            labelText='Salão' />
                            Salão
                        </label>
                        <label className="labelRadioInput">
                            <Input
                            variant='true'
                            type='radio' 
                            name='role'
                            className='input-radio'
                            onChange={handleChange}
                            value='cozinha'
                            labelText='Cozinha' />
                            Cozinha
                        </label>
                        {errors.role && <p className='error errorsMessage'>{errors.role}</p>}
                    </form>
                <GeneralButton  variant="secondary" onClick={handleFormSubmit}>
                    Entrar
                </GeneralButton>
                <p className="phraseRegister">Já possui uma conta?<br/> 
                    <Link to='/'>Faça seu login aqui</Link>
                </p>
            </div>
        </section>
    )
}

export default Register;




