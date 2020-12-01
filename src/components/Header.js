import React, {Fragment, useState} from 'react';
import './style/header.css';



const Header = () => {
    
    const [darkMode, setDarkMode] = useState(false);
    const handleClick = () =>{
        setDarkMode(!darkMode);
        document.querySelector('#root').classList.toggle('dark');
        document.querySelector('.Header h1').classList.toggle('dark');
        const arra = document.querySelectorAll('.container');

        for (let i = 0; i < arra.length; i++){
            arra[i].classList.toggle('pak');
        }
        
        
    }
    
    return(
        
        <div className="Header">
            <h1>ReactHook</h1>
            <button type='button' onClick={handleClick}>
                {darkMode ? 'Light Mode': 'Dark Mode'}
            </button>
        </div>
        
    );
}

export default Header;