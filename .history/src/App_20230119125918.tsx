



import React, { Component} from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './App.css';
import { Map as LMap, TileLayer, Marker, Polyline,Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import mapService from './service/map.service';
interface AppProps { }
interface AppState {
  name: string;
}
export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});



// export function Example() {
//   const [error, setError] = useState(null);
// const [isLoaded, setIsLoaded] = useState(false);
// const [locations, setLocation] = useState([]);
// // const retrieveTutorials = () => {
//   mapService.getAll()
//     .then((response: any) => {
//       setLocation(response);
//       console.log(response);
//     })
//     .catch((e: Error) => {
//       console.log(e);
//     });

// console.log(locations,'locationslocations');
// }
class App extends Component<AppProps, AppState> {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: 'React'
  //   };
  // }
 
  Example() {
      const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [locations, setLocation] = useState([]);
    // const retrieveTutorials = () => {
      mapService.getAll()
        .then((response: any) => {
          setLocation(response);
          console.log(response);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    
    console.log(locations,'locationslocations');
  
    return (
      <LMap center={{ lat: 35.671165, lng: 10.100547 }} zoom={8}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Polyline positions={[
    { lat: 35.671165, lng: 10.100547 },
     { lat: 35.829300, lng: 10.640630 },
    { lat: 35.769260, lng: 10.819970 },
  ]} />
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
