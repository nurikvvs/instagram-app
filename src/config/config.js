import axios from "axios";



const baseURL = "https://cryxxxen.pythonanywhere.com";

export const instanse = axios.create({baseURL});