



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
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export let  listLocation: any[] = []
export let  locations: any[] = []

export default function   App() {
    console.log('vvvvvv');
    
    const [myArray, setMyArray] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {      
      listLocation=[]
      mapService.getAll()
      .then((response: any) => {
        setMyArray(response.data)
        listLocation=response.data
      })
      .catch((e: Error) => {
        console.log(e);
      });
  

    }, []);
       
    console.log(listLocation); 
    locations=[]
    listLocation.map((ele:any)=>{
      locations.push({lat:ele.latitude,lng:ele.longitude})
    })
    return (
      <LMap center={{ lat: 35.671165, lng: 10.100547 }} zoom={8}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Polyline positions={locations} />
     
                {
                    locations.map((marker, index) => (
                        <Marker 
                            position={[marker.lat, marker.lng]} 
                            key={index}
                          
                            icon={icon}
                        />
                    ))
                }
        
       {/* <Marker position={locations}
        icon={icon}>
        <Popup>
            <span>Popup for Marker</span>
          </Popup>
        </Marker> */}
        </LMap>
    );
  }
// }

// render(<App />, document.getElementById('root'));

