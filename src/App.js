
import { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import data from './Data/Coviddata.json'
import { setdata } from './store';
import StateFilter from './Component/StateFilter';


function App() {
  const dispatch = useDispatch();

console.log(data,"data");

useEffect(() => {
  dispatch(setdata(data.states));

},[dispatch]);

  return (
    <div className="App">
<h1>Interview Task</h1>
<StateFilter/>

    </div>
  );
}

export default App;
