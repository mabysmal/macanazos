import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";
import Image from "next/image";
import Carrousel from '@/components/carrousel';
import HamburgerMenu from '@/components/hamburger-menu';
import FooterMacanazos from "@/components/footerMacanazos";

// import ('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

export default function Home() {
  // catalog

  const productsDirectory = path.join(process.cwd(), "content/productos");

  type ProductContent = {
    readonly title: string;
    readonly smdescription: string;
    readonly medidas: string;
    readonly thumbnail: string;
    readonly Imagen2?: string;
    readonly Imagen3?: string;
    readonly Imagen4?: string;
    readonly Imagen5?: string;
    readonly Imagen6?: string;
    readonly Imagen7?: string;
    readonly description: string;
    readonly esttime: string;
    readonly price: string;

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
          smdescription: string;
          medidas: string;
          thumbnail: string;
          Imagen2: string;
          Imagen3: string;
          Imagen4: string;
          Imagen5: string;
          Imagen6: string;
          Imagen7: string;
          description: string;
          esttime: string;
          price: string;
          fullPath: string;
        };
        matterData.fullPath = fullPath;

        return matterData;
      });

      return allPostsData;
  }

  
  // end catalog

  return (
    <main className="">

      <HamburgerMenu />

      

      <div className="bg-blue py-4">
        <Carrousel />
      </div>

      

      <div className=" bg-orange w-full mt-4 flex flex-col">
        {/* AQUI VA UNA LISTA DE PRODUCTOS, LOS MAS VENDIDOS */}
        <h2 className="text-center text-white text-5xl no-underline flex m-2 mb-4 ml-6 mt-6 justify-around">Te podrían interesar:
        </h2>
        <ul className="flex flex-row justify-center  mb-8 flex-wrap align-center items-center">
          <li className="mb-6 overflow-hidden max-w-xs transition duration-300 ease-in-out hover:scale-110">
            <a href="/productos/macanazo-en-uniforme-escolar">
            <Image
              className="ml-auto mr-auto rounded-2xl "
              src="/MacanazoEscuelas.jpg"
              alt="Macanazos Escolares"
              width={256}
              height={256}
              style={{ width: '90%', height: 'auto' }}
            ></Image>
            <h3 className=" text-white text-3xl flex justify-around">Macanazos Escolares</h3>
            </a>
          </li>
          <li className="mb-6 overflow-hidden max-w-xs transition duration-300 ease-in-out hover:scale-110">
            <a href="/productos/macanazo-caracterizado">
            <Image
              className="ml-auto mr-auto  rounded-2xl"
              src="/MacanazoCaracterizado.jpg"
              alt="MAcanazos Caracterizados"
              width={256}
              height={256}
              style={{ width: '90%', height: 'auto' }}
            ></Image>
            <h3 className=" text-white text-3xl flex justify-around">Macanazos Caracterizados</h3>
            </a>
          </li>
          <li className="mb-6 overflow-hidden max-w-xs transition duration-300 ease-in-out hover:scale-110">
            <a href="/productos/poster-grupal">
            <Image
              className="ml-auto mr-auto rounded-2xl"
              src="/PosterGrupal.jpg"
              alt="Poster Grupal"
              width={256}
              height={256}
              style={{ width: '90%', height: 'auto' }}
            ></Image>
            <h3 className=" text-white text-3xl flex justify-around">Poster Grupal</h3>
            </a>
          </li>
          <li className="mb-6 overflow-hidden max-w-xs transition duration-300 ease-in-out hover:scale-110">
            <a href="/productos/macanazos-de-empresas">
            <Image
              className="ml-auto mr-auto  rounded-2xl"
              src="/MacanazoEmpresarial.jpg"
              alt="Macanazo Empresarial"
              width={256}
              height={256}
              style={{ width: '90%', height: 'auto' }}
            ></Image>
            <h3 className=" text-white text-3xl flex justify-around">Macanazos de Empresas</h3>
            </a>
          </li>
        </ul>
      </div>
      <FooterMacanazos></FooterMacanazos>
    </main>
  );
}
