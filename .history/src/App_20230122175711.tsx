



import React, { Component, useEffect} from 'react';
import './App.css';
import { Map as LMap, TileLayer, Marker, Polyline,Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import { render } from 'react-dom';

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
    handleClick( e:any) {    
    fetch('http://localhost:5000/map/create-loaction', {  // Enter your IP address here
    method: 'POST', 
    mode: 'cors', 
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({"latitude":e.latlng.lat,"longitude":e.latlng.lng}) // body data type must match "Content-Type" header
    })
   locations.push({lat:e.latlng.lat,lng:e.latlng.lng})
    // render(<App />, document.getElementById('root'));
     }

  componentDidMount() {
    fetch("http://localhost:5000/map/locations")
      .then(res => res.json())
     
      .then(json => {
        locations=[]
        json.map((ele:any)=>{      
               locations.push({lat:ele.latitude,lng:ele.longitude})
            })
        this.setState({ location: locations, loading: false })
      });

   
     
      
  }
  componentDidUpdate(prevState:any) {
    console.log(locations,'locationslocations');
    
  
  }
  render(){
    if(this.state.loading){
      return<div>loading ...</div>
    }
    
  return (
        <LMap center={{ lat: 35.671165, lng: 10.100547 }} zoom={8}
        onClick={this.handleClick}>
        <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />        
        <Polyline positions={locations} onChange={(e:any) => {
          console.log(e,'55555555555555555555');
          
          this.setState({lat:e.latlng.lat,lng:e.latlng.lng})}}/>
                  {
                      locations.map((marker, index) => (
                          <Marker 
                              position={[marker.lat, marker.lng]} 
                              key={index}
                            
                              icon={icon}
                          />
                      ))
                  }  
          </LMap>
      );
        }

 
    }
 
// }

//

