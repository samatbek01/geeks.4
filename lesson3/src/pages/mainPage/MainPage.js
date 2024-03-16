import React, { useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import User from '../user/User';
import Example from '../../components/example/Example';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/list/TodoList';
import Button from '../../components/button/Button';

const MainPage = () => {
    const navBar = ['Главная', 'Контакты', 'О нас']
    const [show, setShow] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }
    ])
    console.log(tasks);
    const handleShow = () => {
        setShow(!show)
    }

    const [inputTask, setInputTask] = useState('')
    console.log(inputTask, 'inputTask');

    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }

    const handleAdd = ()=> {
        setTasks(prev=>[...prev, {
            id: tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])
    }

    const handleDelete = (id) => {
        setTasks(prevTasks=>prevTasks.filter(tasks=>tasks.id!==id))
    }

    return (
        <>
            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}>
                </Modal>
            }

            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}/>
            <Buttons/>
            <Button title={'Открыть'} action={handleShow}/>

            {/*<Header navBar={navBar}/>*/}
            {/*<User name={'Samat'} age={18}/>*/}
            {/*<User name={'Jyldyzbek'} age={18}/>*/}
            {/*<User name={'Kuba'} age={18}/>*/}
            {/*<Example>*/}
            {/*    <p style={{color:'red', fontSize:'30px'}}>User</p>*/}
            {/*    <p>Age</p>*/}
            {/*</Example>*/}
            {/*<Dz1 myWork={'My HomeWork dz-1'} btn={'saveWork'}/>*/}
        </>
    );
};
export default MainPage;