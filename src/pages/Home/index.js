import React, { useState, useEffect } from 'react';
import SearchBar from '../../SearchBar/SearchBar'
import Startups from '../..//Startups/Startups';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        const startups = JSON.parse(localStorage.getItem('startups'));
        setData(startups);
    }, [])
    
    return (
        <>
            <SearchBar onInputChange={e => setSearchValue(e.target.value)} />
            <Startups data={data} filter={searchValue}/>
        </>
    )
}

export default Home;