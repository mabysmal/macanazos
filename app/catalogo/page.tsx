import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { getAllFrontMatter, readMatterData } from "@/utilities/fileReading";
import './styles.css'
import MapComponent from "@/components/map";
import Contactos from "@/components/contactos";


export default function Home(){
  const allFrontmatters = getAllFrontMatter();
  function getURL(fullPath: string): string {
    return fullPath.split('/').pop()?.split('.').shift() ?? '';
    };



    

    
  
    return(
        <main >
            <HamburgerMenu />
            <div className="bg-blue py-8 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allFrontmatters.map((frontmatter) => (
            <div className="bg-blue border-2 border-orange rounded-lg shadow-md overflow-hidden flex flex-col h-full" key={getURL(frontmatter.fullPath)}>
              <a href={'/productos/' + getURL(frontmatter.fullPath)} className="flex flex-col h-full">
                <div className="flex-1 flex justify-center items-center p-4">
                  <Image
                    src={frontmatter.thumbnail}
                    alt={frontmatter.title}
                    width={256}
                    height={256}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="texto-cards text-white p-4">
                  <h2 className="text-4xl font-semibold mb-4">{frontmatter.title}</h2>
                  <p className="text-sm text-gray-600 mb-4">{frontmatter.smdescription}</p>
                  <span className="text-2xl font-bold mb-4 text-blue-600 text-center">{frontmatter.price}.00 MXN</span>
                </div>
              </a>
            </div>
            ))}
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
            ></Image>
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
    )
}