// REGISTER
import { instanse } from "../config/config";
import { requestPath } from "./requestPath";

export const CREATE_USER = (data) => instanse.post(requestPath.createUser, data); 