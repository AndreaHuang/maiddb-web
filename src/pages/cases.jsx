import React, { useState, useRef, useCallback } from "react";
import queryString from "query-string";

import CaseCard from "../components/caseCard";
import SearchBox from "../components/searchBox";
import caseService from "../services/caseService";
import ImageModal from '../components/imageModal';
import { Helmet } from "react-helmet";
import Message from "../components/message";

import { useInfiniteScroll } from "../hooks/useInfiniteScroll";



export default function Cases(props) {
  // handle search Keyword
  const queryObj = queryString.parse(props.location.search);
  const [query] = useState(
    queryObj ? queryObj.search : ""
  );
  const [page, setPage] = useState(1);
  const [loading, error, items, hasMore] = useInfiniteScroll(
    caseService.getCases,
    query,
    page
  );
  //handle Image Modal 
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const toggleImageModal = (url) => {
    console.log(url);
    setSelectedImageUrl(url);
  }
  //handle infinit scroll
  const lastCaseRef = useRef();
  const lastCase = useCallback((node) => {
    if (loading) return;// if already loading, do nothing
    //point lastRef to the new lastCase
    if (lastCaseRef.current) lastCaseRef.current.disconnect();
    lastCaseRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) { //if the last case is visible now,
        setPage(prevPage => prevPage + 1);
      }
    })
    if (node) lastCaseRef.current.observe(node);
  }, [loading, hasMore]);

  return (
    <>
      <SearchBox name="search" value={query} />
      {loading && <Message message="loading"></Message>}
      {!loading && <Message message={items.length + " cases are found."}></Message>}
      <div className="card-container">
        {items.map((item, idx) =>
          <CaseCard key={idx} data={item} imageModalId="imageModal" toggleImageModal={toggleImageModal} />)
        }
        {hasMore && <div ref={lastCase}></div>}
      </div>

      { error && <Message message="error" messageType="error"></Message>}
      <ImageModal url={selectedImageUrl} toggleImageModal={toggleImageModal} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maid Blacklist</title>
        <meta name="description" content="外傭黑名單。Full blacklist of maid aka domestic helper. " />
        <meta name="keywords" content="maid,helper,fdh,blacklist,女傭,外傭,姐姐,工人,黑名單,女佣,外佣,姐姐,黑名单"></meta>
      </Helmet>
    </>
  );
  // }
};

