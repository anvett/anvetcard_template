"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({
  bgColor = "bg-footer",
  textColor = "text-base-content",
  borderColor = "border-gray-400",
  footerLinks = [],
  linkTextSize = "text-base",
  copyrightText = "© 2024 Anvetcorp SAS. All rights reserved.",
  copyrightColor = "text-secondary",
  copyrightSize = "text-sm",
  footerLogo = "",
}) => {
  return (
    <>
      {/* Footer con enlaces dinámicos */}
      <footer className={`${bgColor} py-4 ${textColor} ${borderColor} border-t-2`}>
        {footerLogo && (
          <div className="flex justify-center mb-2">
            <Image src={footerLogo} width={200} height={200} alt="Footer Logo" />
          </div>
        )}
        <ul className="flex justify-center gap-4 mb-4">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className={`${linkTextSize} hover:text-secondary`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </footer>

      {/* Footer con derechos de autor y logo opcional */}
      <footer className={`text-center p-4 ${bgColor} ${textColor}`}>
        <p className={`${copyrightSize} ${copyrightColor}`}>{copyrightText}</p>
      </footer>
    </>
  );
};

export default Footer;
