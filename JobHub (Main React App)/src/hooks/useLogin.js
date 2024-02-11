import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password, user) => {
    setIsLoading(true)
    setError(null)
    try {
      

    const response = await axios.post(`http://localhost:4000/${user}/login`, {email,password
    })
    const json = await response.data

      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem('user', JSON.stringify(json))
        dispatch({ type: 'LOGIN', payload: json })
        navigate(`/${user}-profile`)
      } else {
        setError(json.error)

      }
      
    } catch (error) {
      setError(error.response.data.error)
      
    } finally{
      setIsLoading(false)
    }
  }

  return { login, isLoading, error }
}