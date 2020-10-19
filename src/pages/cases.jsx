import React, {useState ,useRef,useCallback} from "react";
import queryString from "query-string";

import CaseCard from "../components/caseCard";
import SearchBox from "../components/searchBox";
import caseService from "../services/caseService";

import { useInfiniteScroll } from "../hooks/useInfiniteScroll";


export default function Cases (props) {

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
    <div className="container">
      <SearchBox name="search" value={query} />
      <div className="card-columns">
        {items.map((item, idx) => 
            <CaseCard key={idx} data={item} />)
        }
        {hasMore && <div ref={lastCase}></div>}
      </div>
      {loading &&<div>loading...</div>}
      {error &&<div>error...</div>}
      {items.length===0 &&<div> 0 records found.</div> }
    </div>
  );
  // }
};

