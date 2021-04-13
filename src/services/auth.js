import axios from "axios";
import { appConfig } from "../env/configuration";

const Promise = require("promise");

export const authService = {
  login,
  getByToken,
  logout,
};

export function handleResponse(response) {
  return response.json().then((data) => {
    if (!response.ok) {
      let error = (data && data.message) || response.statusText;
      switch (response.status) {
        case 400:
          error = "Usuario no valido";
          break;
        case 401:
          error = data.error;
          logout();
          break;
        default:
          break;
      }
      return Promise.reject({ message: error });
    }
    return data;
  });
}

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${appConfig.apiUrl}/login`, requestOptions)
    .then(handleResponse)
    .then((authUser) => {
      return authUser;
    });
}

function getByToken(token) {
  return axios.get("/api/current").then((user) => {
    return user.data;
  });
}

function logout() {
  localStorage.removeItem("token");
}
