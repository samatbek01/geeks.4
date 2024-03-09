import React from 'react';
import classes from './Dz1.module.css';

const Dz1 = ({myWork , btn}) => {
    return (
        <div className={classes.me}>
            <h2>{myWork}</h2>
            <button>{btn}</button>
        </div>
    );
};

export default Dz1;