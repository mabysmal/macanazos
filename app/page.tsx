import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import Carrousel from '@/components/carrousel';
import HamburgerMenu from '@/components/hamburger-menu';

export default function Home() {
  // catalog

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

  function fetchProductContent(): ProductContent[] {
    if (productCache) {
      return productCache;
    }
    // Get file names under /posts
    const fileNames = fs.readdirSync(productsDirectory);
    const allPostsData = fileNames
      .filter((it) => it.endsWith(".mdx"))
      .map((fileName) => {
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
      });

      return allPostsData;
  }

  
  // end catalog

  return (
    <main>

      <HamburgerMenu />

      <div className="bg-blue">
        <Carrousel />
      </div>

      

      <div className="bg-orange w-full h-96 mt-12">
        {/* AQUI VA UNA LISTA DE PRODUCTOS, LOS MAS VENDIDOS */}
        <div className="ContenedorProdsMasVendidos">
          <h3> Te podrían interesar...</h3>
          <div className="Contenedor de productos">
            <ul>
              <li>
                <Image
                  src="/productoMasVendido1.jpg"
                  alt="Macanazo Escolar"
                  width={200}
                  height={200}
                ></Image>
                <h3></h3>
              </li>
            </ul>
          </div>

          
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
          <div className="Contenedor de contactos"></div>
        </div>
      </footer>
    </main>
  );
}
