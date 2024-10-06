// src/components/StateFilter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredState } from '../store';
import PieChart from './PieChart';
import CovidMap from './CovidMap';
import CovidChart from './CovidChart';


const StateFilter = () => {

    const dispatch = useDispatch();
    const filteredData = useSelector((state) => state.covid.filteredData);
    const handleStateChange = (event) => {
        dispatch( setFilteredState(event.target.value));
      };
  return (<>
    <select onChange={handleStateChange} style={{minWidth:'200px', height:'30px'}}>
        <option value="">All States</option>
       
        {filteredData.map(state => (
          <option key={state.state} value={state.state}>{state.state}</option>
        ))}
      </select>
      <PieChart/> 
      <CovidMap/>
      <CovidChart/>
  </>);
};

export default StateFilter;

