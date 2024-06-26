import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { getMatter, readContent, readMatterData } from "@/utilities/fileReading";
import ProductCarousel from "@/components/productCarrousel";


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
    ].filter(image => image !== undefined); // Filtra los valores undefined



    return(
        <main>
            <HamburgerMenu />
            <span>testing</span>
            <div id="contenedor de producto" className="flex flex-col md:flex-row md:justify-center md:items-start">
                <div id="contenedor de imagenes" className="w-full md:w-2/5">
                    <ProductCarousel images={productImages} />
                </div>
                <div id="contenedor de texto" className="w-full md:w-2/5">
                    <h1>{params.id}</h1>
                    <p>{productContent}</p>
                </div>
            </div>
        </main>
    );
}