import React from 'react';
import { toast } from 'react-toastify';

const ProfileRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://ancient-sea-05145.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You have no permission make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully make an admin')
                    refetch()
                }

            })
    }
    return (
        <tr>
            <th>3</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-primary">Make Admin</button>}</td>
            <td><button class="btn btn-secondary">Delete</button></td>
        </tr>
    );
};

export default ProfileRow;