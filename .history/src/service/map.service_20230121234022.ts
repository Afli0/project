 export default class mapService
{  async  componentDidMount(){
    const url = "http://localhost:5000/map/locations"
    const response = await fetch(url)
    const data = await response.json()
     
  }
}
