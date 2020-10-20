import http from "./httpService";
import config from "../config/config";
import tokenService from "./tokenService";
const apiEndpoint = config.apiUrl + "/auth";

async function login(email, password) {
  const response = await http.post(apiEndpoint, {
    email: email,
    password: password,
  });
  return response;
}
function logout() {
  tokenService.removeToken();
}
export default {
  login,
  logout,
};
