import React from 'react';
import Light from './Light';
import Water from './Water';
import '../styles/cards.css'

const Cards = ({plant}) => {
    return (
      <ul className='card'>
          <li>
                <img className='imagePlante' src={plant.cover} alt={plant.cover} />
                <ul className='data-container'>
                    <li>{plant.name}</li>
                    <li><Light light={plant.light}/></li>
                    <li><Water water={plant.water} /></li>
                    <li><span  className='price'>{plant.price}€</span></li>
                    <button>Ajouter</button>
                </ul>
          </li>
      </ul>
    );
};

export default Cards;