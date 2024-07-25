import React from 'react';
import Image from "next/image";
import MapComponent from "@/components/map";
import Contactos from "@/components/contactos";

const FooterMacanazos: React.FC = () => {
  return (
    <footer className="bg-black justify-center pb-10 pt-10 mt-4">
      <div className="bg-black flex mt-4 grow-2 pb-10">
        <div className="Contenedor de imagen flex items-center justify-center sm:w-[30%]">
          <Image
            className=""
            src="/imagotipo macanazos blanco.svg"
            alt="Imagotipo Macanazos"
            width={256}
            height={256}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <Contactos />
        <div className="Contenedor de mapa md:flex hidden md:visible md:w-[30%] justify-center items-center align-center">
          <MapComponent />
        </div>
      </div>
      <span className="text-gray text-xl text-center flex align-center justify-evenly">© 2024 Macanazos</span>
      <a className="text-blue text-center flex align-center justify-evenly" href="https://mabs.dev"> website by mabs.dev</a>
    </footer>
  );
};

export default FooterMacanazos;