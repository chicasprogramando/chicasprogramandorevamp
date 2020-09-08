import useSWR from "swr";
import endpoints from '../utils/endpoints';


const useComunityData = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data: profileData, error: profileError } = useSWR(
    endpoints.profiles(),
    fetcher
  );
  const { data: specialtiesData, error: specialtiesError } = useSWR(
    endpoints.specialties(),
    fetcher
  );
  const { data: skillsData, error: skillsError } = useSWR(
    endpoints.skills(),
    fetcher
  );

  return {skillsData, specialtiesData, profileData}


}

export default useComunityData;