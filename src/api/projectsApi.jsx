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
};