'use client';
import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ProductCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-around">
      
      <div className="flex flex-col w-full justify-center items-center ">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={600}
          height={600}
          className="object-cover w-full h-auto"
        />
        <div id="MiniaturasImagenesExtraProductosEnPc" className="hidden md:flex-row md:flex  md:w-full  justify-center">
        {images.map((image, index) => (
          <div key={index} className={`cursor-pointer ${currentIndex === index ? 'opacity-50' : ''}`} onClick={() => setCurrentIndex(index)}>
            <Image
              className="ImagenesExtraProductos p-2 justify-center items-center"
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={64}
              height={64}
              
            />
          </div>
        ))}

        
      </div>
        <div id="BotonesdeCarruselEnPc" className=" justify-center items-center mt-2 hidden md:flex">
          <button onClick={handlePrevious} aria-label="Previous image" className="px-2 py-1 bg-gray-200 rounded text-5xl text-orange">{"<"}</button>
          <span className="mx-2 text-2xl text-orange">{currentIndex + 1} / {images.length}</span>
          <button onClick={handleNext} aria-label="Next image" className="px-2 py-1 bg-gray-200 rounded text-5xl text-orange">{">"}</button>
        </div>
        <div id="CarruselEnCelulares" className="flex justify-center items-center mt-2 md:hidden">
          <button onClick={handlePrevious} aria-label="Previous image" className="px-2 py-1 bg-gray-200 rounded text-5xl text-orange">{"<"}</button>
          <span className="mx-2 text-2xl text-orange">{currentIndex + 1} / {images.length}</span>
          <button onClick={handleNext} aria-label="Next image" className="px-2 py-1 bg-gray-200 rounded text-5xl text-orange">{">"}</button>
        </div>
      </div>
      
    </div>
  );
};

export default ProductCarousel;
