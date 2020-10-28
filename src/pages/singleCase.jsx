import React,{useState,useEffect,} from 'react';
import {useParams} from "react-router-dom";
import CaseCard from '../components/caseCard';
import constants from "../config/constants";
import caseService from '../services/caseService';
import ImageModal from '../components/imageModal';

export default function SingleCase (props)  {
  const {id} = useParams();

  const [data,setData] = useState(null);
   //handle Image Modal 
  const [selectedImageUrl,setSelectedImageUrl] = useState("");
  const toggleImageModal=(url)=>{
    console.log(url);
    setSelectedImageUrl(url);
  }
  

   
  useEffect(()=>{
    async function loadData(caseId){
      try{
        const foundedCase = await caseService.getACase(caseId);
        if(foundedCase.data){
          setData(foundedCase.data);
        } else{
          return props.history.replace(constants.PATH_NOTFOUND);  
         }
      }catch(error){
        // console.error("Hit an Error", error);
         return props.history.replace(constants.PATH_NOTFOUND);  
      }
    };
   loadData(id);
  },[id,props.history]);

  console.log("rendering....");
  console.log("data",data);

  return  ( data &&
    <>
    <CaseCard  data={data} imageModalId="imageModal" toggleImageModal={toggleImageModal}/>
   <ImageModal url={selectedImageUrl} toggleImageModal={toggleImageModal}/>
  </>
  );
}
