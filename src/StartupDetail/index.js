import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StartupDetail = () => {
    const [startup, setStartup] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('startups')).find(startup => startup.name.toUpperCase() === name.toUpperCase());
        setStartup(data);
    }, [name]);

    return <>
        <p>{startup.name}</p>
        <p>{startup.description}</p>
    </>
}

export default StartupDetail;