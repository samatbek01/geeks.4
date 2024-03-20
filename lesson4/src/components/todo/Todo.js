import React, { useState } from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';

const Todo = ({ todo, handleDelete, handleDone, handleEdit, handleCurrentEdit,isEdit }) => {
    const [ input, setInput ] = useState('');

    return (
        <>
            {
                isEdit &&  <div>
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                    />
                    <button onClick={() => {
                        handleEdit({
                            ...todo, title: input
                        });
                        handleCurrentEdit(null)
                    }
                    }>
                        Save
                    </button>
                    <button onClick={()=> {
                        handleCurrentEdit(null)
                    }}>
                        Cansel
                    </button>
                </div>
            }

            <li className={`${classes.todo} ${todo.completed && classes.done}`}>
                <div className={classes.info}>
                    <p>id: {todo.id}</p>
                    <p>title: {todo.title}</p>
                </div>
                    <div className={classes.btnBox}>
                        <button onClick={() => handleCurrentEdit(todo.id)}>
                            Edit
                        </button>
                        <button onClick={() => handleDone(todo.id)}>
                            Done
                        </button>
                        <button onClick={() => handleDelete(todo.id)}>
                            Delete
                        </button>
                    </div>
            </li>
        </>
    );
};
export default Todo;