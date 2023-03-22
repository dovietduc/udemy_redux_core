import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createStore from './redux/customStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

function reducer(action, state){
    if(action.type === 'INCREMENT'){
        return state + action.payload
    }
	else if(action.type === 'DECREMENT'){
        return state - action.payload
    }
}

let initialState = 0;

export const store = createStore(reducer, initialState);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
