



import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import './App.css';
import { Map as LMap, TileLayer, Marker, Polyline,Popup } from 'react-leaflet';
import { Icon } from "leaflet";
interface AppProps { }
interface AppState {
  name: string;
}
export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});
const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [locations, setLocation] = useState([]);
useEffect(() => {
  fetch("http://localhost:3000/map/locations")
      .then(res => res.json())
      .then(
          (data) => {
              setIsLoaded(true);
              setLocation(data);
          },
          (error) => {
              setIsLoaded(true);
              setError(error);
          }
      )
}, [])
console.log(locations,'locationslocations');

class App extends Component<AppProps, AppState> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'React'
  //   };
  // }
 
  render() {
    const center = { lat: 35.671165, lng: 10.100547 };
    const zoom = 8;
    const positions = [
    { lat: 35.671165, lng: 10.100547 },
     { lat: 35.829300, lng: 10.640630 },
    { lat: 35.769260, lng: 10.819970 },
  ];

    return (
      <LMap center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Polyline positions={positions} />
        <Marker position={[35.671165, 10.100547]}icon={icon}>
        <Popup>
            <span>Popup for Marker</span>
          </Popup>
        </Marker></LMap>
    );
  }
}

render(<App />, document.getElementById('root'));
export default App;