import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://store-api.glitch.me/api/products",
});

export default instance;
