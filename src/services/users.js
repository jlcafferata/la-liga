import { appConfig } from "../env/configuration";
import {handleResponse} from "./auth";

export const usersService = {
  update,
  _delete,
};



function update({user}) {
  const {id, email, first_name, last_name}=user;
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, first_name, last_name }),
  };

  return fetch(`${appConfig.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}

function _delete(id) {
  const requestOptions = {
    method: "DELETE"
  };

  return fetch(`${appConfig.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  );
}
