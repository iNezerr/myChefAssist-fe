// src/services/apiService.ts

import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // replace with your Django API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRecipes = async () => {
  try {
    const response = await apiClient.get('/recipes/');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
