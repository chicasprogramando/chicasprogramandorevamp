import useSWR from "swr";
import React, { useState, useEffect } from "react";
import endpoints from "../../utils/endpoints";
import Card from "../../components/Card";

const Comunidad = () => {
  const [queryByName, setQueryByName] = useState("");
  const [profileList, setProfileList] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(endpoints.profiles(), fetcher);

  useEffect(() => {
    if(data?.data) setProfileList(data.data)

  }, [data])

  useEffect(() => {
    let filtro;
    if(queryByName !== ""){
      filtro = profileList.filter(p => p.name.toLowerCase().includes(queryByName.toLowerCase()))
    } else {
      filtro = profileList
    }
    setFilteredProfiles(filtro)
  }, [queryByName, profileList])

  

  const handleNameQuery = (e) => {
    setQueryByName(e.target.value);
  };

  return (
    <div className="m-12 h-full">
      <h1 className="text-purple text-xl mb-8">Nuestra Comunidad</h1>
      <div className="flex flex-row">
        <input
          className=" mx-4 focus:outline-none border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          placeholder="Buscar por nombre"
          onChange={handleNameQuery}
        />
        <div className="flex flex-row mx-4 w-full border-b border-gray-300">
          <input
            className="focus:outline-none   py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Buscar por especialidad"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <div className="flex flex-row mx-4 w-full border-b border-gray-300">
          <input
            class="focus:outline-none py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="Buscar por skills"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="20px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <button className="md:ml-4 w-2/6 bg-gradient-to-r from-purple to-lilac hover:bg-indigo-700 text-white py-2 px-4 rounded-full">
          Filtrar
        </button>
        <button className="md:ml-4 w-2/6 bg-transparent hover:bg-purple text-white-700 text-purple hover:text-white py-2 px-4 hover:border-transparent rounded-full">
          Borrar filtros
        </button>
      </div>
      <div className="mt-20 flex flex flex-wrap" key={filteredProfiles}>
        {filteredProfiles?.map((profile) => (
          <Card profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Comunidad;
