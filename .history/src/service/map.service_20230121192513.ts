
  const axios = require('axios');
export class mapService {
    
  
    static async getAll(): Promise<any> {
        const response = await axios.get('http://localhost:5000/map/locations');
        console.log(response);
        
        return response.data;
    }


}