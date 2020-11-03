import React, { useState, useEffect, } from 'react';
import { useParams } from "react-router-dom";
import CaseCard from '../components/caseCard';
import constants from "../config/constants";
import caseService from '../services/caseService';
import ImageModal from '../components/imageModal';
import { Helmet } from "react-helmet";
import structuredDataService from "../services/structuredDataService";
export default function SingleCase(props) {
  const { id } = useParams();

  const [data, setData] = useState(null);
  //handle Image Modal 
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const toggleImageModal = (url) => {
    console.log(url);
    setSelectedImageUrl(url);
  }



  useEffect(() => {
    async function loadData(caseId) {
      try {
        const foundedCase = await caseService.getACase(caseId);
        if (foundedCase.data) {
          setData(foundedCase.data);
        } else {
          return props.history.replace(constants.PATH_NOTFOUND);
        }
      } catch (error) {
        // console.error("Hit an Error", error);
        return props.history.replace(constants.PATH_NOTFOUND);
      }
    };
    loadData(id);
  }, [id, props.history]);

  console.log("rendering....");
  console.log("data", data);

  return (data &&
    <>
      <CaseCard data={data} imageModalId="imageModal" toggleImageModal={toggleImageModal} />
      <a href="/cases">View All</a>
      <ImageModal url={selectedImageUrl} toggleImageModal={toggleImageModal} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.maid.name}</title>
        <meta name="description" content="外傭黑名單。Full blacklist of maid aka domestic helper. " />
        <meta name="keywords" content={data.maid.name + ",maid,helper,fdh,blacklist,女傭,外傭,姐姐,工人,黑名單,女佣,外佣,姐姐,黑名单"}></meta>
        <script type="application/ld+json">
          {structuredDataService.buildStructuredData(data)}
        </script>
      </Helmet>
    </>
  );
}
