"use client";

import React from "react";
import { motion } from "framer-motion";

const YouTubeVideoPlayer = ({
  componentTitle = "Reproductor de YouTube", // Contenido del título general
  titleColor = "text-black", // Color del título
  titleSize = "text-2xl sm:text-3xl", // Tamaño del título
  titleFontWeight = "font-bold", // Peso del título
  componentBgColor = "bg-transparent", // Fondo del componente
  videoId,
  borderColor = "border border-gray-300", // Color del borde del video
  borderRadius = "rounded-lg", // Radio del borde del video
  shadow = "shadow-lg", // Sombra del video
  aspectRatio = "16:9", // Relación de aspecto del video
}) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`;

  return (
    <motion.div
      className={`flex flex-col items-center justify-center p-spacing-3 ${componentBgColor} gap-spacing-2 sm:gap-spacing-3`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      {/* ✅ Título General del Componente */}
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} mb-spacing-2`}>
        {componentTitle}
      </h2>
      
      <div className={`relative w-full max-w-4xl h-0 pb-[56.25%] sm:pb-[50%] md:pb-[45%] lg:pb-[30%] ${borderColor} ${borderRadius} ${shadow}`}>
        <iframe
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full object-contain"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default YouTubeVideoPlayer;

// ✅ Uso Completo del Componente
/*
<YouTubeVideoPlayer
  componentTitle="Video Destacado"
  titleColor="text-red-600"
  titleSize="text-3xl sm:text-4xl"
  titleFontWeight="font-semibold"
  componentBgColor="bg-gray-100"
  videoId="dQw4w9WgXcQ"
  borderColor="border border-red-400"
  borderRadius="rounded-xl"
  shadow="shadow-xl"
  aspectRatio="16:9"
/>
*/




