import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";


export const productsDirectory = path.join(process.cwd(), "content/productos");
export const paquetesDirectory = path.join(process.cwd(), "content/paquetes");

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

type PaquetesContent = {
  readonly title: string;
  readonly smdescription: string;
  readonly thumbnail: string;
  readonly Imagen2?: string;
  readonly Imagen3?: string;
  readonly Imagen4?: string;
  readonly Imagen5?: string;
  readonly Imagen6?: string;
  readonly Imagen7?: string;
  readonly description: string;
  readonly medidas: string;
  readonly esttime: string;
  readonly price: string;
  readonly fullPath: string;
}
  
  
let productCache: ProductContent[];
let paquetesCache: PaquetesContent[];
  
export function getMatter (fileName: string){ 
    const fullPath = path.join(productsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");


    const matterResult = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    });

    return matterResult
}

export function getPaquetesMatter (fileName: string){
  const fullPath = path.join(paquetesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");


    const paquetesMatterResult = matter(fileContents, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
      },
    });

    return paquetesMatterResult
}


export function readMatterData(fileName: string){
    const matterResult = getMatter(fileName);
    
    const matterData = matterResult.data as {
      title: string;
      smdescription: string;
      description: string;
      medidas: string;
      thumbnail: string;
      Imagen2?: string;
      Imagen3?: string;
      Imagen4?: string;
      Imagen5?: string;
      Imagen6?: string;
      Imagen7?: string;
      esttime: string;
      price: string;
      fullPath: string;
      
    };
    const fullPath = path.join(productsDirectory, fileName);
    matterData.fullPath = fullPath;

    return matterData;
}

export function readPaquetesMatterData(fileName: string){
  const paquetesMatterResult = getPaquetesMatter(fileName);
    
    const paquetesMatterData = paquetesMatterResult.data as {
      title: string;
      smdescription: string;
      description: string;
      medidas: string;
      thumbnail: string;
      Imagen2?: string;
      Imagen3?: string;
      Imagen4?: string;
      Imagen5?: string;
      Imagen6?: string;
      Imagen7?: string;
      esttime: string;
      price: string;
      fullPath: string;
      
    };
    const fullPath = path.join(productsDirectory, fileName);
    paquetesMatterData.fullPath = fullPath;

    return paquetesMatterData;
}

export function readContent(fileName: string):string{
    const matterResult = getMatter(fileName);
    const content = matterResult.content;
    return content;
}


export function readPaquetesContent(fileName: string):string{
  const paquetesMatterResult = getPaquetesMatter(fileName);
  const content = paquetesMatterResult.content;
  return content;
}


export function getAllFrontMatter(): ProductContent[] {
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

export function getPaquetesAllFrontMatter(): PaquetesContent[] {
  if (paquetesCache) {
    return paquetesCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(paquetesDirectory);
  const allPostsData = fileNames
    .filter((it) => it.endsWith(".mdx"))
    .map((fileName) => {
      const paquetesmatterData = readPaquetesMatterData(fileName);

      return paquetesmatterData;
    });

    return allPostsData;
}