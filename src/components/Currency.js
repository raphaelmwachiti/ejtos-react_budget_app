
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('£'); // Default currency is Pound

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
        dispatch({ type: 'SET_CURRENCY', payload: event.target.value });
    }

    return (
        <div className='alert alert-primary'>
            <span>Currency:</span>
            <select value={currency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
}

export default Currency;
