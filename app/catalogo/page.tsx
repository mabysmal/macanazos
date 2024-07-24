import React from 'react';
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { getAllFrontMatter, getPaquetesAllFrontMatter } from "@/utilities/fileReading";
import './styles.css'
import MapComponent from "@/components/map";
import Contactos from "@/components/contactos";
import FilteredProductGrid from "@/components/filtro-categoria";

export default function Home() {
  const allFrontmatters = getAllFrontMatter();
  const allPaquetesFrontmatters = getPaquetesAllFrontMatter();

  return (
    <main>
      <HamburgerMenu />
      
      <div id='contCatalogo' className='bg-blue text-white text-3xl font-bold text-center py-8'>
        <div id='contPaquetes' className=''>
          <h2 className="text-6xl underline decoration-orange">Paquetes Promocionales</h2>
          <FilteredProductGrid items={allPaquetesFrontmatters} type="paquetes" />
        </div>
        <div id='contProductos' className='pt-14'>
          <h2 className="text-6xl underline decoration-orange">Productos</h2>
          <FilteredProductGrid items={allFrontmatters} type="productos" />
        </div>
      </div>

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
    </main>
  );
}