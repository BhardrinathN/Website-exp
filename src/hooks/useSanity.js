import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanity';

export function useSanity(query, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    
    async function fetchData() {
      try {
        setLoading(true);
        const result = await sanityClient.fetch(query, params);
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Sanity fetch failed, using fallback data:', err.message);
          setError(err);
          setData(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [query, JSON.stringify(params)]);

  return { data, loading, error };
}
