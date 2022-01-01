import axios from "axios";

const baseURL = "https://api.thecatapi.com/v1";

export const CatsService = axios.create({
  baseURL,
});
