<<<<<<< HEAD

=======
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
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
<<<<<<< HEAD
        }

        fetchProjects()
        return{projects, loading, error}
    }, []);

  return (
    <div>useProjects</div>
  )
}
=======
        };

        fetchProjects()
    }, []);

  return{projects, loading, error}
}

>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
