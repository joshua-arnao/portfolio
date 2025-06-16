const BASE_URL = import.meta.env.VITE_API_PROJECTS;

export const getProjects = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Error al obtener los proyectos");
    return await response.json();
  } catch (error) {
    console.error("Error en getProjects:", error);
    return [];
  }
<<<<<<< HEAD
};
=======
};

export const getProjectById = async (projectId)=>{
    try {
        const response = await fetch(`${BASE_URL}/${projectId}`)
        if(!response.ok){
            throw new Error(`Error en la API ${response.status}`)
            
            
        }
        return await response.json()
    } catch (error) {
        console.error('Error en getProjectById:', error);
        return null
    }
}
>>>>>>> 41833012a4effe04dfd3fc7274f97d2b3fd83fc1
