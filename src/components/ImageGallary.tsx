import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const selectImage = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="relative  overflow-hidden rounded-lg bg-muted ">
        <Image
          src={images[activeIndex]}
          alt={`${productName} - View ${activeIndex + 1}`}
          width={500}
          height={500}
          className="item-center  w-full object-cover transition-transform duration-500 hover:scale-90"
        />
        
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-primary shadow-sm hover:bg-background cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 cursor-pointer" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-primary shadow-sm hover:bg-background cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex space-x-2 overflow-auto pb-1">
        {images.map((image, index) => (
          <button 
            key={index} 
            onClick={() => selectImage(index)}
            className={`relative aspect-square w-28 flex-shrink-0 overflow-hidden rounded-md border-2 cursor-pointer ${
              activeIndex === index ? "border-primary" : "border-transparent"
            }`}
          >
            <img 
              src={image} 
              alt={`${productName} thumbnail ${index + 1}`} 
              className="h-full w-full object-fit"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
