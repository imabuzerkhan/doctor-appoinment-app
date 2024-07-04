const { default: axios } = require("axios");

const Api_key =process.env.backend_api_key;

const axoisClient = axios.create({
  baseURL:"http://localhost:1337/api",
  headers:{
    'Authorization':`Baerer${Api_key}`
  }
})
const category=()=>axoisClient.get
