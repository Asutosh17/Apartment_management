import React, { useState } from 'react';

const User = () => {

    const [user, setUser] = useState()


    return (
        <div>
            <h3>User Details</h3>
            <div>
                <table>
                    <thead>
                        <th>Owner Type</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </thead>
                </table>
            </div>        
        </div>
    );
};

export default User;