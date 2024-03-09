import React from 'react';
import classes from './User.module.css';

const User = ({name,age}) => {

    return (
        <div>
            <p className={classes.user}> User: {name}</p>
            <p className={classes.age}> Age: {age}</p>
        </div>
    );
};

export default User;