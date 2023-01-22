



import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import { Map as LMap, TileLayer, Marker, Polyline,Popup } from 'react-leaflet';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'React'
  //   };
  // }

  render() {
    const center = { lat: 51.721547, lng: -0.164687 };
    const zoom = 8;
    const positions = [
    { lat: 51.44737, lng: -0.336682 },
    { lat: 51.674019, lng: 0.093973 },
    { lat: 51.907979, lng: -0.208439 },
  ];

    return (
      <LMap center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /><Polyline positions={positions} />
        <Marker position={[51.44737, -0.336682]}>
        <Popup>
            <span>Popup for Marker</span>
          </Popup>
        </Marker></LMap>
    );
  }
}

render(<App />, document.getElementById('root'));
export default App;