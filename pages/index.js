import Head from "next/head";
import React, {useContext} from 'react';
import {Auth} from '../context/AuthContext';
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

export default function Home() {
  const contexto = useContext(Auth);
  console.log(contexto, 'el contexto en la home');

  return (
    <>
      <Banner />
      <div className={styles.container}>
        <div className="max-w-sm w-3/5 lg:max-w-full lg:flex flex-row">
        <img
            className="w-full/4 max-h-full lg:h-64 lg:w-full/5 flex-none bg-gray rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src="/chicas.png"
            title="Woman coding"
          />
          <div className=" bg-gray rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal p-8 ">
            <div className="mb-8">
              <div className="text-purple font-bold text-xl mb-2">
                Que es Chicas Programando?
              </div>
              <p className="text-gray-700 text-base">
                Es una comunidad que busca hacer mas diversos los proyectos de
                tecnologia, abriendo espacios de capacitacion y creando una
                plataforma para visibilizar talento tecnologico de mujeres y
                personas no binarias.
              </p>
            </div>
          </div>
         
        </div>

        <div className="max-w-sm w-3/5 lg:max-w-full lg:flex flex-row mt-20">
          <div className=" bg-gray rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal p-8 ">
            <div className="mb-8">
              <div className="text-purple font-bold text-xl mb-2">
                Que hace Chicas Programando?
              </div>
              <p className="text-gray-700 text-base">
                Organizamos charlas, workshops y sesiones de coding con el
                objetivo de acercar conocimientos y generar espacios de debate
                con y para la comunidad
              </p>
            </div>
          </div>
          <img
            className="w-full/4 max-h-full lg:h-64 lg:w-full/5 flex-none bg-gray rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            src="/chicas.png"
            title="Woman coding"
          />
        </div>

        <div className="flex flex-row justify-around m-12">
        <div className="w-2/5 rounded overflow-hidden">
            <img
              className="w-10 mb-4"
              src="/logo.jpg"
              // alt="Sunset in the mountains"
            />
            <div>
              <div className="font-bold text-xl mb-2">Charlas</div>
              <p className="text-gray-700 text-base m-0 w-3/5">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="w-2/5 rounded overflow-hidden ">
            <img
              className="w-10 mb-4"
              src="/logo.jpg"
              // alt="Sunset in the mountains"
            />
            <div>
              <div className="font-bold text-xl mb-2">Workshops</div>
              <p className="text-gray-700 text-base w-3/5">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="w-2/5 rounded overflow-hidden ">
            <img
              className="w-10 mb-4"
              src="/logo.jpg"
              // alt="Sunset in the mountains"
            />
            <div>
              <div className="font-bold text-xl mb-2">Sesiones de coding</div>
              <p className="text-gray-700 text-base w-3/5">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
