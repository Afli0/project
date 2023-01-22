import http from "../http-common";

const getAll = () => {
    return http.get<Array<any>>("http://localhost:5000/api/locations");
  };

  const mapService = {
    getAll,
  };
  
  export default mapService;