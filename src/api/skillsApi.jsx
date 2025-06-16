const SKILLS_URL = import.meta.env.VITE_API_SKILLS;

export const getSkills= async () => {
    try {
        const response = await fetch(SKILLS_URL);
        if(!response.ok) throw new Error("Error al obtener las experiencias");
        return await response.json();
    } catch (error) {
        console.error('Error en getExperiences:', error);
        return [];
    }
}

