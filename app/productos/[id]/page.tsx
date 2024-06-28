import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { getMatter, readContent, readMatterData } from "@/utilities/fileReading";
import ProductCarousel from "@/components/productCarrousel";
import MapComponent from "@/components/map";
import Contactos from "@/components/contactos";
import ReactMarkdown from "react-markdown";
import './styles.css'
import Head from 'next/head';



export default function ProductPage({params}: {params: {id: string}}) {
//data= las cajitas con info que escribe papa
//content= el texto largo que escribe papa con formato markdown

    const productData= readMatterData(params.id+'.mdx');
    const productContent = readContent(params.id+'.mdx');

    let productImages = [
        productData.thumbnail,
        productData.Imagen2,
        productData.Imagen3,
        productData.Imagen4,
        productData.Imagen5,
        productData.Imagen6
    ].filter(image => image !== undefined); // filtra los valores undefined



    return(
        <main>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
          </Head>
          
            <HamburgerMenu />
            <div id="contenedor de producto" className=" pt-16 pb-8 bg-blue flex flex-col md:flex-row md:justify-center md:items-start">
                <div id="contenedor de imagenes" className="flex-col w-full md:w-2/5">
                    <ProductCarousel images={productImages} />
                </div>
                <div id="contenedor de texto" className="w-full md:w-2/5">
                    <h1 className="text-5xl pt-5 px-5 text-center md:text-left">{params.id}</h1>
                    <ReactMarkdown className="markdown-body" >{productContent}</ReactMarkdown>
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
    );
}