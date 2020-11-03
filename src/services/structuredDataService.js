function buildStructuredData(oneCase){
    let sd = {};
    sd[ "@context"]= "https://schema.org";
    sd["@type"] ="NewsArticle";
    let mainEntityOfPage ={};
    mainEntityOfPage["@type"] ="WebPage";
    mainEntityOfPage["@id"]="https://maiddb.com/cases/"+oneCase._id;
    sd.mainEntityOfPage=mainEntityOfPage;
    sd.headline=oneCase.maid.name;
    sd.image=oneCase.files;
    sd.datePublished = oneCase.postDate;
    sd.dateModified = oneCase.postDate;

    const result= JSON.stringify(sd);
    console.log(result);
    return result;
}
function buildStructuredDataForMainPage(){
  let sd={};
  sd[ "@context"]= "https://schema.org";
  const graph=[];
  let organization ={};
  organization["@type"] ="Organization";
  organization["@id"] ="https://www.maiddb.com";
  organization["name"] ="Maid DB";
  organization["url"] ="https://www.maiddb.com";
  graph.push(organization);

    let website ={};
  website["@type"] ="WebSite";
  website["@id"] ="https://www.maiddb.com";
  website["name"] ="Maid DB";
  website["url"] ="https://www.maiddb.com";
  website["inLanguage"] ="zh-HK";
  let potentialAction ={};
  potentialAction["@type"] ="SearchAction";
  potentialAction["target"] ="https://www.maiddb.com/cases/?searh={search_term_string}";
  potentialAction["query"] ="required name=search_term_string";
  website.potentialAction =potentialAction;
  graph.push(website);

  let collectionPage ={};
  collectionPage["@type"] ="CollectionPage";
  collectionPage["@id"] ="https://www.maiddb.com";
  collectionPage["name"] ="Maid Blacklist 外傭黑名單";
  collectionPage["url"] ="https://www.maiddb.com/cases";
  collectionPage["inLanguage"] ="zh-HK";
  collectionPage["isPartOf"]= {
        "@id": "https://www.maiddb.com/"
  };
  graph.push(collectionPage);
  sd["@graph"] =graph;
  const result= JSON.stringify(sd);

  return result;
  
}
export default {
    buildStructuredData,
    buildStructuredDataForMainPage
};