



import React, { Component, useEffect} from 'react';
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
interface   model{
  _id: String,
  latitude: Number,
  longitude: Number,
  __v: Number
}
export const icon = new Icon({
  iconUrl: "/logo.svg",
  iconSize: [25, 25]
});



 
 
   function   App() {
    const [myArray, setMyArray] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    let listLocation: any[] = []
    useEffect(() => {
      mapService.getAll()
      .then((response: any) => {
        setMyArray(response.data)
        listLocation=response.data
        console.log(listLocation); 
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
        render(<App />, document.getElementById('root'));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  

    }, []);
       


 
  }
// }


export default App;
