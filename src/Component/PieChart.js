import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';

const PieChart = () => {
  const filteredData = useSelector((state) => state.covid.filteredData);
console.log(filteredData,"filterdata")
  const totalCases = filteredData.reduce((acc, curr) => acc + curr.totalCases, 0);
  const activeCases = filteredData.reduce((acc, curr) => acc + curr.activeCases, 0);
  const recovered = filteredData.reduce((acc, curr) => acc + curr.recovered, 0);
  const deaths = filteredData.reduce((acc, curr) => acc + curr.deaths, 0);

  const data = [totalCases, activeCases, recovered, deaths];
  const labels = ['Total Cases', 'Active Cases', 'Recovered', 'Deaths'];

  return (
    <Plot
      data={[
        {
          values: data,
          labels: labels,
          type: 'pie',
        },
      ]}
      layout={{
        title: 'COVID-19 Cases Distribution',
      }}
      style={{width:'100%'}}
    />
  );
};

export default PieChart;
