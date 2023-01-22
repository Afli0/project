import http from "../http-common";

const getAll = () => {
  console.log('bbbbbbbbbbbbbbbbbbbbbbbb');
  
    return http.get<Array<any>>("http://localhost:5000/map/locations");
  };

  const mapService = {
    getAll,
  };
  
  export default mapService;