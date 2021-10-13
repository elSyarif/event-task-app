
import axios from 'axios';

const API = axios.create({ baseURL : "https://event-task-api.herokuapp.com/api"})

//set headers token
//API.interceptors.request.use((req) => {
//  if (localStorage.getItem('profile')) {
//    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//  }

//  return req;
//});

// user 
export const signin = (formData) => {
	API.post('/user/auth', formData)
}

// event task 

// event scheduler

// todo