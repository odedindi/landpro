import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

// ========================== componens ==========================
import { FieldEmail, FieldPassword, HideRevealButton, 
    LoginButton, LoginWrapper } from '../styles/loginPage';
    
    import { Hide, View } from 'grommet-icons';
    // ===============================================================
    // =========================== store =============================
    import { loginFetch } from '../helpers/fetches';

// ===============================================================
const LoginPage = () => {
    const dispatch = useDispatch();
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

    const loginHandler = async (event) => {
        event.preventDefault();
        const response = await loginFetch(email, password);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            localStorage.setItem('token', data.access);
            return history.push('/')
        };
        return setWrongLoginDetails(true);
    };
    
    return (
        <LoginWrapper>
            <form onSubmit={ loginHandler }>
                <h1>Login</h1>
                <div>
                    <label>E-Mail:</label>
                    <FieldEmail id='email' type='email' 
                        value={ email } onChange={ handleEmail }
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <FieldPassword id='password' type={ reveal ? 'text' : 'password' } 
                        value={ password } onChange={ handlePassword }
                    />
                    <HideRevealButton 
                        icon={ reveal ? <View /> : <Hide /> } 
                        onClick={ () => setReveal(!reveal) }
                    />

                </div>
                <LoginButton type='submit'>Login</LoginButton>
                { 
                    wrongLoginDetails && wronDetailsMessage
                }
            </form>
        </LoginWrapper>
    )
}

export default LoginPage;