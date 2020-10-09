import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
  //check if client error;
  const clientError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!clientError) {
    toast.error("Unexpected Error.");
    logger.logError(error);
    return;
  }
  //return the client error to each consumer
  return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
};
