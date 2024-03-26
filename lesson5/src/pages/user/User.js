import React from 'react';
import classes from './User.module.css';
import Button from '../../components/button/Button';
const User = ({ users }) => {
    const getUser = () => {

    };
    return (
        <div className={classes.users}>
            {
                users.map(user =>
                    <div className={classes.user}>
                        <p>User: {user.username}</p>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <Button title={'подробнее'} action={getUser}/>
                    </div>
                )
            }
        </div>
    );
};
export default User;