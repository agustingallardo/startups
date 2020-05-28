import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = props => {
    return (<div className='search-bar'>
        <p>STARTUP ARGENTINA</p>
        <input placeholder='Buscar' onChange={props.onInputChange}/>
        <Link to='/addstartup'><button>Agregar startup</button></Link>
    </div>)
}

export default SearchBar;