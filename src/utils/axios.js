import axios from "axios";

const getJSON = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

export default getJSON;
