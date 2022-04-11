import React, {useState} from 'react';
import Button from '../UI/Button';
import ErrorMessage from '../UI/ErrorMessage';
import Card from '../UI/Card';
import styled from './NewData.module.css';

const NewData = (props) =>{
    const [newName, setNewName] = useState('');
    const [newAge, setNewAge] = useState('');
    const [oneZero, setOneZero] = useState();
    const [isOn, setIsOn] = useState(false);

    const nameChange = (event) =>{
        //console.log(event.target.value);g
        setNewName(event.target.value);
    };

    const ageChange = (event) =>{
        //console.log(event.target.value);
        setNewAge(event.target.value);
    };

    const errorHandler = () =>{
        setOneZero(null);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const dataInput = {
            id: 'sd'+Math.random().toString().slice(2,5),
            name: newName,
            age: newAge
        };
        if(newName.trim().length === 0 || newAge.trim().length === 0){
            setOneZero(
                {title: 'Invalid input', message: 'Please fill all the fields'}
            );
            return;
        };

        if(+newAge < 0){
            setOneZero(
                {title: 'Invalid age number', message: 'Enter absolute integer number'}
            );
            setNewAge('');
            setNewName('');
            return;
        }
        console.log(dataInput);
        props.newDataInput(dataInput);

        setNewAge('');
        setNewName('');

    };

    const fillForm = () =>{
        setIsOn(true);
    };

    const stopFill = () =>{
        setIsOn(false);
    };

    return(
        <div>
            {oneZero && (
                <ErrorMessage
                title = {oneZero.title}
                message = {oneZero.message}
                onConfirm = {errorHandler} />
            )}

            <form onSubmit={submitHandler}>
                {!isOn && (
                    <Card className={styled['input2']}>
                        <button onClick = {fillForm} className={styled['button']}>Insert new data</button>
                    </Card>
                )}
                {isOn && (<Card className={styled['input']}>
                    <label htmlFor='username'>Fill Name</label>
                    <input id='username' type='text' onChange={nameChange} value={newName}></input>
                    <label htmlFor='ageNumber'>Age</label>
                    <input  id='ageNumber' type='number' onChange={ageChange} step='1' value={newAge}></input>
                    <Button type = 'submit'>New Data</Button>
                    <Button onClick = {stopFill}>Hide Form</Button>
                </Card>)}
            </form>
        </div>
    );
};

export default NewData;