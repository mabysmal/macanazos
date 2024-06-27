import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { fetchAllProductData, readMatterData } from "@/utilities/fileReading";

export default function Home(){
  const allFrontmatters = fetchAllProductData()
  
    return(
        <main>
            <HamburgerMenu />

            <span> productos: </span>

            {allFrontmatters.map((frontmatter) => (
                <div id="cartas de productos" key={frontmatter.fullPath}>

                    <div >
                      <Image
                        src={frontmatter.thumbnail}
                        alt={frontmatter.title}
                        width={256}
                        height={256}
                        className="object-cover" 
                      />
                      <h1>title: {frontmatter.title}</h1>
                      <p>{frontmatter.description}</p>
                    </div>
                    
                </div>
            ))}

        </main>
    )
}