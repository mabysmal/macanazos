'use client'
import { useState, useEffect } from "react";
import Image from 'next/image';
/////
const Carrousel = () => {
  const images = [
    "/banner/banner_gracias.jpg",
    "/banner/banner_lona.jpg",
    "/banner/banner_ablumgrad.jpg",
    "/banner/banner_empresarial.jpg",
    "/banner/banner_tec.jpg",
    "/banner/banner_comic.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImagesPerPage(1);
      } else if (window.innerWidth < 1024) {
        setImagesPerPage(2);
      } else {
        setImagesPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - imagesPerPage + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + imagesPerPage) % images.length
    );
  };

  const getDisplayedImages = () => {
    const endIndex = (currentImageIndex + imagesPerPage) % images.length;
    if (endIndex > currentImageIndex || endIndex === 0) {
      return images.slice(currentImageIndex, currentImageIndex + imagesPerPage);
    } else {
      return [
        ...images.slice(currentImageIndex, images.length),
        ...images.slice(0, endIndex),
      ];
    }
  };

  const displayedImages = getDisplayedImages();

  return (
    <div id="carrusel" className=" flex justify-center items-center max-w-full overflow-hidden">
     

      <div className="flex flex-row justify-center items-center" style={{ width: '80%' }}>
      <button
        className="text-7xl text-orange flex md:hover:text-8xl md:hover:[transition:all_0.5s]"
        onClick={handlePrevClick}
      >
        ‹
      </button>

        {displayedImages.map((image, index) => (
          <Image
            key={index}
            className="m-4 rounded-2xl max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={image}
            alt="Banner de Productos"
            width={540}
            height={503}
            style={{
              width: `${100 / imagesPerPage}%`,
              height: 'auto',
            }}
          />
        ))}
        

      <button
        className="text-7xl text-orange flex md:hover:text-8xl md:hover:[transition:all_0.5s] "
        onClick={handleNextClick}
      >
        ›
      </button>
      </div>

      
    </div>
  );
};

export default Carrousel;
