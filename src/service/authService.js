
import * as request from './requester'

export const login = (email, password) => request.post('http://localhost:3030/users/login', {email,password})

export const register = (email, password) => request.post('http://localhost:3030/users/register', {email,password})

export const logout = async (accessToken) => { 
  const response = await  fetch('http://localhost:3030/users/register', {
        headers: { 
            'X-Authorization' : accessToken
        }
    })

    return response 
}

