import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    // Total expenses
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
    
    const [tempBudget, setTempBudget] = useState(budget);
    const [errorMessage, setErrorMessage] = useState('');

    const handleIncrease = () => {
        if (tempBudget + 10 <= 20000) {
            setTempBudget(tempBudget + 10);
            setErrorMessage(''); // Clearing any existing error messages
        } else {
            setErrorMessage('Budget cannot exceed £20,000.');
        }
    }

    const handleDecrease = () => {
        if (tempBudget - 10 >= totalExpenses) {
            setTempBudget(tempBudget - 10);
        } else {
            setErrorMessage('Budget cannot be lower than the allocated expenses.');
        }
    }

    const handleSave = () => {
        if (tempBudget <= 20000 && tempBudget >= totalExpenses) {
            dispatch({ type: 'SET_BUDGET', payload: tempBudget });
            setErrorMessage(''); // Clear any error message
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency }{budget}</span>
            <div>
                <input
                    type="number"
                    value={tempBudget}
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (value > 20000) {
                            setErrorMessage('Budget cannot exceed £20,000.');
                        } else if (value < totalExpenses) {
                            setErrorMessage('Budget cannot be lower than the allocated expenses.');
                        } else {
                            setTempBudget(value);
                            setErrorMessage(''); // Clear any error message
                        }
                    }}
                />
                <button onClick={handleDecrease}>- £10</button>
                <button onClick={handleIncrease}>+ £10</button>
                <button onClick={handleSave}>Save</button>
            </div>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </div>
    );
};

export default Budget;
