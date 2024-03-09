import React from 'react';
import Buttons from "../../components/buttons/Buttons";
import User from "../user/User";
import Input from "../input/Input";
import Example from "../../components/example/Example";
import Dz1 from "../../dz/dz-1/Dz1";
import button from "../../components/button/Button";

const MainPage = () => {
    return (
        <>
            <Buttons/>
            <User name={'Samat'} age={18}/>
            <User name={'Jyldyzbek'} age={18}/>
            <User name={'Kuba'} age={18}/>
            <Input/>
            <Example>
                <p style={{color:'red', fontSize:'30px'}}>User</p>
                <p>Age</p>
            </Example>
            <input/>
            <Dz1 myWork={'My HomeWork dz-1'} btn={'saveWork'}/>
        </>
    );
};

export default MainPage;