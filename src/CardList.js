import React from 'react';
import tachyons from 'tachyons';
import Card from './Card';

const CardList = ({robots}) => {

    const CardComponent = robots.map((robot,i) => {
        return <Card id={robot.id} name={robot.name} email={robot.email}/>
    });

    return (

        CardComponent
    )
}

export default CardList;