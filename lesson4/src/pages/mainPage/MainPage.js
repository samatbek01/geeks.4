import React, { useState } from 'react';
import Buttons from '../../components/buttons/Buttons';
import User from '../user/User';
import Example from '../../components/example/Example';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/TodoList/TodoList';
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
    const handleShow = () => {

        setShow(!show)
    }
    const [inputTask, setInputTask] = useState('')
    const onChangeInputTask = (event) => {
        setInputTask(event.target.value)
    }
    const handleAdd = ()=> {
        setTasks(prev=>[...prev, {
            id: tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])
    }
    const handleDone = (id) => {
        console.log(id);
        tasks.map(task=>{
            if(task.id===id) {
                return task.completed = !task.completed
            }
        })
        setTasks([...tasks])
    }
    const handleEdit=(editTodo) => {
        tasks.map(task => {
            if (task.id === editTodo.id)
            return task.title =editTodo.title
        })
        setTasks(tasks)
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(task=>task.id!==id))
    }
    return (
        <>
            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                >
                </Modal>
            }

            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
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