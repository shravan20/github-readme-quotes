import { useState, useCallback, useEffect } from "react";

import { serverUrl } from "../../components/Constants/urlConfig";

const useQuoteAuthors = () => { 
    const originUrl = serverUrl;
    const [quoteAuthors, setQuoteAuthors] = useState([]);
    const [loadingQuoteAuthors, setLoadingQuoteAuthors] = useState(false);

    const fetchQuoteAuthors = useCallback(async () => {
        setLoadingQuoteAuthors(true);
        try {
            const response = await fetch(`${originUrl}/authors`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data) {
                setQuoteAuthors(data);
            }
        } catch (error) {
            console.error("Failed to fetch quote authors:", error);
        } finally {
            setLoadingQuoteAuthors(false);
        }
    }, [originUrl]);
    
    useEffect(() => {
        fetchQuoteAuthors();
    }, [fetchQuoteAuthors]);
  
    return {
      quoteAuthors,
      loadingQuoteAuthors
    };
}

export default useQuoteAuthors;