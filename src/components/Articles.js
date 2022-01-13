import React, { useEffect, useState } from 'react';
import {plantList} from '../datas/plantList';
import Cards from './Cards';
import '../styles/articles.css'


const Articles = () => {

    const[selected,setSelected]= useState('Toutes');

    const handleSelected = (e) => {
        setSelected(e.target.value)
    }

    const handleReset = (e) => {
        setSelected('Toutes')
    }

    
    return (
        <div>
            <div className='blocSelectReset'>
                <select name='select' id='select' value={selected} onChange={handleSelected}>
                    <option value='Toutes'>Toutes</option>
                    <option value='classique'>classique</option>
                    <option value='extérieur'>extérieur</option>
                    <option value='plante grasse'>plante grasse</option>
                </select>
                <input type='reset' onClick={handleReset}/>
            </div>
            <div className='listeArticles'>
                {selected==='Toutes' ? 
                (plantList
                    .map(plant => 
                        <Cards key={plant.id} plant={plant}/>))
                        :
                    (plantList
                        .filter(element => element.category===selected)
                        .map(plant => 
                        <Cards key={plant.id} plant={plant}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Articles;