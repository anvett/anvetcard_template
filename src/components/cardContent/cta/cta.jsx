

"use client";

import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const CallToAction = ({
  ctaTitle = "¡Únete a Nosotros!", // Texto del título principal
  titleColor = "text-primary", // Color del título
  titleSize = "text-2xl sm:text-3xl", // Tamaño del título
  titleFontWeight = "font-bold", // Peso del título
  fontType = "font-sans", // Tipo de fuente del título
  componentBgColor = "bg-light", // Fondo del componente
  backgroundImage = "", // Imagen de fondo opcional
  borderColor = "border border-gray-300", // Color del borde del componente
  borderRadius = "rounded-lg", // Radio del borde del componente
  shadow = "shadow-lg", // Sombra del componente
  ctaText,
  buttonText,
  phoneNumber = "593999999999", // Número de WhatsApp por defecto
  buttonType = "btn-solid", // Clase de botón definida en globals
  buttonBgColor = "bg-primary", // Color de fondo del botón
  buttonTextColor = "text-light", // Color del texto del botón
  buttonBorderColor = "border border-transparent", // Color del borde del botón
  buttonHoverColor = "hover:bg-accent hover:text-primary", // Color al hacer hover
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Construir el enlace de WhatsApp con un mensaje personalizado
  const encodedMessage = encodeURIComponent(`Hola, estoy interesado en ${ctaText}`);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <section
      ref={ref}
      className={`relative py-spacing-8 ${componentBgColor} text-center overflow-hidden ${borderColor} ${borderRadius} ${shadow}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" } : {}}
    >
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.h2
          className={`section-title ${titleColor} ${titleSize} ${titleFontWeight} ${fontType}`}
          initial={{ y: -50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {ctaText}
        </motion.h2>
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-bold ${buttonType} ${buttonBgColor} ${buttonTextColor} ${buttonBorderColor} ${buttonHoverColor}`}
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;

