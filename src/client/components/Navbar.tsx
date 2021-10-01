import React from 'react';
import { Link } from 'react-router-dom';
import RootLayout from './RootLayout';

const Navbar = () => {
    return (
        <RootLayout>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-primary mx-3" to="/">home</Link>
                <Link className="btn btn-primary mx-3" to="/books">books</Link>
                <Link className="btn btn-primary mx-3" to="/login">login</Link>
                <Link className="btn btn-primary mx-3" to="/register">register</Link>
            </div>
        </RootLayout>
    )
}

export default Navbar;
