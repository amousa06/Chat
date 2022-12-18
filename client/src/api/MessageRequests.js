import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getMessages = (id) => API.get(`/message/${id}`);

export const addMessage = (data) => {
    console.log("sent message is ", data)
    return API.post('/message/', data);
}