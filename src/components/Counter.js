import React from 'react'
import {store} from '../index'


function Counter() {
    const handleIncrement = function(){
        store.dispatch({
            type: 'INCREMENT',
            payload: 1
        })
    
    }
    const handleDecrement = function(){
        store.dispatch({
            type: 'DECREMENT',
            payload: 1
        })
    }
    return (       
        <div>
            <h2>Counter 0</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;