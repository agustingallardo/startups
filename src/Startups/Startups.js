import React from 'react';
import Startup from '../Startup/Startup';
import './Startups.css';

const Startups = props => {
    return <div className='startups'>
        { props.data 
        ? props.data.filter(data => {
            if (props.filter === '') {
                return data
            } else {
                if (data.name.toLowerCase().includes(props.filter.toLowerCase()) || data.description.toLowerCase().includes(props.filter.toLowerCase())) {
                    return data
                }
            }
        })
        .map(startup => <Startup data={startup} key={`${startup.id}-${startup.name}-${startup.description}`} />)
        : null }
    </div>
}

export default Startups;