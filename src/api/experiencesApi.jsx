const EXPERIENCES_URL = import.meta.env.VITE_API_EXPERIENCES

export const getExperiences = async () => {
  try {
    const response = await fetch(EXPERIENCES_URL);
    if(!response.ok) throw new Error('Error al obtener las experiencias');
    return await response.json()
  } catch (error) {
    console.error('Error en getExperiences', error);
    
  }
}
