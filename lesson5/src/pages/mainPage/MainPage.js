import React, { useEffect, useState } from 'react';
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
    const [tasks, setTasks] = useState([])
    const [filterOptions , setFilterOptions] = useState('all')
    const handleShow = () => {

        setShow(!show)
    }

    const handleClear = ()=> {
        setTasks([])
        localStorage.setItem('tasks', JSON.stringify([``]))
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

    useEffect(() => {
        console.log('useEffect');
    }, [ tasks ]);

    const sendLocalStorage = () => {
        localStorage.setItem('name', 'Samat');
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const getLocalStorage = () => {
        console.log(JSON.parse(localStorage.getItem('tasks')));
    };

    const handleFilterChange = (event)=> {
        setFilterOptions(event.target.value)
    }

    const filterTask = tasks.filter(task => {
        switch (filterOptions){
            case 'completed': return task.completed
            case 'notCompleted': return !task.completed
            default:return  true
        }
    })

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage === null) {
            return localStorage.setItem('tasks', JSON.stringify(tasks))
        }
        if (myLocalStorage.length !==0) {
            setTasks(myLocalStorage)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks]);

    const BASE_URL = 'https://jsonplaceholder.typicode.com/'
    const getApi = async(api) => {
        const response = await fetch(`${BASE_URL}${api}`);
        const  data = await response.json()
        return data
    };

    const [users, setUsers] = useState([])
    console.log(users, 'users');

    useEffect(() => {
        getApi('todos').then((data)=> setTasks(data))
        getApi('users').then((data)=> setUsers(data))
        getApi('posts').then((data)=> console.log(data))
    },[])

    return (
        <>
            <select value={filterOptions} onChange={handleFilterChange}>
                <option value='all'>Все таски</option>
                <option value='completed'>Выполнненые таски</option>
                <option value='notCompleted'>Невыполненные таски</option>
            </select>
            {/*<User users={users}/>*/}
            {/*<Button title={'FETCH'} action={getTodos}/>*/}
            {/*<Button title={'LocalStorage'} action={sendLocalStorage}/>*/}
            {/*<Button title={'GetLocalStorage'} action={getLocalStorage}/>*/}
            <Button title={'Открыть'} action={handleShow}/>
            <Button title={'Очистить'} action={handleClear}/>
            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                >
                </Modal>
            }

            <TodoList
                tasks={filterTask}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
            {/*<Buttons/>*/}


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