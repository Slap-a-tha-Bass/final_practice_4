import React, { useEffect, useState } from 'react';
import { Users } from '../../../types';
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
            <h1>{users}</h1>
        </RootLayout>
    )
}

export default Profile;
