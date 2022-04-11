import React from 'react';
import Card from './Card';
import Button from './Button'
import styled from './ErrorMessage.module.css';

const ErrorMessage = (props) =>{
    return(
        <div>
            <div className={styled.backdrop} onClick={props.onConfirm} />
            <Card className = {styled['modal']}>
                <header className={styled['header']}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styled['content']}>
                    <p>{props.message}</p>
                </div>
                <footer className={styled['actions']}>
                    <Button onClick = {props.onConfirm}>OK</Button>
                </footer>
            </Card>
        </div>
    );
};

export default ErrorMessage