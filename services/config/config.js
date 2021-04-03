import axios from "axios";
import getEnvVars from "../../environment";
const { BASE_URL } = getEnvVars();
const instance = axios.create({
  baseURL: BASE_URL,
});
export default instance;
