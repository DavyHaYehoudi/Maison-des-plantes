import React from 'react';
import { useContext } from 'react';
import { ArticleContext } from '../styles/context';
import '../styles/panier.css';


const Panier = () => {
    const {article,handleClear} = useContext(ArticleContext);
    
    //Calcul de la somme totale
    const total = article.reduce((acc,e) => 
        acc + e.price,
        0
    )

  
    return (
        <div className='panier-container'>
            
            <h1>VOTRE PANIER</h1>
            {article.length >0 ? 
            <>
            {article.map((e,i) =>
              <div key={i}>
                  <ul>
                      <li>{article[i].name} ( {article[i].price}€ ) <button>❌</button></li>
                      
                  </ul>
                  <hr></hr>
              </div>  
            )}
            <p>TOTAL = {total}€</p>
            
            </>
            :
            <h2>Panier vide encore</h2>
            }
            <button onClick={handleClear}>Vider votre panier</button>
        </div>
    );
};

export default Panier;