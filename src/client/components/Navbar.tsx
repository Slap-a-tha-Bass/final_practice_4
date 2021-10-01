import React from 'react';
import { Link } from 'react-router-dom';
import RootLayout from './RootLayout';

const Navbar = () => {
    return (
        <RootLayout>
            <Link to="/">home</Link>
            <Link to="/books">books</Link>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
        </RootLayout>
    )
}

export default Navbar;
