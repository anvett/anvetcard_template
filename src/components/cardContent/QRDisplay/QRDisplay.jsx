"use client";

import React from "react";
import Image from "next/image";

const QRDisplay = ({
  componentTitle = "Escanea el Código QR", // Contenido del título general
  titleColor = "text-black", // Color del título
  titleSize = "text-2xl sm:text-3xl", // Tamaño del título
  titleFontWeight = "font-bold", // Peso de la fuente del título
  componentBgColor = "bg-transparent", // Fondo del componente
  qrImage,
  qrSize = "w-48 h-48", // Tamaño del QR
  qrBorderColor = "border border-gray-300", // Borde del QR
  qrBorderRadius = "rounded-lg", // Radio del borde del QR
  qrShadow = "shadow-lg", // Sombra del QR
  gap = "gap-4", // Espaciado entre elementos
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-spacing-6 ${componentBgColor} ${gap}`}>
      {/* ✅ Título General del Componente */}
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} mb--spacing-4`}>
        {componentTitle}
      </h2>
      
      <div className={`relative ${qrSize} my-spacing-3 ${qrBorderColor} ${qrBorderRadius} ${qrShadow}`}>
        <Image
          src={qrImage}
          alt="QR Code"
          fill  
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default QRDisplay;

