import axios from "./axios";

export const getAllProducts = async () => {
  try {
    const response = await axios.get('/products');
    return response.data;
  } catch (error) {
    return error.data
  }
}

export const createProduct = async (data) => {
  try {
    const response = await axios.post('/products', data);
    return response.data;
  } catch (error) {
    return error.data
  }
}

export const modifyProduct = async (data) => {
  try {
    const response = await axios.put(`/products/${data.id}`, data);
    return response.data;
  } catch (error) {
    return error.data
  }
}

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error.data
  }
}

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return error.data
  }
}
