import React,{useContext} from 'react';
import Light from './Light';
import Water from './Water';
import '../styles/cards.css'
import { ArticleContext } from '../styles/context';

const Cards = ({plant}) => {

    const {addArticle} = useContext(ArticleContext);
    let dataNewArticle ={
                name :plant.name,
                price:plant.price
            }
   
    return (
        <>

      <ul className='card'>
          <li>
                <img className='imagePlante' src={plant.cover} alt={plant.cover} />
                <ul className='data-container'>
                    <li>{plant.name}</li>
                    <li><Light light={plant.light}/></li>
                    <li><Water water={plant.water} /></li>
                    <li><span  className='price'>{plant.price}€</span></li><br/>
                    <button onClick={() => addArticle(dataNewArticle)}>Ajouter</button>
                </ul>
          </li>
      </ul>
      </>
    );
};

export default Cards;