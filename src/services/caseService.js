import http from "./httpService";
import config from "../config/config.json";

const apiEndpoint = config.apiUrl + "/cases";

async function getCases() {
  return await http.get(apiEndpoint);
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
