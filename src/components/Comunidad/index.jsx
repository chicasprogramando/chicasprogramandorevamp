import React from "react";
import { useFetch } from "../../helpers/api";

const Comunidad = () => {
  const url = `${process.env.REACT_APP_API_URL}/api/specialty`;
  console.log(url);
  const { data } = useFetch(url);
  console.log("data", data);
  return <div>Comunidad</div>;
};

export default Comunidad;
