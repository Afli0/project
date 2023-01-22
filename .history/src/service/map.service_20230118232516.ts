import http from "../http-common";

const getAll = () => {
    return http.get<Array<any>>("/locations");
  };

  const mapService = {
    getAll,
  };
  
  export default mapService;