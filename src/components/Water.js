import React from 'react';
import watere from '../assets/water.svg'

const Water = ({water}) => {

    const intensite = [1,2,3];

    return (
        <div>
           {intensite
           .filter(intNumber => intNumber<=water)
           .map(int =>
            <img key={int} src={watere} alt='goutte'/>)}
        </div>
    );
};

export default Water;