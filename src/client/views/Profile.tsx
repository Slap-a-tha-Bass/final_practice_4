import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Users } from '../../../types';
import BookCard from '../components/BookCard';
import RootLayout from '../components/RootLayout';
import { apiService } from '../utils/api-service';

const Profile = () => {
    const [users, setUsers] = useState<Users['id']>();
    useEffect(() => {
        apiService('/api/users')
            .then(data => setUsers(data));
    }, [])
    return (
        <RootLayout>
            <h1 className="text-center">{users}</h1>
            <div className="d-flex justify-content-center">
                <Link className="btn btn-primary" to="/">Home</Link>
                <button className="btn btn-primary">Sign Out</button>
            </div>
        </RootLayout>
    )
}

export default Profile;
