import React from 'react';
import sun from '../assets/sun.svg'

const Light = ({light}) => {

    const intensite = [1,2,3];
    
    return (
        <div>
           {intensite
           .filter(intNumber => intNumber<=light)
           .map(int =>
            <img key={int} src={sun} alt='soleil'/>)}
        </div>
    );
};

export default Light;