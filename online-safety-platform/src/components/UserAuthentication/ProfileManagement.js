// filepath: /Users/dharun/Documents/project/online-safety-platform/src/components/UserAuthentication/ProfileManagement.js
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const ProfileManagement = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            alert('Logout successful');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Profile Management</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default ProfileManagement;