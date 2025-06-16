import { useEffect, useState } from "react";
import { getSkills } from "../api/skillsApi";

export const useSkills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkills = async () => {
            setLoading(true);

            try{
                const data = await getSkills();
                setSkills(data)
            } catch (error) {
                setError(error.mesage)
            } finally {
                setLoading(false)
            }
        }

        fetchSkills()
    }, []);


  return {skills, loading, error}
}
