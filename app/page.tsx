'use client';
import Image from "next/image";
import { attributes, react as HomeContent } from "../content/home.md";
import { useEffect, useState } from "react";

export default function Home() {
  console.log(attributes)
  let { title, cats } = attributes

  const images = [
    "/banner/banner_macanazos.jpg",
    "/banner/banner_lona.jpg",
    "/banner/banner_ablumgrad.jpg",
    "/banner/banner_empresarial.jpg",
    "/banner/banner_tec.jpg",
    "/banner/banner_comic.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <main>
      <header>
        <nav className="flex">
          <div id="menuInicio">
            <ul className={`sidebar fixed top-[0] right-[0] h-screen w-64 bg-white [box-shadow:-10px_0_10px_rgba(0,_0,_0,_0.1)] flex flex-col items-start ${sidebarVisible ? 'flex' : 'hidden'}`}>
              <li className="w-full" onClick={hideSidebar}>
                <a href="#">
                  <svg id="closeMobileMenu" xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="#f68920">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                  </svg>
                </a>
              </li>
              <li className="w-full"><a className="w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Inicio</a></li>
              <li className="w-full"><a className="w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Productos</a></li>
              <li className="w-full"><a className="w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Productos</a></li>
              <li className="w-full"><a className="w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Reseñas</a></li>
              <li className="w-full"><a className="w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Ayuda</a></li>
              <li className="w-full"><a className="w-full px-8 no-underline flex items-center hover:bg-gray" href="a">Contacto</a></li>
            </ul>
            <ul className="w-full flex justify-end items-center pt-4">
              <li className="h-full px-8 no-underline items-center flex" onClick={() => setSidebarVisible(!sidebarVisible)}>
                <a href="#">
                  <svg id="openMobileMenu" xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 -960 960 960" width="3rem" fill="#f68920">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </a>
              </li>
              <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex" href="a">Inicio</a></li>
              <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex" href="a">Productos</a></li>
              <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex" href="a">Productos</a></li>
              <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex" href="a">Reseñas</a></li>
              <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex" href="a">Ayuda</a></li>
              <li><a className="h-full px-8 no-underline hidden items-center hover:bg-gray md:flex" href="a">Contacto</a></li>
              
            </ul>
          </div>
          <div className="a">
            <Image
              className="ml-2"
              src="/macanazos-logo-azul-borders.svg"
              alt="Macanazos Logo"
              width={256}
              height={99}
              priority
            />
          </div>
        </nav>
      </header>

      <div className="bg-blue w-full p-4">
        <div id="carrusel" className="mx-4 flex justify-center items-center">
          <button className="text-8xl text-orange" onClick={handlePrevClick}>‹</button>
          
           <Image
            className="m-4"
            src={images[currentImageIndex]}
            alt="Banner de Productos"
            width={1080}
            height={1080}
            style={{
              maxWidth: '80%',
              width: '80%',
              height: 'auto',

            }}
            /> 
          <button className="text-8xl text-orange" onClick={handleNextClick}>›</button>
        </div>
      </div>

      <div className="bg-orange w-full h-96 mt-12">
        {/* AQUI VA UNA LISTA DE PRODUCTOS, LOS MAS VENDIDOS */}
        <span className="text-white">Aqui va una lista de productos, los mas vendidos</span>
        <div>
          <h3>Producto 1</h3>
          <p>Descripcion del producto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero amet odit culpa adipisci vitae dolores! Explicabo accusantium nobis, repellendus iusto ex, quo quidem dignissimos quae voluptatem libero saepe iste ab.</p>
          <h4>Desde $XX.00</h4>
        </div>
      </div>
      <footer>
        <div className="bg-black w-full h-60 mt-12">
          <div className="Contenedor de imagen">
            <img className="h-auto w-1/3"
              src="/imagotipo macanazos blanco.svg"
              alt="Macanazos Logo"
            ></img>
          </div>
          <div className="Contenedor de contactos">
          </div>
        </div>
      </footer>
    </main>
  );
}

