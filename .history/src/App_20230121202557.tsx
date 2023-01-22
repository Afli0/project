



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
export let  list: any[] = []
export function listLocation(data:any){
  console.log(data);
  
  locations=[]
  list.map((ele:any)=>{      
    locations.push({lat:ele.latitude,lng:ele.longitude})
  })
  console.log(locations,'555555555555555555');
}
export default  class App extends React.Component {    
  state = {
    loading: true,
    location: []
  }
  async componentDidMount(){
    const url = "http://localhost:5000/map/locations"
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    data.map((ele:any)=>{      
       locations.push({lat:ele.latitude,lng:ele.longitude})
    })
    this.setState({location: locations, loading: false})
    console.log(this.state);
    
  }

  // const [result, setResult] = useState<any>([]);
  // useEffect(() => {
  //   const api = async () => {
  //     const data = await  mapService.getAll().then((res) => {
  //       console.log(res,'rrrrrrrrrrrrrrrrrr');
        
  //       list= res.data
  //       listLocation(list)
  //       console.log(list);
  //     });

  //   };
  //   api();
  //   // console.log(list,"fffffffff");
  // });
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

 
    }
 
// }

//render(<App />, document.getElementById('root'));

