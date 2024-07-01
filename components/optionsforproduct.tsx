'use client';
import { useState } from "react";
import { getMatter, readContent, readMatterData } from "@/utilities/fileReading";


interface ProductOptionsProps {
  product: {
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
    opciones?: string;
    opcion?: string; // Add this if it's not in ProductContent but in matterData
  };
}

const OptionsDetails: React.FC<ProductOptionsProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Parse the 'medidas' string into an array of sizes
  const opciones = product.opciones ? product.opciones.split(',').map(option => option.trim()) : [];

  // You might want to add a price field to your ProductContent type
//   const price = 75.00; // Placeholder price

  return (
    <div className="a">
      
      <div className="mt-4">
        <p className="text-white mb-2">Size</p>
        <div className="flex flex-wrap gap-2">
        {opciones.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 border rounded-full ${
                  selectedOption === option
                    ? 'bg-white text-black'
                    : 'border-white text-white'
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            ))}
        </div>
      </div>
      
      {/* ... quantity selector and other elements ... */}
      
      
    </div>
  );
};

export default OptionsDetails;

