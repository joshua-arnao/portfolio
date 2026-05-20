import { useEffect, useState } from 'react';
import { getExperiences } from '../api/experiencesApi';

export const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let retries = 0;
    const maxRetries = 5;

    const fetchExperiences = async () => {
      setLoading(true);
      try {
        const data = await getExperiences();
        if (data && data.length > 0) {
          setExperiences(data);
          setLoading(false);
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(fetchExperiences, 3000);
        } else {
          setLoading(false);
        }
      } catch (error) {
        if (retries < maxRetries) {
          retries++;
          setTimeout(fetchExperiences, 3000);
        } else {
          setError(error.message);
          setExperiences([]);
          setLoading(false);
        }
      }
    };

    fetchExperiences();
  }, []);

  return { experiences, loading, error };
};
