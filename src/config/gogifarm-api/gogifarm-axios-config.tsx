import axios, { AxiosResponse } from "axios";
import getEnv from '../../env'

const GogifarmInstance = axios.create({
  baseURL: getEnv()?.APP_GOGIFARM_API_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

export default GogifarmInstance