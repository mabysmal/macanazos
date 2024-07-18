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
//data= las cajitas con info que escribe papa en la pagina admin
//content= el texto largo que escribe papa con formato markdown

    const productData= readMatterData(params.id+'.mdx');
    const productContent = readContent(params.id+'.mdx');

    let productImages = [
        productData.thumbnail,
        productData.Imagen2,
        productData.Imagen3,
        productData.Imagen4,
        productData.Imagen5,
        productData.Imagen6,
        productData.Imagen7,
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
                    <ReactMarkdown className="markdown-body" >{productData.description}</ReactMarkdown>
                    <p className="texto-body">Medidas del producto:   {productData.medidas}***</p>
                    <p className="texto-body">Tiempo de entrega estimado:   {productData.esttime}</p>
                    <p className="texto-precio"> {productData.price}.00 MXN*</p>
                    {/* <OptionsDetails product={productData} /> */}
                    <div className="flex flex-row justify-center text-2xl w-full ">
                      <a href="https://wa.me/8129396449?text=hi%20id%20like%20a%20chocolate%20bar" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                        <button id="Contact-Whatsapp" className="text-4xl bg-green pt-2 px-5 rounded-xl"> Contactar por Whatsapp</button>
                      </a>
                    </div>
                    <div className="flex flex-row justify-center text-2xl w-full mt-4">
                    <button id="Contact-Email" className="text-4xl bg-orange pt-2 px-5 rounded-xl"> Contactar por Email</button>
                    </div>

                </div>

                
            </div>

            <div className="asteriscos pb-8 flex-wrap bg-blue flex w-full flex-center justify-center">
              <span className="text-center text-light-blue">* El precio es por unidad a menos que se deje en claro en la descripción que el precio es determinado por grupos de unidades.</span>
              <span className="text-center text-light-blue ">** Se debe pagar un adelanto del 50% del precio total del pedido para iniciar su producción.</span>
              <span className="text-center text-light-blue ">*** Las medidas fueron tomadas manualmente. Las medidas pueden variar de 1-5 cm</span>

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