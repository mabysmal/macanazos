import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";

export default function Home(){
    const productsDirectory = path.join(process.cwd(), "content/productos");

    type ProductContent = {
      readonly title: string;
      readonly description: string;
      readonly medidas: string;
      readonly thumbnail: string ;
      readonly Imagen2?: string;
      readonly Imagen3?: string;
      readonly Imagen4?: string;
      readonly Imagen5?: string;
      readonly Imagen6?: string;
      readonly fullPath: string;
    };
  
  
  
    let productCache: ProductContent[];
  
    function readMatterData(fileName: string){
        // Read markdown file as string
        const fullPath = path.join(productsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents, {
          engines: {
            yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
          },
        });
        const matterData = matterResult.data as {
          title: string;
          description: string;
          medidas: string;
          thumbnail: string;
          fullPath: string;
        };
        matterData.fullPath = fullPath;

        return matterData;
    }

    function fetchProductContent(): ProductContent[] {
      if (productCache) {
        return productCache;
      }
      // Get file names under /posts
      const fileNames = fs.readdirSync(productsDirectory);
      const allPostsData = fileNames
        .filter((it) => it.endsWith(".mdx"))
        .map((fileName) => {
          const matterData = readMatterData(fileName);
  
          return matterData;
        });
  
        return allPostsData;
    }
  

    
    return(
        <main>
            <HamburgerMenu />

            <span> productos: </span>
            {/* {productCache.map((product) => (

                <li key={product.title}>
                    <a href={product.fullPath}>
                      <Image src={product.thumbnail} alt={product.title} width={200} height={200} />
                    </a>
                </li>
            ))} */}

        </main>
    )
}