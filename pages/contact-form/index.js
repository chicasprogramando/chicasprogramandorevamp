import React, { useState, useRef } from "react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import endpoints from "../../utils/endpoints";

const ContactForm = () => {
  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState();
  const [selectedSubject, setSelectedSubject] = useState(null);
  const data = useRef();

  const subjectList = [
    "Quiero reportar un bug",
    "Reportar una situación incomoda",
    "Quiero hacer un evento",
    "Quiero dar una charla/taller",
    "Quiero ser sponsor",
    "Otro",
  ];

  const subjectListOptions = subjectList.map((subject, index) => ({
    key: index,
    text: subject,
    value: subject,
  }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event.target, "aca esta la data?");

    try {
      // const r = await axios.post(endpoints.contact(), {name: 'test', subject: 'algo', email:"algo@user.com" , text: 'saiojdasoidjaosidj'})
      console.log(r, "la resouesta");
    } catch (err) {
      console.log(err, "el error");
    }
  };

  const saveData = (e) => {
    e.preventDefault();
    const data = {
      [e.target.name]: e.target.value
    }
    setFormData((f) => ({ ...f, ...data}));
  };

  const handleSelect = (e, select) => {
    console.log('esta seleccinando entra bien')
    const { value } = select || event.target;
    console.log(value)
    setSelectedSubject(value);
  }

  return (
    <div className="w-full mt-32 h-full flex items-center justify-center">
      <div className="flex flex-col items-center w-1/2">
        <form className="w-full max-w-lg">
          <div className="w-full mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nombre y Apellido
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane Doe"
              ref={data}
              name="name"
              onChange={saveData}
            />
          </div>
          <div className="w-full mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              placeholder="jane@doe.com"
              name="email"
              onChange={saveData}
            />
            <p className="text-red-500 text-xs italic"></p>
          </div>

          <div className="flex flex-wrap w-full mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-subject-select"
            >
              Subject
            </label>
            <Dropdown
              id="grid-subject-select"
              placeholder="Subject"
              fluid
              search
              selection
              options={subjectListOptions}
              className="border border-grayDarkest"
              name="subject"
              onChange={handleSelect}
            />
          </div>
          {selectedSubject === 'Otro' &&  
          
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Agrega tu subject"
              ref={data}
              name="name"
              onChange={saveData}
            />}
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email-content"
            >
              Escribinos tu consulta
            </label>
            <textarea
              id="grid-email-content"
              className="w-full border border-greyDarkest rounded h-48 text-lg p-4"
              name="text"
              onChange={saveData}
            />
          </div>

          <div className="w-full flex justify-center m-8">
            <button
              type="button"
              onClick={handleSubmit}
              type="submit"
              className="border border-purple rounded p-4 text-center w-1/6 mx-4"
            >
              Submit
            </button>
            <button className="border border-purple rounded p-4 text-center mx-4">
              clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
