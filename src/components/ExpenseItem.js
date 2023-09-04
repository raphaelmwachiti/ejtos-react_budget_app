import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency  } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    } 

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({type: 'RED_EXPENSE', payload: expense});
    };
    
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency }{props.cost}</td>
        <td>
            <button 
                onClick={() => increaseAllocation(props.name)}
                style={{
                    background: 'green',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >+</button>
        </td>
        <td>
            <button 
                onClick={() => decreaseAllocation(props.name)}
                style={{
                    background: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >−</button>
        </td>

        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
