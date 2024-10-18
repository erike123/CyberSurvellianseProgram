import axios from 'axios';
import baseUrl from './baseUrl';


export const testApi = async (prompt) => {
    try {
      const response = await axios.post(`${baseUrl}/testapi`, { 
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt)
        }); // Send the prompt in the body
      const data = response.data;
      console.log('DATA LOG', data);
      return data;
    } catch (error) {
      console.error('Error calling API:', error);
      throw error; // Re-throw the error for further handling if needed
    }
  };