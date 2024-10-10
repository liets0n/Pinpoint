import axios from 'axios'

const API = axios.create({
  baseURL: 'https://api.ipdata.co'
})

export { API }
