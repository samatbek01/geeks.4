import React, {useState} from 'react';
import Buttons from "../../components/buttons/Buttons";
import User from "../user/User";
import Example from "../../components/example/Example";
import button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";
import List from "../../components/list/List"


const MainPage = () => {

    const user = [
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
        }]

    const navBar = ['Главная', 'Контакты', 'О нас', 'О нас']
    // let show = false
    // console.log(show, 'start');
    const [show, setShow] = useState(false)
    // console.log(show, 'showshowshowshow');
    const handleShow = () => {
        // show = true
        // console.log(show, ' end');
        setShow(!show)
    }
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }
    return (
        <>
            { show &&
                <Modal handleShow={handleShow} onChange={handleChange} inputValue={inputValue}>
                    {/*<input type="text"*/}
                    {/*onChange={(event=> setInputValue(event.target.value))}*/}
                    {/*/>*/}
                </Modal>
            }
            <Buttons/>
            <button onClick={handleShow}>Открыть</button>
            <List newUser={user}/>
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