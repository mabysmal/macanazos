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
    <div className="flex flex-col md:flex-row md:items-start">
      <div className="w-full md:w-3/5">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width={256}
          height={256}
          className="object-cover w-full h-auto"
        />
        <div className="flex justify-center items-center mt-2 md:hidden">
          <button onClick={handlePrevious} className="px-2 py-1 bg-gray-200 rounded">{"<"}</button>
          <span className="mx-2">{currentIndex + 1} / {images.length}</span>
          <button onClick={handleNext} className="px-2 py-1 bg-gray-200 rounded">{">"}</button>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:w-2/5 md:ml-4">
        {images.map((image: string, index: number) => (
          <div key={index} className={`cursor-pointer mb-2 ${currentIndex === index ? 'border-2 border-blue-500' : ''}`} onClick={() => setCurrentIndex(index)}>
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
