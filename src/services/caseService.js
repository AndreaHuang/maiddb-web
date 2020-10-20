import axios from "axios";

import http from "./httpService";
import config from "../config/config";

const apiEndpoint = config.apiUrl + "/cases";


async function getCases(query, page, cancel){
  const params={};
  if(query){
    params.search=query;
  }
  if(page){
    params.page=page;
    params.limit = config.recordPerPage;
  }
  return await http.get(apiEndpoint,{params, cancelToken: new axios.CancelToken((c) => (cancel = c))});
}

async function createNewCase(newCase) {
  return await http.post(apiEndpoint, newCase);
}
// deleteCase = async (caseId) => {
//   return await http.delete(apiEndpoint + "/" + caseId);
// };

export default {
  getCases,
  createNewCase,
  // deleteCase,
};
