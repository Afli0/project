



import React, { Component, useEffect} from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './App.css';
import { Map as LMap, TileLayer, Marker, Polyline,Popup } from 'react-leaflet';
import { Icon } from "leaflet";
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

export let  locations: any[] = []

function locationList(data:any){
  locations=[]
  console.log(data,'listLocationlistLocationlistLocation');
  data.map((ele:any)=>{      
    locations.push({lat:ele.latitude,lng:ele.longitude})
  })

  console.log(locations,'fffffffffffffff');
}
export default function   App() {    
  const [result, setResult] = useState<any>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("http://localhost:5000/map/locations", {
        method: "GET"
      });
      const jsonData = await data.json();
      console.log(jsonData);
      locations=[]
      jsonData.map((ele:any)=>{      
        locations.push({lat:ele.latitude,lng:ele.longitude})
      })
      console.log(locations,'555555555555555555');
    };


    api();
  }, []);
  console.log(locations,"222222222222222222");
  
      return (
        <LMap center={{ lat: 35.671165, lng: 10.100547 }} zoom={8}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
        <Polyline positions={[{ lat: 35.671165, lng: 10.100547 }]} />
                  {/* {
                      locations.map((marker, index) => (
                          <Marker 
                              position={[marker.lat, marker.lng]} 
                              key={index}
                              // onClick={() => {
                              //   setMyArray(marker);
                              // }}
                              icon={icon}
                          />
                      ))
                  }   */}
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

