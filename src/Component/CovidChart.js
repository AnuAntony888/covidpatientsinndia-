import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const CovidChart = () => {
  const filteredData = useSelector((state) => state.covid.filteredData);

  return (
    <Plot
      data={[
        {
          x: filteredData.map((item) => item.state),
          y: filteredData.map((item) => item.totalCases),
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Total Cases',
        },
        {
          x: filteredData.map((item) => item.state),
          y: filteredData.map((item) => item.activeCases),
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Active Cases',
        },
        {
          x: filteredData.map((item) => item.state),
          y: filteredData.map((item) => item.recovered),
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Recovered',
        },
        {
          x: filteredData.map((item) => item.state),
          y: filteredData.map((item) => item.deaths),
          type: 'scatter',
          mode: 'lines+markers',
          name: 'Deaths',
        },
      ]}
      layout={{ title: 'COVID-19 Case Trends by State' }}
    />
  );
};

export default CovidChart;
