import http from "./httpService";
import config from "../config/config.json";

const apiEndpoint = config.apiUrl + "/users";

async function register(name, email, password) {
  const response = await http.post(apiEndpoint, {
    email: email,
    name: name,
    password: password,
  });
  return response;
}
export default {
  register,
};
