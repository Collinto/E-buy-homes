import React, {useState, useEffect} from 'react';
import axios from "axios";

const useFetch = (url) => {
  const [propertyData, setPropertyData] = useState([]);
  const [error, setError] = useState(null)
  const [loading, setLoading] =useState(true)

  useEffect(()=>{
    const fetchProperties = async () => {
      try{
         // This fetches all 50 Real Estate Properties and their Specification
          const response = await axios.get(url);
          setPropertyData(response.data);

      }
      catch (error) {
        setError(error);
      }
      finally{
        setLoading(false)
      }
  };

  fetchProperties();
}, [url]);

  return {propertyData, error, loading}
  
}

export default useFetch
