import { useEffect, useState } from 'react';
import { getProjects } from '../api/projectsApi';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let retries = 0;
    const maxRetries = 5;

    const fetchProjects = async () => {
      setLoading(true);
      try {
        const data = await getProjects();
        if (data && data.length > 0) {
          setProjects(data);
          setLoading(false);
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(fetchProjects, 3000);
        } else {
          setLoading(false);
        }
      } catch (error) {
        if (retries < maxRetries) {
          retries++;
          setTimeout(fetchProjects, 3000);
        } else {
          setError(error.message);
          setProjects([]);
          setLoading(false);
        }
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
