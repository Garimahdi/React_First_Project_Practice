import React from 'react';
import MetaData from './MetaData';
import styled from './UsersList.module.css';

const DataPoint = (props) =>{
    return(
        <div className={styled['users']}>
            <ul>
                {props.data.map(point =>{
                    return(
                        <MetaData
                        key = {point.id}
                        name = {point.name}
                        age = {point.age}
                        />
                    )
                })}
            </ul>
        </div>
    );
};

export default DataPoint;