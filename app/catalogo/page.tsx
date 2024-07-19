import React from 'react';
import Image from "next/image";
import HamburgerMenu from "@/components/hamburger-menu";
import { getAllFrontMatter, getPaquetesAllFrontMatter } from "@/utilities/fileReading";
import './styles.css'
import MapComponent from "@/components/map";
import Contactos from "@/components/contactos";

// Define types for product and package items
type ItemContent = {
  title: string;
  smdescription: string;
  thumbnail: string;
  price: string;
  fullPath: string;
};

type ProductGridProps = {
  items: ItemContent[];
  type: 'productos' | 'paquetes';
};

const ProductGrid: React.FC<ProductGridProps> = ({ items, type }) => (
  <div className="bg-blue py-8 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {items.map((item) => (
      <div className="bg-blue border-2 border-orange rounded-lg shadow-md overflow-hidden flex flex-col h-full" key={getURL(item.fullPath)}>
        <a href={`/${type}/${getURL(item.fullPath)}`} className="flex flex-col h-full">
          <div className="flex-1 flex justify-center items-center p-4">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={256}
              height={256}
              className="object-contain max-w-full max-h-full"
            />
          </div>
          <div className="texto-cards text-white p-4">
            <h2 className="text-4xl font-semibold mb-4">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-4">{item.smdescription}</p>
            <span className="text-2xl font-bold mb-4 text-blue-600 text-center">{item.price}.00 MXN</span>
          </div>
        </a>
      </div>
    ))}
  </div>
);

function getURL(fullPath: string): string {
  return fullPath.split('/').pop()?.split('.').shift() ?? '';
}

export default function Home() {
  const allFrontmatters = getAllFrontMatter();
  const allPaquetesFrontmatters = getPaquetesAllFrontMatter();

  return (
    <main>
      <HamburgerMenu />
      
      <h2 className="text-3xl font-bold text-center my-8">Productos</h2>
      <ProductGrid items={allFrontmatters} type="productos" />

      <h2 className="text-3xl font-bold text-center my-8">Paquetes Promocionales</h2>
      <ProductGrid items={allPaquetesFrontmatters} type="paquetes" />

      <footer className="bg-black justify-center pb-10 pt-10 mt-4">
        {/* ... (footer content remains the same) ... */}
      </footer>
    </main>
  );
}