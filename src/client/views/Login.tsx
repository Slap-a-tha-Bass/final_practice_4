import React from 'react';
import { useHistory } from 'react-router';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';

const Login = () => {
    const {values, handleChanges} = useForm();
    const history = useHistory();

    const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/login', 'POST', { email: values.email, password: values.password, role: 'guest' })
            .then(token => {
                localStorage.setItem('token', token),
                history.push('/profile'),
                console.log(token, values.email, values.password)
            })
    }
    return (
        <RootLayout>
            <form className="form-group">
                <label htmlFor="">Email</label>
                <input 
                value={values.email || ''}
                onChange={handleChanges}
                name="email"
                type="email" 
                className="form-control" />
                <label htmlFor="">Password</label>
                <input 
                value={values.password || ''}
                onChange={handleChanges}
                name="password"
                type="password" 
                className="form-control" />
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
            </form>
        </RootLayout>
    )
}

export default Login;
