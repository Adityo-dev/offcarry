"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ProductImagesGallery({ data }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Handle mouse move to zoom on image
  const handleMouseMove = (e) => {
    if (!containerRef.current || !imageRef.current || !data?.src?.[activeSlide])
      return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    const imageWidth = imageRef.current.naturalWidth;
    const imageHeight = imageRef.current.naturalHeight;
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;

    // Calculate zoom based on the image size
    const zoomLevelX = Math.max(imageWidth / containerWidth, 2);
    const zoomLevelY = Math.max(imageHeight / containerHeight, 2);

    setZoomStyle({
      backgroundImage: `url(${data.src[activeSlide].src})`,
      backgroundSize: `${zoomLevelX * 100}% ${zoomLevelY * 100}%`, // Adjust zoom level here
      backgroundPosition: `${x}% ${y}%`,
    });
  };

  // Handle mouse leave to reset zoom effect
  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  const handleThumbnailClick = (index) => {
    setActiveSlide(index);
    setZoomStyle({});
  };

  return (
    <main className="relative">
      {/* Main Image with Zoom Effect */}
      <div
        ref={containerRef}
        className="w-full h-[400px] sm:h-[450px] max-h-[450px] bg-[#F5F5F5] border rounded-lg overflow-hidden mb-4 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          ref={imageRef}
          src={data.src[activeSlide].src}
          className="object-contain w-full h-full"
          width={600}
          height={450}
          alt={`Image ${activeSlide + 1}`}
        />
        <div
          style={zoomStyle}
          className="absolute top-0 left-0 w-full h-full cursor-zoom-in"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 sm:grid-cols-7 gap-2 mt-4">
        {data.src.map((image, index) => (
          <div
            key={image.id}
            className={`w-full h-full rounded-lg overflow-hidden cursor-pointer border ${
              activeSlide === index &&
              "border-primary transition-all duration-300"
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <Image
              src={image.src}
              width={64}
              height={64}
              alt={`Thumbnail ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
