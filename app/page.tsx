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
    readonly Imagen2: string;
    readonly Imagen3: string;
    readonly Imagen4: string;
    readonly Imagen5: string;
    readonly Imagen6: string;
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
      <div id="ContenedorCarrusel" className="bg-blue w-full p-4">
        <Carrousel />
      </div>
      <div className="bg-orange w-full h-96 mt-12">
        {/* AQUI VA UNA LISTA DE PRODUCTOS, LOS MAS VENDIDOS */}
        <span className="text-white">Aqui va una lista de productos, los mas vendidos</span>
        <div>
          <h3>Producto 1</h3>
          <p>Descripcion del producto Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero amet odit culpa adipisci vitae dolores! Explicabo accusantium nobis, repellendus iusto ex, quo quidem dignissimos quae voluptatem libero saepe iste ab.</p>
          <h4>Desde $XX.00</h4>
          <span>Products List</span>
          {fetchProductContent().map((product) => (
            <div> 
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h4>{product.medidas}</h4>
              <div>
                <img src={product.thumbnail}
                 alt="Product Image" 
                 width={100}
                 height={100}
                 />
              </div>
            </div>
          ))}
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
