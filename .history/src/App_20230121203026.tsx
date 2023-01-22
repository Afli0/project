



import React, { Component, useEffect} from 'react';
import { useState } from 'react';
import { render } from 'react-dom';
import './App.css';
import { Map as LMap, TileLayer, Marker, Polyline,Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import mapService from './service/map.service';

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
export default  class App extends React.Component {    
  state = {
    loading: true,
    location: []
  }
  async componentDidMount(){
    const url = "http://localhost:5000/map/locations"
    const response = await fetch(url)
    const data = await response.json()
      locations=[]
    data.map((ele:any)=>{      
       locations.push({lat:ele.latitude,lng:ele.longitude})
    })
    this.setState({location: locations, loading: false})
  }
  render(){
    if(this.state.loading){
      return<div>loading ...</div>
    }
  return (
        <LMap center={{ lat: 35.671165, lng: 10.100547 }} zoom={8}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />        
        <Polyline positions={this.state.location} />
                  {
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
                  }  
          </LMap>
      );
        }

 
    }
 
// }

//render(<App />, document.getElementById('root'));

