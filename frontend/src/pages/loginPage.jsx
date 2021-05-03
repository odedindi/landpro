import React, { useState } from 'react'
import { useHistory } from 'react-router';

// ============= styles & components =============
import { FieldEmail, FieldPassword, HideRevealButton, InputWrapper, 
    LoginButton, LoginWrapper } from '../styles/loginPage'; 
import { Hide, View } from 'grommet-icons';
// ===============================================
// ================== backend ====================
import { loginFetch } from '../helpers/fetches';
// ===============================================

const LoginPage = () => {
    const history = useHistory();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ reveal, setReveal ] = useState(false);
    const [ wrongLoginDetails, setWrongLoginDetails ] = useState(false);
    const wronDetailsMessage = <p>Wrong email or password</p>;

    const handleEmail = (event) => { 
        setWrongLoginDetails(false);
        setEmail(event.currentTarget.value); 
    };
    const handlePassword = (event) => { 
        setWrongLoginDetails(false);
        setPassword(event.currentTarget.value); 
    };

    const revealHandler = () => setReveal(!reveal);

    const loginHandler = async (event) => {
        event.preventDefault();
        const response = await loginFetch(email, password);
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.access);
            return history.push('/')
        };
        return setWrongLoginDetails(true);
    };
    
    return (
        <LoginWrapper>
            <form onSubmit={ loginHandler }>
                <h1>Login</h1>
                <InputWrapper>
                    <label>E-Mail:</label>
                    <FieldEmail id='email' type='email' 
                        value={ email } onChange={ handleEmail }
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Password:</label>
                    <FieldPassword id='password' type={ reveal ? 'text' : 'password' } 
                        value={ password } onChange={ handlePassword }
                    />
                    <HideRevealButton onClick={ revealHandler }>{ reveal ? <View /> : <Hide /> } </HideRevealButton>
                </InputWrapper>
                <LoginButton type='submit'>Login</LoginButton>
                { wrongLoginDetails && wronDetailsMessage }
            </form>
        </LoginWrapper>
    )
}

export default LoginPage;