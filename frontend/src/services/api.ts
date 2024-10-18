import axios from 'axios';
import baseUrl from './baseUrl';


export const testApi = async (values) => {
    try {
        const res = await axios.post(`${baseUrl}/testapi`, { prompt })
        const data = res.data;
        console.log('DATA LOG', data);
        return data;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error; // Re-throw the error for further handling if needed
    }
  };