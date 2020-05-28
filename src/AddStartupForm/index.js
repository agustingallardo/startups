import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './AddStartupForm.css';

const AddStartupForm = () => {
    let history = useHistory();

    const data = useRef({
        name: '',
        mail: '',
        logo: '',
        description: '',
        twitter: ''
    });

    const handleInputChange = e => {
        data.current[e.target.name] = e.target.value;
    }

    const handleSubmit = e => {
        e.preventDefault();
        let startups = JSON.parse(localStorage.getItem('startups'));
        if (startups) {
            startups.push(data.current);
            localStorage.setItem('startups', JSON.stringify(startups));
        } else {
            startups = [];
            startups.push(data.current)
            localStorage.setItem('startups', JSON.stringify(startups))
        }
        history.push('/')
    }

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input name='name' type="text" onChange={handleInputChange} />
                </label>
                <label>
                    Mail:
                    <input name='mail' type="text" onChange={handleInputChange} />
                </label>
                <label>
                    Logo:
                    <input name='logo' type="text" onChange={handleInputChange} />
                </label>
                <label>
                    Description:
                    <textarea name='description' onChange={handleInputChange} />
                </label>
                <label>
                    Twitter:
                    <input name='twitter' type="text" onChange={handleInputChange} />
                </label>
                <input type='submit' value='Add' />
            </form>
        </div>
    )
}

export default AddStartupForm;