import React from 'react';
import '../styles/panier.css'

const Panier = () => {

    const handleClear =() => {
        localStorage.clear()
    }

    return (
        <div className='panier-container'>
            
            <h1>VOTRE PANIER</h1>
            <button onClick={handleClear}>Vider votre panier</button>
        </div>
    );
};

export default Panier;