import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, user) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://localhost:4000/${user}/signup`, { email, password });
      const json = response.data;

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
      } else {
        setError(json.error || 'An unknown error occurred');
      }
    } catch (error) {
      setError(error.response.data.error || 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
