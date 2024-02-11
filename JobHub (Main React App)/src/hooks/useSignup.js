import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();
  const navigate=useNavigate()


  const signup = async (email, password, user) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(`http://localhost:4000/${user}/signup`, { email, password });
      const json = response.data;

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
        navigate(`/${user}-profile`)
      } else {
        setError(json.error || 'An unknown error occurred');
      }
    } catch (error) {
      setError(error.response.data.error)
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
