import React, {useState ,useRef,useCallback} from "react";
import queryString from "query-string";

import CaseCard from "../components/caseCard";
import SearchBox from "../components/searchBox";
import caseService from "../services/caseService";
import ImageModal from '../components/imageModal';


import { useInfiniteScroll } from "../hooks/useInfiniteScroll";



export default function Cases (props) {
 // handle search Keyword
const queryObj=queryString.parse(props.location.search);
  const [query] = useState(
    queryObj?queryObj.search:""
  );
  const [page, setPage] = useState(1);
  const [ loading, error, items, hasMore ]= useInfiniteScroll(
    caseService.getCases,
    query,
    page
  );
//handle Image Modal 
const [selectedImageUrl,setSelectedImageUrl] = useState("");
const toggleImageModal=(url)=>{
  console.log(url);
   setSelectedImageUrl(url);
}
//handle infinit scroll
const lastCaseRef  = useRef(); 
const lastCase = useCallback((node)=>{
  if(loading) return;// if already loading, do nothing
  //point lastRef to the new lastCase
  if(lastCaseRef.current) lastCaseRef.current.disconnect();
  lastCaseRef.current = new IntersectionObserver(entries=>{
    if(entries[0].isIntersecting && hasMore) { //if the last case is visible now,
      setPage(prevPage=>prevPage+1);
    }
  })
  if(node) lastCaseRef.current.observe(node);
},[loading,hasMore]);

  return (
    <>
      <SearchBox name="search" value={query} />
      <div className="card-container">
        {items.map((item, idx) => 
            <CaseCard key={idx} data={item} imageModalId="imageModal" toggleImageModal={toggleImageModal}/>)
        }
        {hasMore && <div ref={lastCase}></div>}
      </div>
      {loading &&<div>loading...</div>}
      {error &&<div>error...</div>}
      {items.length===0 &&<div> 0 records found.</div> }
      <ImageModal url={selectedImageUrl} toggleImageModal={toggleImageModal}/>

    </>
  );
  // }
};

