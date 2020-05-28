import React from 'react';
import './Startup.css';

const Startup = props => {
    return <div className='startup'>
        <img src={props.data.logo} alt='error' />
        <div>
            <p>{props.data.name}</p>
            <p>{props.data.description}</p>
            <p>{props.data.twitter}</p>
        </div>
    </div>
}

export default Startup;