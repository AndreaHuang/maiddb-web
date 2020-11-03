import axios from "axios";

import http from "./httpService";
import config from "../config/config";

const apiEndpoint = config.apiUrl + "/cases";


const viewMore = "<span class='viewMore' > ...View More</span>";
const viewLess = "<p><span class='viewLess'> ...View Less</span></p>";

function handleViewMore(data){

    const splitted = data.split("</p>");
    if(splitted.length ===1){ // There is no p
      return data;
    }

    if(splitted.length===2 && !splitted[1]){ //there is only 1 p 
      return data;
    }
    splitted.push(viewLess);

    splitted[0] = splitted[0] + viewMore;

    const joined = splitted.join("</p>");
    return joined;
}


async function getACase(id){
  return await http.get(apiEndpoint+"/"+id);
}


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
  newCase.details = handleViewMore(newCase.details);

  return await http.post(apiEndpoint, newCase);
}
// deleteCase = async (caseId) => {
//   return await http.delete(apiEndpoint + "/" + caseId);
// };

export default {
  getCases,
  createNewCase,
  getACase,
  // deleteCase,
};
