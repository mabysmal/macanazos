'use client'
import { useState } from "react";
import Image from 'next/image';

const Carrousel = () => {
  const images = [
    "/banner/banner_macanazos.jpg",
    "/banner/banner_lona.jpg",
    "/banner/banner_ablumgrad.jpg",
    "/banner/banner_empresarial.jpg",
    "/banner/banner_tec.jpg",
    "/banner/banner_comic.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="carrusel" className="mx-4 flex justify-center items-center">
      <button className="text-8xl text-orange md:hover:text-9xl" onClick={handlePrevClick}>‹</button>
      
      <Image
        className="m-4"
        src={images[currentImageIndex]}
        alt="Banner de Productos"
        width={540}
        height={503}
        style={{
          maxWidth: '1024px',
          width: '80%',
          height: 'auto',
        }}
      /> 

      <button className="text-8xl text-orange md:hover:text-9xl" onClick={handleNextClick}>›</button>
    </div>
  );
};

export default Carrousel;