const es2015 = require('babel-preset-es2015');
const presetReact = require('babel-preset-react');
const axios =require("axios");

// const apiUrl="http://192.168.8.103:3001/api";
const apiUrl="https://api-dot-maiddb.df.r.appspot.com/api";

const apiEndpoint = apiUrl + "/cases";

async function getAllIds(){
  const response = await axios.get(apiEndpoint+"/id?all");
  return response.data;
}

require("@babel/register")
({
  presets: [es2015, presetReact],
  plugins: ["@babel/plugin-proposal-object-rest-spread","@babel/plugin-syntax-jsx"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;


 async function generateSitemap() {
  try{

    const caseIds = await getAllIds();
    const idMap = caseIds.map( item => ({id:item}));
    const paramsConfig = {
      "/cases/:id": idMap
    };

    return (
    new Sitemap(router)
    .applyParams(paramsConfig)
    .build("https://www.maiddb.com")
  //Save it wherever you want
    .save("/Users/apple/Workspace/react/maiddb-web/public/sitemap.xml")
    );
  }catch(ex){
    console.error(ex);
  }
 }

generateSitemap();
// export default {
//   generateSitemap
// }
