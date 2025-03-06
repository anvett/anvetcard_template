"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EducationExperience = ({
  componentTitle = "Formación Académica y Experiencia", // Contenido del título general
  componentTitleColor = "text-black", // Color del título general
  componentTitleSize = "text-2xl sm:text-3xl", // Tamaño del título general
  entries,
  componentBgColor = "bg-transparent", // Fondo del componente completo
  bgColor = "bg-primary", // Fondo del acordeón
  borderColor = "",
  contentBgColor = "bg-light", // Fondo del contenido desplegable
  titleTextColor = "text-primary", // Color del título
  detailsTextColor = "text-secondary", // Color de los detalles
  titleSize = "text-lg sm:text-xl", // Tamaño del título
  detailsSize = "text-sm sm:text-base", // Tamaño del contenido
  gap = "gap-4", // Espaciado entre elementos
  useBulletPoints = true, // Controla si la lista usa viñetas o no
  animate = true, // Habilitar/deshabilitar animaciones
}) => {
  // Variantes de animación
  const fadeIn = animate
    ? {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
        }),
      }
    : {};

  const slideDown = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const zoomOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className={`container mx-auto p-4 ${componentBgColor} ${gap} py-spacing-3`}>
      <h2 className={`text-center font-primary font-bold mb-spacing-2  ${componentTitleColor} ${componentTitleSize}`}>
        {componentTitle}
      </h2>
      {entries.map((entry, index) => (
        <motion.div
          key={index}
          className="p-2 w-full"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`collapse collapse-arrow border rounded-box ${bgColor} ${borderColor}`}
            variants={zoomOnHover}
          >
            <input type="checkbox" className="peer" id={`toggle-${index}`} hidden />
            <label
              htmlFor={`toggle-${index}`}
              className={`collapse-title font-medium block cursor-pointer whitespace-normal break-words ${titleSize} ${titleTextColor}`}
            >
              {entry.title} - <strong>{entry.date}</strong>
            </label>

            <AnimatePresence>
              <motion.div
                className={`collapse-content peer-checked:block hidden ${contentBgColor} ${detailsTextColor} ${detailsSize}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={slideDown}
              >
                <ul className={`${useBulletPoints ? "list-disc" : "list-none"} pl-5`}>
                  {entry.details.map((detail, detailIndex) => (
                    <li className="py-spacing-1 sm:py-spacing-2" key={detailIndex}>{detail}</li>
                  ))}
                </ul>

                {/* Mostrar imagen solo si existe */}
                {entry.image && (
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeIn" } }}
                  >
                    <Image
                      src={entry.image}
                      alt="Certificate"
                      width={600}
                      height={400}
                      className="my-spacing-2 w-full max-w-full h-auto sm:max-w-md lg:max-w-lg"
                    />
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationExperience;
