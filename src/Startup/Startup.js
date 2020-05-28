import React from 'react';
import './Startup.css';
import { Link } from 'react-router-dom';

const Startup = props => {
    return <Link to={`/startup/${props.data.name}`}> 
        <div className='startup'>
            <img src={props.data.logo} alt='error' />
            <div>
                <p className='title'>{props.data.name}</p>
                <p>{props.data.description}</p>
                <p>{props.data.mail}</p>
                <p>{`twitter.com/${props.data.twitter}`}</p>
            </div>
        </div>
    </Link>
}

export default Startup;