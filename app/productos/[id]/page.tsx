import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { getMatter, readContent, readMatterData } from "@/utilities/fileReading";


export default function ProductPage({params}: {params: {id: string}}) {
//data= las cajitas con info que escribe papa
//content= el texto largo que escribe papa con formato markdown

    const productData= readMatterData(params.id+'.mdx');
    const productContent = readContent(params.id+'.mdx');
    

    return(
        <main>
            <HamburgerMenu />
            <span>testing</span>
            <div id="contenedor de imagenes y textos de productos
            tailwindaqui">
                <div id="contenedor de imagenes">
                <Image
                    className="a "
                    src={productData.thumbnail}
                    alt="a"
                    width={256}
                    height={256}
                    style={{ width: '90%', height: 'auto' }}
                ></Image>
                </div>
                <div id="contenedor de textos">
                    <h1>{params.id}</h1>
                    <p>{productContent}</p>
                </div>
            </div>
        </main>
    
    )

}