import { useEffect, useState } from 'react';
import { getSkills } from '../api/skillsApi';

export const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let retries = 0;
    const maxRetries = 5;

    const fetchSkills = async () => {
      setLoading(true);
      try {
        const data = await getSkills();
        if (data && data.length > 0) {
          setSkills(data);
          setLoading(false);
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(fetchSkills, 3000);
        } else {
          setLoading(false);
        }
      } catch (error) {
        if (retries < maxRetries) {
          retries++;
          setTimeout(fetchSkills, 3000);
        } else {
          setError(error.message);
          setSkills([]);
          setLoading(false);
        }
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
};
