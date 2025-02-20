"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Slider = ({
  componentTitle = "Galería de Imágenes", // Contenido del título general
  titleColor = "text-black", // Color del título
  titleSize = "text-2xl sm:text-3xl", // Tamaño del título
  titleFontWeight = "font-bold", // Peso del título
  componentBgColor = "bg-transparent", // Fondo del componente
  slides,
  carouselBorderColor = "border border-gray-300", // Borde del carrusel
  carouselBorderRadius = "rounded-lg", // Radio del borde del carrusel
  carouselShadow = "shadow-lg", // Sombra del carrusel
  imageSize = "w-full lg:w-3/5", // Tamaño de las imágenes
  animationSpeed = 0.8, // Velocidad de la animación
  buttonBgColor = "bg-primary", // Color de fondo de los botones
  buttonTextColor = "text-white", // Color del texto de los botones
  buttonBorderColor = "border border-gray-300", // Color del borde de los botones
  buttonHoverColor = "hover:bg-secondary", // Color al hacer hover en los botones
  gap = "gap-4", // Espaciado entre elementos
  loop = false, // Permitir que el carrusel reinicie al final
  autoplay = false, // Permitir autoplay
  autoplaySpeed = 3000, // Velocidad del autoplay en ms
  showIndicators = true, // Mostrar indicadores en lugar de botones
}) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollToSlide = (index) => {
    const slideElement = document.querySelector(`#slide${index}`);
    if (slideElement) {
      carouselRef.current.scrollTo({
        left: slideElement.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        handleScrollToSlide(nextIndex);
      }, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplay, autoplaySpeed]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: animationSpeed, ease: "easeInOut" } },
  };

  return (
    <div className={`w-full container mx-auto py-spacing-3 ${componentBgColor} ${gap}`}>
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} mb-spacing-4`}>{componentTitle}</h2>

      <div
        ref={carouselRef}
        className={`carousel w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth ${carouselBorderColor} ${carouselBorderRadius} ${carouselShadow}`}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full snap-start"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img
              src={slide.image}
              className={`${imageSize} mx-auto`}
              alt={`Slide ${index}`}
            />
          </motion.div>
        ))}
      </div>

      {showIndicators ? (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
              onClick={() => handleScrollToSlide(index)}
            ></span>
          ))}
        </div>
      ) : (
        <div className="text-center mt-spacing-2 flex flex-wrap sm:mx-spacing-3 gap-2 justify-center">
          {slides.map((slide, index) => (
            <button
              key={index}
              aria-label={`Slide ${index}`}
              className={`btn slide-button ${index === currentIndex ? "btn-active" : ""} ${buttonBgColor} ${buttonTextColor} ${buttonBorderColor} ${buttonHoverColor}`}
              onClick={() => handleScrollToSlide(index)}
            >
              {slide.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;