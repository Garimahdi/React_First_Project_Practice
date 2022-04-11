import React from 'react';
import Card from '../UI/Card';

const MetaData = (props) =>{
    return(
        <li>
            <Card>
                {props.name}, {props.age}
            </Card>
        </li>
    );
};

export default MetaData;