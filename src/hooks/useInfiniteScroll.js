import { useEffect, useState ,useCallback} from "react";
import axios from "axios";
export function useInfiniteScroll(loader,query, page) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const loaderCallback = useCallback(loader);
  useEffect(()=>{setItems([])},[query]); //Clear Data is query has changed

  useEffect(()=>{
    async function loadData(){
      setLoading(true);
      setError(false);
      let cancel;
      try{
        const res = await loaderCallback(query,page,cancel);
  
        const {data,meta} = res.data;
         
        setItems((prevData) => {
           return [...prevData, ...data]}
           );
        setHasMore(meta.nextPage && meta.nextPage > 1);
        setLoading(false);
       } catch(ex) {
         setLoading(false);
          if (!axios.isCancel(ex)) {
          console.error(ex);
          setError(true);
       }}
  
     return () => cancel(); //this is the cleanup function
    }
    
    loadData()}, [query, page,loaderCallback]);
  return [ loading, error, items, hasMore ];
}
