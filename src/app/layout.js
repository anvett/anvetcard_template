

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "María Emilia Arias - Digital Card",
  description: "Licenciada en Psicología, especializada en intervención en crisis y bienestar emocional.",
  keywords: "psicología, intervención en crisis, salud mental, bienestar emocional",
  authors: [{ name: "María Emilia Arias" }],
  robots: "index, follow",
  openGraph: {
    title: "María Emilia Arias - Licenciada en Psicología",
    description: "Licenciada en Psicología, especializada en intervención en crisis y bienestar emocional.",
    url: "https://maemiliaarias.anvetcard.com",
    images: [
      {
        url: "https://maemiliaarias.anvetcard.com/assets/images/logo.jpg",
        alt: "María Emilia Arias",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "María Emilia Arias - Digital Card",
    description: "Licenciada en Psicología, especializada en intervención en crisis y bienestar emocional.",
    images: ["https://maemiliaarias.anvetcard.com/assets/images/logo.jpg"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  

  //----------------------------------------------
  // Navbar configuration
  //----------------------------------------------

  const menuConfig = [
    { label: "Inicio", href: "#inicio" },
    { label: "Info. Pago", href: "#info_pago" },
    { label: "Productos y servicios", href: "#services" },
  ];

  //----------------------------------------------
  // Footer configuration
  //----------------------------------------------

  const footerLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Info. Pago", href: "#info_pago" },
    { label: "Productos y servicios", href: "#services" },
  ];

  //----------------------------------------------

  return (
    <html lang="es">
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: "url('/assets/images/background1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar
          bgColor="bg-primary"
          textColor="text-light"
          borderColor="border-secondary"
          logoSrc="/assets/images/logo.jpg"
          menuItems={menuConfig}
          linkTextSize="text-size-2"
          navTextSize="text-size-4"
          mobileMenuBg="bg-dark"
          mobileMenuTextColor="text-accent"
          mobileIconColor="text-secondary"
        />
        <main>{children}</main>
        <Footer
          bgColor="bg-primary"
          textColor="text-light"
          borderColor="border-secondary"
          footerLinks={footerLinks}
          linkTextSize="text-size-1"
          copyrightText="© 2024 Anvetcorp. Todos los derechos reservados."
          copyrightColor="text-light"
          copyrightSize="text-size-2"
          footerLogo="/assets/images/logo.jpg"
        />
      </body>
    </html>
  );
}
