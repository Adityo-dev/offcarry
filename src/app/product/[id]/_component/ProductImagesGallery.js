"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function ShowProductImageGallery({ productImages }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mainSwiperRef = useRef(null);
  const thumbnailSwiperRef = useRef(null);

  // Handle mouse move to zoom on image
  const handleMouseMove = (e) => {
    if (!containerRef.current || !imageRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 120;
    const y = ((e.clientY - top) / height) * 120;

    imageRef.current.style.transform = "scale(2)";
    imageRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  // Handle mouse leave to reset zoom effect
  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1)";
    }
  };

  // Sync main Swiper and thumbnail Swiper
  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
    if (thumbnailSwiperRef.current) {
      thumbnailSwiperRef.current.slideTo(swiper.activeIndex);
    }
  };

  const handleThumbnailClick = (index) => {
    setActiveSlide(index);
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  // Handle thumbnail arrow click
  const handleThumbnailArrowClick = (direction) => {
    if (thumbnailSwiperRef.current) {
      if (direction === "prev") {
        thumbnailSwiperRef.current.slidePrev();
      } else {
        thumbnailSwiperRef.current.slideNext();
      }
      // Update main Swiper to match the new active thumbnail
      const newIndex = thumbnailSwiperRef.current.activeIndex;
      setActiveSlide(newIndex);
      if (mainSwiperRef.current) {
        mainSwiperRef.current.slideTo(newIndex);
      }
    }
  };

  return (
    <main className="relative">
      {/* Main Image Swiper */}
      <div
        ref={containerRef}
        className="w-full h-[500px] bg-[#F5F5F5] rounded-lg overflow-hidden mb-6 relative cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={mainSwiperRef}
          spaceBetween={10}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          className="w-full h-full"
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div className="w-[400px] mx-auto h-auto">
                <Image
                  ref={imageRef}
                  src={image.src}
                  width={600}
                  height={450}
                  alt={`Image ${index + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Gallery */}
      <div className="relative flex items-center">
        {/* Previous Button */}
        {productImages.length > 5 && (
          <button
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-secondary text-white p-2 shadow-md rounded-full z-10 transition-all duration-300"
            onClick={() => handleThumbnailArrowClick("prev")}
          >
            <ChevronLeft strokeWidth={1.5} size={22} />
          </button>
        )}

        {/* Swiper Thumbnail Gallery */}
        <Swiper
          ref={thumbnailSwiperRef}
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation]}
          className="w-full px-10"
          onSwiper={(swiper) => (thumbnailSwiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveSlide(swiper.activeIndex);
            if (mainSwiperRef.current) {
              mainSwiperRef.current.slideTo(swiper.activeIndex);
            }
          }}
        >
          {productImages.map((image, index) => (
            <SwiperSlide key={image.id}>
              <div
                className={`flex-shrink-0 w-24 h-24 border p-2 rounded-lg overflow-hidden cursor-pointer ${
                  activeSlide === index ? "border-primary" : ""
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-contain w-full h-full"
                  width={100}
                  height={100}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next Button */}
        {productImages.length > 5 && (
          <button
            className="absolute -right-1 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-secondary text-white p-2 rounded-full shadow-md z-10 transition-all duration-300"
            onClick={() => handleThumbnailArrowClick("next")}
          >
            <ChevronRight strokeWidth={1.5} size={22} />
          </button>
        )}
      </div>
    </main>
  );
}
