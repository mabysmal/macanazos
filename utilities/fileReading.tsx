import fs from "fs";
import matter from "gray-matter";
import path from "path";
import yaml from "js-yaml";


export const productsDirectory = path.join(process.cwd(), "content/productos");

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
    readonly opciones: string;
    readonly opcion: string;
};
  
  
  
let productCache: ProductContent[];
  
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

export function readMatterData(fileName: string){
    const matterResult = getMatter(fileName);
    
    const matterData = matterResult.data as {
      title: string;
      description: string;
      medidas: string;
      thumbnail: string;
      Imagen2?: string;
      Imagen3?: string;
      Imagen4?: string;
      Imagen5?: string;
      Imagen6?: string;
      fullPath: string;
      opciones: string;
      opcion: string;
    };
    const fullPath = path.join(productsDirectory, fileName);
    matterData.fullPath = fullPath;

    return matterData;
}

export function readContent(fileName: string):string{
    const matterResult = getMatter(fileName);
    const content = matterResult.content;
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