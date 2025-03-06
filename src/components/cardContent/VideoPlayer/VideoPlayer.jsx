"use client";

import React from "react";
import { motion } from "framer-motion";

const VideoPlayer = ({
  componentTitle = "Reproductor de Video", // Contenido del título general
  titleColor = "text-black", // Color del título
  titleSize = "text-2xl sm:text-3xl", // Tamaño del título
  titleFontWeight = "font-bold", // Peso del título
  componentBgColor = "bg-transparent", // Fondo del componente
  videoUrl,
  borderColor = "border border-gray-300", // Color del borde del video
  borderRadius = "rounded-lg", // Radio del borde del video
  shadow = "shadow-lg", // Sombra del video
  aspectRatio = "16:9", // Relación de aspecto del video
}) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center  py-spacing-3 ${componentBgColor} gap-spacing-2 sm:gap-spacing-3`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      {/* ✅ Título General del Componente */}
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} mb-4`}>
        {componentTitle}
      </h2>
      
      <div className={`relative w-full max-w-4xl aspect-${aspectRatio.replace(":", "-")} ${borderColor} ${borderRadius} ${shadow}`}>
        <video
          src={videoUrl}
          className="w-full h-full object-contain"
          controls
          preload="metadata"
        ></video>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;

// ✅ Uso Completo del Componente
/*
<VideoPlayer
  componentTitle="Presentación de Producto"
  titleColor="text-blue-600"
  titleSize="text-3xl sm:text-4xl"
  titleFontWeight="font-semibold"
  componentBgColor="bg-gray-100"
  videoUrl="/assets/videos/demo.mp4"
  borderColor="border border-blue-400"
  borderRadius="rounded-xl"
  shadow="shadow-xl"
  aspectRatio="4:3"
/>
*/

