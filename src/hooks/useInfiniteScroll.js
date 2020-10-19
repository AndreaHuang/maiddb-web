import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config/config.json"

export function useInfiniteScroll(url,query, page) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(()=>{setItems([])},[query]); //Clear Data is query has changed

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
  
    axios({
      method: "GET",
      url: url,
      params: { search: query, page: page, limit: config.recordPerPage },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        const {data,meta} = res.data;
       
        setItems((prevData) => {
           return [...prevData, ...data]}
           );
        setHasMore(meta.nextPage && meta.nextPage > 1);
        setLoading(false);
      })

      .catch((ex) => {
        if (axios.isCancel(ex)) return; //ignore cancel
        console.error(ex);
        setLoading(false);
        setError(true);
      });
    return () => cancel();
  }, [query, page]);
  return [ loading, error, items, hasMore ];
}
