import React, { useEffect, useState } from 'react';
import ProfileRow from './ProfileRow';

const MakeAdmin = () => {
    const [users, setUsers, refetch] = useState([]);
    useEffect(() => {
        fetch('https://ancient-sea-05145.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('AccessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)

                console.log(data);
            })
    }, [setUsers])
   
    return (
        <div>
            <h2>My Profile:{users.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Make a user Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <ProfileRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></ProfileRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;