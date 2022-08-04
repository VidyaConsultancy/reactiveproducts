import axios from './axios';

export const signup = async (data) => {
  try {
    const response = await axios.post('/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const signin = async (data) => {
  try {
    const response = await axios.post('/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
