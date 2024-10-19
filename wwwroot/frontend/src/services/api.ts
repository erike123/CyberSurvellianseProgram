import axios from 'axios';
import baseUrl from './baseUrl';


export const testApi = async (values) => {
    const url = `${baseUrl}/testapiendpoint`;
    const data = "Hello, this is a test string";
    
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Set the correct content type
            },
            body: data // Send the string as JSON
        });
        const result = await res.json();
        console.log('DATA LOG FROM API.ts', result);
        return result;
    } catch (error) {
        console.error('Error calling API:', error);
        throw error; // Re-throw the error for further handling if needed
    }
  };