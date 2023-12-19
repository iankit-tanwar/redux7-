import logo from './logo.svg';
import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { WithdrawFundActionCreator, addFundActionCreator } from './actionCreator';

function App() {

  let state = useSelector((store) => {
    return store; 
  });

  let dispatch = useDispatch();


  let addFund = () => {
    let amount =parseInt(prompt('Add the Fund')) 
    alert (amount)

    dispatch(addFundActionCreator(amount))
  }


  let withdraw = () => {
   let amount = parseInt(prompt('Withdraw the fund')) 

   alert (amount)

    dispatch(WithdrawFundActionCreator(amount))
   
  }
  return (
    <div className="App">

      <h1> Amount {state}</h1>
      <div>
        <button onClick={() => { addFund() }}>Add Fund </button>
        <button onClick={() => { withdraw() }}>Withdraw </button>
      </div>
    </div>
  );
}

export default App;
