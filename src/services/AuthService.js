import API, { handleErrors } from ".";
import axios from "axios";
import { API_ENDPOINT_AUTH_STUDENT, AUTH_ENDPOINT_TOKEN_REQUEST } from "../utils/constants";


export async function login(username, password) {
  try {
    const body = {
      credentials: {
        username,
        password,
      }
    }
    return await axios.post(AUTH_ENDPOINT_TOKEN_REQUEST, body)
  } catch (error) {
    handleErrors(error)
  }
}

export async function authStudent(username, password) {
  try {
    const response = login(username, password);
    const token = response.data[0].token;
    API.defaults.headers.common["Authorization"] = `token ${token}`;
    return await API.post(API_ENDPOINT_AUTH_STUDENT);
  } catch (error) {
    handleErrors(error);
  }
};