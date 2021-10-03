import React from 'react';
import { useHistory } from 'react-router';
import RootLayout from '../components/RootLayout';
import { useForm } from '../hooks/useForm';
import { apiService } from '../utils/api-service';

const Register = () => {
    const {values, handleChanges} = useForm();
    const history = useHistory();

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        apiService('/auth/register', 'POST', { name: values.name, email: values.email, password: values.password, role: 'guest' })
            .then(token => {
                localStorage.setItem('token', token),
                history.push('/'),
                console.log(token, values.email, values.password)
            })
    }
    return (
        <RootLayout>
            <form className="form-group">
            <label htmlFor="">Name</label>
                <input 
                value={values.name || ''}
                onChange={handleChanges}
                name="name"
                type="text" 
                className="form-control" />
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
                <button onClick={handleRegister} className="btn btn-primary">Login</button>
            </form>
        </RootLayout>
    )
}

export default Register;
