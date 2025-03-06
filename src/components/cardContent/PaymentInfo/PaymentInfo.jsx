"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const BankInfo = ({
  componentTitle = "Información de Pago", // Contenido del título general
  componentTitleColor = "text-black", // Color del título general
  componentTitleSize = "text-2xl sm:text-3xl", // Tamaño del título general
  componentBgColor = "bg-transparent", // Fondo del componente
  banks,
  layout = "row", // 'row' para horizontal, 'column' para vertical
  iconSize = 80, // Tamaño de los íconos
  borderColor = "border border-gray-300", // Color del borde de los íconos
  modalBgColor = "bg-white", // Fondo del modal
  modalTextColor = "text-black", // Color del texto en el modal
  modalButtonType = "btn-outline",
  modalButtonBgColor = "bg-primary",
  modalButtonTextColor = "text-white",
  modalButtonBorderColor = "border border-gray-300",
  modalButtonHoverColor = "hover:bg-secondary",
  modalCopyButtonText = "Copiar", // Texto personalizable del botón copiar
}) => {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleShow = (bank) => setSelectedBank(bank);
  const handleClose = () => setSelectedBank(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Información copiada: ${text}`);
    } catch (error) {
      console.error("Error al copiar al portapapeles: ", error);
      alert("Error al copiar la información");
    }
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
      <h4 className="text-center text-size-1 sm:text-size-2 text-dark font-semibold mb-spacing-3" >Haz clic en el logo para ver los datos bancarios </h4>

      <div className={`flex ${layout === "row" ? "flex-wrap justify-center" : "flex-col items-center"} gap-4`}>
        {banks.map((bank, index) => (
          <motion.div
            key={index}
            className={`p-4 cursor-pointer rounded-xl ${borderColor}`}
            onClick={() => handleShow(bank)}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
          >
            <Image
              src={`/assets/images/payment/${bank.logo}`}
              alt={bank.name}
              width={iconSize}
              height={iconSize}
              className="rounded-xl"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal con animación */}
      <AnimatePresence>
        {selectedBank && (
          <motion.div
            className="modal modal-open"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div className={`modal-box ${modalBgColor}`}>
              <h3 className={`text-size-2 font-bold text-center ${modalTextColor}`}>{selectedBank.name}</h3>
              <p className={`text-center pb-spacing-1 ${modalTextColor}`}>{selectedBank.instructions}</p>
              <p className= {`text-center pb-spacing-2 ${modalTextColor}`} > Haz clic en el botón para copiar el dato y pégalo en tu app bancaria.</p>
              {selectedBank.details.map((detail, idx) => (
                <div key={idx} className="flex justify-between items-center my-2">
                  <span className={`text-size-1 ${modalTextColor}`}>
                    {detail.label}: <span className="font-semibold">{detail.value}</span>
                  </span>
                  <button
                    className={`${modalButtonType} ${modalButtonBgColor} ${modalButtonTextColor} ${modalButtonBorderColor} ${modalButtonHoverColor} px-4 py-2 rounded-md`}
                    onClick={() => copyToClipboard(detail.value)}
                  >
                    {modalCopyButtonText}
                  </button>
                </div>
              ))}
              <div className="modal-action">
                <button
                  className={`${modalButtonType} ${modalButtonBgColor} ${modalButtonTextColor} ${modalButtonBorderColor} ${modalButtonHoverColor} px-4 py-2 rounded-md`}
                  onClick={handleClose}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BankInfo;

