import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProjectById } from "../api/projectsApi";

export const useProjectsId = () => {
  const { projectId } = useParams()
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectById = async () =>{
        try {
            const data = await getProjectById(projectId)

            if (data) {
              setProjects(data)
              
            } else {
              setError('No se encontró el proyecto.')
            }
        } catch (error) {
            console.error('Error al cargar el proyecto:', error);
            setError('Error al cargar el proyecto')
        } finally {
          setLoading(false)
        }
    }

    fetchProjectById()
    
  }, [projectId]);
  
  return{projects, loading, error}
}
