import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { getAllFrontMatter, readMatterData } from "@/utilities/fileReading";

export default function Home(){
  const allFrontmatters = getAllFrontMatter()
  
    return(
        <main>
            <HamburgerMenu />

            <span> productos: </span>

            {allFrontmatters.map((frontmatter) => (
                <div id="cartas de productos" key={frontmatter.fullPath}>

                    <a href={frontmatter.fullPath} >
                      <Image
                        src={frontmatter.thumbnail}
                        alt={frontmatter.title}
                        width={256}
                        height={256}
                        className="productthumbnail" 
                      />
                      <h1>title: {frontmatter.title}</h1>
                      <p>{frontmatter.description}</p>
                    </a>
                    
                </div>
            ))}

        </main>
    )
}