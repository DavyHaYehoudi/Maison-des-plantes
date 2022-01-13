import React,{useState} from 'react';
import Light from './Light';
import Water from './Water';
import '../styles/cards.css'

const Cards = ({plant}) => {

    const[arrayData,setArrayData] = useState([]);
    
    const handleAdd = () =>{
        let data ={
            name :plant.name,
            price:plant.price
        }
        arrayData.push(data)
        setArrayData(arrayData)
        
        
    localStorage.setItem('liste',JSON.stringify(arrayData))

    }

    const handleClear =() => {
        localStorage.clear()
        setArrayData([])
    }

    // <button onClick={handleClear}>Vider votre panier</button>

   
    

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
                    <button onClick={handleAdd}>Ajouter</button>
                </ul>
          </li>
      </ul>
      </>
    );
};

export default Cards;