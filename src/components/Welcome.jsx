import React from 'react';
//1.menampilkan nama yang sedang login di dashboard
import { useSelector } from 'react-redux';

const Welcome = () => {
    //2. pangil user dari global state
    const {user} = useSelector ((state) => state.auth);
    return (
        <div>
            <h1 className='title'>Dashboard</h1>
               {/*3. tampilkan nama*/}
            <h2 className='subtitle'> Welcome Back <strong> {user && user.name} </strong></h2>
        </div>
    )
}

export default Welcome;