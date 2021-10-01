import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest}: PrivateRouteProps) => {
    const TOKEN = localStorage.getItem('token');

    if(!TOKEN){
        alert('Oops!')
        return <Redirect to="/login" />
    } else {
        return <Route {...rest}>{children}</Route>
    }
}
interface PrivateRouteProps {
    path: string,
    exact?: boolean,
    children: React.ReactNode
}
export default PrivateRoute;
