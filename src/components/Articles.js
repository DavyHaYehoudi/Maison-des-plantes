import React from 'react';
import {plantList} from '../datas/plantList';
import Cards from './Cards';
import '../styles/articles.css'


const Articles = () => {


    return (
        <div>
            <div className='blocSelectReset'>
                <select name='select' id='select'>
                    <option value='---'>---</option>
                    <option value='classique'>classique</option>
                    <option value='extérieur'>extérieur</option>
                    <option value='plante grasse'>plante grasse</option>
                </select>
                <input type='reset' />
            </div>
            <div className='listeArticles'>
                    {plantList.map(plant => 
                        <Cards key={plant.id} plant={plant}/>
                    )}
            </div>
        </div>
    );
};

export default Articles;