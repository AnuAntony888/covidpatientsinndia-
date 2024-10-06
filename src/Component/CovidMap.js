import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default marker icon not showing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
const CovidMap = () => {
  const filteredData = useSelector((state) => state.covid.filteredData);

  console.log(filteredData,"filterdata")
  
  return (
<MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom={false} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
 
        {filteredData.map((state) => (
        <Marker key={state.state} position={[state.lat, state.long]}>
          <Popup>
        <strong>{state.state}</strong><br />
            Total Cases: {state.totalCases}<br />
            Active Cases: {state.activeCases}<br />
            Recovered: {state.recovered}<br />
            Deaths: {state.deaths}
            </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
  
};

export default CovidMap;
