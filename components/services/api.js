// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: ' http://localhost:3000', 
});

export const getData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const submitForm = async (formData) => {
  try {
    const response = await api.post('/submit', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
