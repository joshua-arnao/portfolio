import { useEffect, useState } from "react";
import { getProjects } from "../api/projectsApi";


export const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () =>{
            setLoading(true)

            try {
                const data = await getProjects();
                setProjects(data)
            } catch(error){
                setError(error.mesage)
            } finally {
                setLoading(false)
            }
        };

        fetchProjects()
    }, []);

  return{projects, loading, error}
}

