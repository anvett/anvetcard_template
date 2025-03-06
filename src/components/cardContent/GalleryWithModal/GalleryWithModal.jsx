"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GalleryWithModal = ({
  componentTitle = "", // Contenido del título general
  componentTitleColor = "text-black", // Color del título general
  componentTitleSize = "text-2xl sm:text-3xl", // Tamaño del título general
  items,
  componentBgColor = "bg-transparent",
  galleryItemBgColor = "bg-white",
  modalBgColor = "bg-white",
  titleTextColor = "text-primary",
  modalTitleTextColor = "text-secondary",
  titleSize = "text-lg sm:text-xl",
  modalTitleSize = "text-xl sm:text-2xl",
  descriptionTextColor = "text-gray-700",
  descriptionTextSize = "text-sm sm:text-base",
  highlightTextColor = "text-accent",
  highlightTextSize = "text-base sm:text-lg",
  modalButtonTextSize = "text-sm sm:text-base",
  aspectRatio = "16:9",
  whatsAppButtonText = "Contactar por WhatsApp",
  modalButtonType = "btn-outline",
  modalButtonBgColor = "bg-primary",
  modalButtonTextColor = "text-white",
  modalButtonBorderColor = "border border-gray-300",
  modalButtonHoverColor = "hover:bg-secondary",
  
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
    }),
  };

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (

    <div className={`w-full container mx-auto p-4 py-spacing-3 ${componentBgColor}`}>
      {/* ✅ Título General del Componente */}
      <h2 className={`text-center font-bold mb-spacing-2 ${componentTitleColor} ${componentTitleSize}`}>
        {componentTitle}
      </h2>
      <h4 className="text-center text-size-1 sm:text-size-2 text-dark font-semibold pb-spacing-3" >Haz clic en las imágenes para obtener más información </h4>
      
      <div className="flex flex-wrap justify-center gap-spacing-1 sm:gap-spacing-5">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-spacing-3 cursor-pointer ${galleryItemBgColor} shadow-lg rounded-lg`}
            onClick={() => openModal(item)}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src={item.type === "video" ? item.thumbnail : item.image}
              alt={item.title}
              width={300}
              height={300}
              className="object-cover w-full h-full rounded-lg"
            />
            <h3 className={`${titleSize} ${titleTextColor} text-center font-semibold mt-3`}>
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div className={`relative mx-auto p-5 border w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg rounded-md ${modalBgColor}`}>
              <div className="mt-3 text-center flex flex-col">
                {/* ✅ Ahora la imagen en el modal NO SE CORTA */}
                {selectedItem.type === "video" ? (
                  <div className={`relative w-full aspect-${aspectRatio.replace(":", "-")} rounded-lg overflow-hidden`}>
                    <video controls className="w-full h-full object-contain">
                      <source src={selectedItem.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="relative w-full flex justify-center">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      width={600}
                      height={400}
                      className="object-contain w-auto h-auto max-w-full rounded-lg"
                    />
                  </div>
                )}

                <h3 className={`${modalTitleTextColor} ${modalTitleSize} font-bold mt-3 py-spacing-2`}>
                  {selectedItem.title}
                </h3>

                <ul className={`list-disc list-outside text-left pl-5 pb-spacing-2 ${descriptionTextColor} ${descriptionTextSize} mt-2`}>
                  {selectedItem.description.map((desc, index) => (
                    <li className="py-1" key={index}>{desc}</li>
                  ))}
                </ul>

                <p className={`${highlightTextColor} ${highlightTextSize} font-semibold mt-2 pb-spacing-2`}>
                  {selectedItem.highlight}
                </p>

                <div className="flex gap-4 pt-4 justify-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/+593992543979?text=Desearía%20saber%20más%20sobre%20${encodeURIComponent(
                      selectedItem.title
                    )}`}
                    className={`${modalButtonType} ${modalButtonBgColor} ${modalButtonTextColor} ${modalButtonBorderColor} ${modalButtonHoverColor} ${modalButtonTextSize} px-4 py-2 font-semibold rounded-md`}
                  >
                    {whatsAppButtonText}
                  </a>
                  <button
                    onClick={closeModal}
                    className={`${modalButtonType} ${modalButtonBgColor} ${modalButtonTextColor} ${modalButtonBorderColor} ${modalButtonHoverColor} ${modalButtonTextSize} px-4 py-2 font-semibold rounded-md`}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryWithModal;
