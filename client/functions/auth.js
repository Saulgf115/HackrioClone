import axios from 'axios'

export const registerUser =  (name,email,password) => {
    return  axios.post(`http://localhost:8000/api/register`,{
        name,
        email,
        password
    },{})
}