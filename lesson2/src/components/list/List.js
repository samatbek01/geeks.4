import React from 'react';
import classes from './List.module.css'

const List = (props) => {
    return (
        <div>
            {
                props.newUser.map((item) =>
                    <div className={classes.list}>
                        <p className={classes.num}>id:{item.id}</p>
                        <h2>title:{item.title}</h2>
                    </div>
                )}
        </div>
    );
};

export default List;