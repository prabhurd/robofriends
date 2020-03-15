import React from 'react';
import tachyons from 'tachyons';
import Card from './Card';

const CardList = ({robots}) => {

    const CardArray = robots.map((robot,i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    });
    return (

        CardArray
    )
}

export default CardList;