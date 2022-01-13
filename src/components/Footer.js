import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className='footer'>
           <h3>Pour les passionés de plantes 🌵🍀🌱</h3>
           <label htmlFor='email'>Laissez-nous votre email :</label><br/><br/>
            <input type='email' placeholder='Entrez votre email '/>
        </div>
    );
};

export default Footer;