import useSWR from "swr";
import React, { useState, useEffect, useRef } from "react";
import endpoints from "../../utils/endpoints";
import Card from "../../components/Card";
import { Dropdown } from "semantic-ui-react";
import ProfileModal from "../../components/ProfileModal";
import LoadingComponent from '../../components/LoadingComponent';
import useComunityData from '../../hooks/useComunityData'

const Comunidad = () => {
  const [queryByName, setQueryByName] = useState("");
  const [profileList, setProfileList] = useState([]);
  const [specialties, setSpecialties] = useState();
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const specialtiesDropdown = useRef();
  const inputQuery = useRef();

  const {skillsData, specialtiesData, profileData} = useComunityData();
  

  useEffect(() => {
    if (profileData?.data) {
      setProfileList(profileData.data);
      setFilteredProfiles(profileData.data);
    }
    if (specialtiesData?.data) setSpecialties(specialtiesData.data);
    if (skillsData?.data) setSkills(skillsData.data);
    setLoading(false);
  }, [profileData, specialtiesData, skillsData]);

  useEffect(() => {
    
    let filtro = profileList;
    if (queryByName !== "") {
      filtro = profileList.filter((p) =>
        p.name.toLowerCase().includes(queryByName.toLowerCase())
      );
      
    }
    if (selectedSkills.length) {
      const profileSkills = filtro.map((p) => {
        const skills = p.skill.map((s) => s.id);
        return { id: p.id, skills };
      });

      const filteredProfiles = profileSkills.filter((p) =>
        selectedSkills.every((i) => p.skills.includes(i))
      );

      filtro = filtro.filter((p) =>
        filteredProfiles.find((f) => f.id === p.id)
      );
    }
    if (selectedSpecialties.length) {
      const profileSpecialties = filtro.map((p) => {
        const specialties = p.specialty.map((s) => s.id);
        return { id: p.id, specialties };
      });

      const filteredSpecialties = profileSpecialties.filter((p) =>
        selectedSpecialties.every((i) => p.specialties.includes(i))
      );

      filtro = filtro.filter((p) =>
        filteredSpecialties.find((f) => f.id === p.id)
      );
    }
    setFilteredProfiles(filtro);
  }, [queryByName, selectedSkills, selectedSpecialties]);

  const handleNameQuery = (e) => {
    setQueryByName(e.target.value);
  };

  const handleSelectSkill = (e, result) => {
    const { value } = result || event.target;
    setSelectedSkills(value);
  };

  const handleSelectSpecialty = (e, result) => {
    const { value } = result || event.target;
    setSelectedSpecialties(value);
  };

  const onDeleteFilters = (e) => {
    specialtiesDropdown.current.value = [];
    setSelectedSpecialties([]);
    setSelectedSkills([]);
    setQueryByName("");
    inputQuery.current.value = ""
  };

  const specialtiesOptions = specialties?.map((specialty) => ({
    key: specialty.id,
    text: specialty.description,
    value: specialty.id,
  }));

  const skillsOptions = skills?.map((skill) => ({
    key: skill.id,
    text: skill.description,
    value: skill.id,
  }));


  return (
    <div className="m-12 h-full">
      {modalOpen && <ProfileModal />}
      { !loading ? filteredProfiles && (
        <div>
          <h1 className="text-purple text-xl mb-8">Nuestra Comunidad</h1>
          <div className="flex flex-row h-12 items-end ">
            <input
              className=" mx-4 focus:outline-none border-b border-gray-300 py-2 px-4 block w-full appearance-none leading-normal"
              type="text"
              placeholder="Buscar por nombre"
              onChange={handleNameQuery}
              ref={inputQuery}
            />

            <Dropdown
              placeholder="Select specialties"
              ref={specialtiesDropdown}
              fluid
              multiple
              search
              selection
              onChange={handleSelectSpecialty}
              options={specialtiesOptions}
              value={selectedSpecialties}
              style={{
                border: "none",
                "borderBottom": "black solid 1px",
                "borderRadius": 0,
              }}
              className=" mx-4 "
            />

            <Dropdown
              placeholder="Select skills"
              fluid
              multiple
              search
              selection
              options={skillsOptions}
              onChange={handleSelectSkill}
              value={selectedSkills}
              style={{
                border: "none",
                "borderBottom": "black solid 1px",
                "borderRadius": 0,
              }}
              className=" mx-4 "
            />
            <button
              onClick={onDeleteFilters}
              className="md:ml-4 w-2/6 bg-transparent hover:bg-purple text-white-700 text-purple hover:text-white py-2 px-4 hover:border-transparent rounded-full"
            >
              Borrar filtros
            </button>
          </div>
          <div className="mt-20 flex flex flex-wrap" key={filteredProfiles}>
            {filteredProfiles?.map((profile) => (
              <Card key={profile.id} profile={profile} onClick={() => console.log('click funciona la card')} />
            ))}
          </div>
        </div>
      ) : <LoadingComponent/> }
    </div>
  );
};

export default Comunidad;
