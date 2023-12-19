import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ADD_FUND, WITHDRAW_FUND } from './constant';


 
let rootReducer =(preState , action)=>{
 let newState = preState


 switch(action.type){
  case ADD_FUND:
    newState+=action.amount;
    break ;
  case WITHDRAW_FUND:
    newState -= action.amount;
    break ;

    default:
return newState
 }


 return newState 
}


const store = createStore(rootReducer,1000 )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>
);

