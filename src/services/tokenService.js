import jwtDecode from "jwt-decode";

const TOKEN_KEY = "userToken";
const USER_KEY = "currentUser";
function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
function getUser() {
  return localStorage.getItem(USER_KEY);
}
function saveToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
  if (token) {
    localStorage.setItem(USER_KEY, jwtDecode(token));
  }
}
function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
export default {
  getToken,
  getUser,
  saveToken,
  removeToken,
};
