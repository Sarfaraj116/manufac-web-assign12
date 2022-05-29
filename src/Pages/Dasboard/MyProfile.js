import React, { useEffect, useState } from 'react';
// import { useQuery } from 'react-query';
// import Loading from '../Shared/Loading';
const MyProfile = () => {
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
                            users.map(user => <tr
                                key={user._id}
                                user={user}
                            >
                                <th></th>
                                <th>Name</th>
                                <th>Make a user Admin</th>
                                <th>Remove User</th>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyProfile;
