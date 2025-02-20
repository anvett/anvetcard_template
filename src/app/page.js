import React from "react";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";
import ContactButtons from "@/components/profile/ContactButtons/ContactButtons";
import ContactIcons from "@/components/profile/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/profile/SocialMediaIcons/SocialMediaIcons";
import SocialMediaButtons from "@/components/profile/SocialMediaButtons/SocialMediaButtons";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal";
import Slider from "@/components/cardContent/Slider/Slider";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience";
import BankInfo from "@/components/cardContent/PaymentInfo/PaymentInfo";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDisplay";
import VideoPlayer from "@/components/cardContent/VideoPlayer/VideoPlayer";
import CallToAction from "@/components/cardContent/cta/cta";



//------------------------------------------------------------
// Profile data
//------------------------------------------------------------

const profileData = {
  name: "María Emilia Arias",
  title: "Licenciada en Psicología",
  description: "Especializada en intervención en crisis, manejo del estrés y bienestar emocional.",
  image: "/assets/images/profile/profile.png",
  phone: "+593995818023",
};

//------------------------------------------------------------
// Contact data
//------------------------------------------------------------

const contactsData = [
  { type: "phone", icon: "/assets/icons/call.png", text: "Llamar", action: "tel:+593995818023" },
  {
    type: "email",
    icon: "/assets/icons/email.png",
    text: "Email",
    action: "mailto:maearias350@gmail.com",
  },
  {
    type: "location",
    icon: "/assets/icons/location.png",
    text: "Ubicación",
    address: "Calderón, Marianitas",
    hours: "Lun-Vie 9am-6pm",
    googleMapsLink: "https://maps.google.com?q=Calderón,+Marianitas",
  },
];

//------------------------------------------------------------
// Social Links data
//------------------------------------------------------------

const socialLinks = [
  {
    type: "instagram",
    icon: "instagram.png",
    url: "https://www.instagram.com/tupausa_mental?igsh=MXd0bHNoNDd1bjZkMA==",
    text: "Instagram",
  },
];

//------------------------------------------------------------
// Education and Experience data
//------------------------------------------------------------

const entries = [
  {
    title: "Licenciatura en Psicología",
    date: "2024",
    details: [
      "Universidad Politécnica Salesiana",
      "Formación en evaluación y diagnóstico psicológico",
      "Enfoque en intervención clínica y salud mental",
    ],
  },
  {
    title: "Diplomado en Psicología de Emergencias e Intervención en Crisis",
    date: "2024",
    details: [
      "Consejo de Protección de Derechos del DMQ",
      "Capacitación en respuesta inmediata ante crisis emocionales",
      "Desarrollo de estrategias de apoyo en situaciones de emergencia",
    ],
  },
  {
    title: "Curso de Prevención del Abuso Sexual Infantil",
    date: "2024",
    details: [
      "Consejo de Protección de Derechos del DMQ",
      "Técnicas de detección y prevención de abuso infantil",
      "Enfoque en protección y bienestar infantil",
    ],
  },
];

//------------------------------------------------------------
// Items de la galería
//------------------------------------------------------------

const items = [
  {
    title: "Manejo del Estrés y Ansiedad",
    type: "image",
    image: "/assets/images/services/manejo_estres.png",
    description: [
      "Identificación de factores estresantes",
      "Técnicas de relajación y mindfulness",
      "Estrategias para el control de la ansiedad",
      "Gestión de pensamientos negativos",
      "Desarrollo de hábitos de bienestar emocional",
    ],
    highlight: "Transforma el estrés en equilibrio",
  },
  {
    title: "Autoconocimiento y Crecimiento Personal",
    type: "image",
    image: "/assets/images/services/autoconocimiento.png",
    description: [
      "Exploración de identidad y valores",
      "Técnicas para el desarrollo de autoestima",
      "Establecimiento de metas personales",
      "Estrategias de autoconfianza y empoderamiento",
      "Prácticas para la resiliencia emocional",
    ],
    highlight: "Conócete, crece y potencia tu bienestar",
  },
  {
    title: "Psicoeducación sobre Salud Mental",
    type: "image",
    image: "/assets/images/services/salud_mental.png",
    description: [
      "Concientización sobre trastornos mentales",
      "Desmitificación de la terapia psicológica",
      "Estrategias para fomentar la salud emocional",
      "Técnicas para la comunicación asertiva",
      "Educación sobre inteligencia emocional",
    ],
    highlight: "Aprende a cuidar tu mente y emociones",
  },
  {
    title: "Gestión del Tiempo y Productividad",
    type: "image",
    image: "/assets/images/services/productividad.png",
    description: [
      "Priorización de tareas diarias",
      "Uso de técnicas de organización personal",
      "Identificación de hábitos que afectan la productividad",
      "Desarrollo de disciplina y enfoque",
      "Equilibrio entre vida personal y laboral",
    ],
    highlight: "Haz más, sin desgastarte",
  },
  {
    title: "Intervención en Crisis Emocionales",
    type: "image",
    image: "/assets/images/services/crisis_emocionales.png",
    description: [
      "Primeros auxilios psicológicos",
      "Técnicas para la regulación emocional en crisis",
      "Estrategias de apoyo en momentos de angustia",
      "Intervención en episodios de ansiedad aguda",
      "Herramientas para la toma de decisiones en crisis",
    ],
    highlight: "Acompañamiento en momentos difíciles",
  },
];

//------------------------------------------------------------
// Información de  bancos
//------------------------------------------------------------

const banksData = [
  {
    name: "Banco Pichincha",
    logo: "logo_pichincha.png",
    instructions: "Realizar transferencia a la siguiente cuenta:",
    details: [
      { label: "Titular", value: "Lic. María Emilia Arias" },
      { label: "Número de Cuenta", value: "2207721022" },
      { label: "Tipo de Cuenta", value: "Ahorros" },
      { label: "No. Identificación", value: "1122554477" },
    ],
  },
];

//------------------------------------------------------------
// Slider data
//------------------------------------------------------------

const slidesData = [
  {
    image: "/assets/images/slides/terapia_psicologica.png",
    title: "Beneficios de la Terapia Psicológica",
  },
  {
    image: "/assets/images/slides/regulacion_emocional.png",
    title: "Técnicas de Regulación Emocional",
  },
  {
    image: "/assets/images/slides/prevencion_salud_mental.png",
    title: "Prevención en Salud Mental",
  },
  {
    image: "/assets/images/slides/primeros_auxilios.png",
    title: "Primeros Auxilios Psicológicos",
  },
  {
    image: "/assets/images/slides/burnout_laboral.png",
    title: "Prevención del Burnout Laboral",
  },
];

//------------------------------------------------------------

export default function CamilaCard() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.0), rgba(10,0,0,0.0)), url('/assets/images/background1.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* -------------------------------------------------------------------------------
      Profile components
      ------------------------------------------------------------------------------- */}
      <ProfileCard
        profile={profileData}
        whatsappMessage="Hola, quiero saber más sobre tus servicios."
        buttonType="btn-rounded" // Tipo de botón (btn-solid, btn-outline, btn-rounded, etc.)
        buttonBgColor="bg-secondary" // Color de fondo del botón
        buttonTextColor="text-light" // Color del texto del botón
        bgColor="bg-transparent" // Color de fondo de la tarjeta
        textColor="text-dark" // Color del texto
        borderColor="border-transparent" // Color del borde
        nameSize="text-size-5 sm:text-size-8 md:text-size-8" // Tamaño del nombre
        titleSize="text-lg sm:text-xl md:text-2xl" // Tamaño del título
        descriptionSize="text-base sm:text-lg md:text-xl" // Tamaño del texto de descripción
        buttonTextSize="text-size-1 sm:text-size-2 md:text-size-2" // Tamaño del texto en botones
        animationDuration={0.8} // Control de animaciones
      />
      ;
      <ContactButtons
        contacts={contactsData}
        componentBgColor="trasparent"
        buttonType="btn-rounded"
        bgColor="bg-secondary"
        textColor="text-light"
        borderColor="border-[#FBBF24]"
        hoverColor="hover:bg-transparent"
        buttonTextSize="text-size-1 sm:text-2 md:text-2"
        iconSize="w-size-2 h-size-2 sm:w-10 sm:h-10 md:w-12 md:h-12"
        modalBgColor="bg-primary"
        modalTextColor="text-dark"
        modalTextSize="text-base sm:text-lg md:text-xl"
        modalTitle="Ubicación y Horarios"
        modalButtonText="Cerrar Ventana"
        animationDuration={0.6}
      />
      ;
      <SocialMediaButtons
        socialLinks={socialLinks}
        bgColor="bg-secondary"
        textColor="text-light"
        borderColor="border border-transparent"
        hoverColor="hover:bg-transparent"
        buttonType="btn-rounded"
        iconSize="w-7 h-7 sm:w-8 sm:h-8 md:w-8 md:h-8"
        buttonTextSize="text-size-1 sm:text-2 md:text-2"
        layout="row"
        gap="gap-6"
        animate={true}
        componentBgColor="bg-transparent"
      />
      {/* ------------------------------------------------------------
      Card Content
      ------------------------------------------------------------ */}
      <div className="w-100% bg-secondary">
        <EducationExperience
          componentTitle="Mi Experiencia y Educación"
          componentTitleColor="text-dark"
          componentTitleSize="text-3xl sm:text-4xl"
          entries={entries}
          componentBgColor="bg-transparent"
          bgColor="bg-light"
          borderColor="border border-gray-300"
          contentBgColor="bg-primary"
          titleTextColor="text-dark"
          detailsTextColor="text-light"
          titleSize="text-size-1 sm:text-4 md:text-4"
          detailsSize="text-size-1 sm:text-4 md:text-4"
          gap="gap-6"
          useBulletPoints={true}
          animate={true}
        />
      </div>
      <div id="services">
        <GalleryWithModal
          componentTitle="Mis Servicios" // Contenido del título general
          componentTitleColor="text-dark" // Color del título general
          componentTitleSize="text-3xl sm:text-4xl" // Tamaño del título general
          items={items}
          componentBgColor="bg-transparent" // Fondo del contenedor de la galería
          galleryItemBgColor="bg-transparent" // Fondo de cada elemento de la galería
          modalBgColor="bg-primary" // Fondo del modal
          titleTextColor="text-dark" // Color del título en la galería
          modalTitleTextColor="text-dark" // Color del título en el modal
          titleSize="text-size-1 sm:text-size-2" // Tamaño del título en la galería
          modalTitleSize="text-2xl sm:text-3xl" // Tamaño del título en el modal
          descriptionTextColor="text-dark" // Color del texto de la descripción
          descriptionTextSize="text-md sm:text-lg" // Tamaño del texto de la descripción
          highlightTextColor="text-light" // Color del texto destacado
          highlightTextSize="text-size-3 sm:text-size-5" // Tamaño del texto destacado
          modalButtonTextSize="text-base sm:text-lg" // Tamaño del texto en los botones del modal
          aspectRatio="4:3" // Relación de aspecto de imágenes y videos
          whatsAppButtonText="Solicitar información" // Texto del botón de WhatsApp
          modalButtonType="btn-rounded" // Tipo de botón (btn-solid, btn-outline, btn-flat)
          modalButtonBgColor="bg-secondary" // Color de fondo del botón
          modalButtonTextColor="text-light" // Color del texto del botón
          modalButtonBorderColor="border border-transparent" // Color del borde del botón
          modalButtonHoverColor="hover:bg-light hover:text-dark" // Color al hacer hover en el botón
        />
      </div>
      <VideoPlayer
        componentTitle="Conoce más sobre mis servicios"
        titleColor="text-dark"
        titleSize="text-3xl sm:text-4xl"
        titleFontWeight="font-semibold"
        componentBgColor="bg-transparent"
        videoUrl="/assets/videos/acompanamiento_psicologico.mp4"
        borderColor="border border-none"
        borderRadius="rounded-xl"
        shadow="shadow-xl"
        aspectRatio="9:16"
      />
      <CallToAction
        ctaTitle="Únete a Nuestro Equipo"
        titleColor="text-dark"
        titleSize="text-size-3 sm:text-size-8"
        titleFontWeight="font-semibold"
        fontType="font-serif"
        componentBgColor="bg-secondary"
        backgroundImage="/assets/images/cta-background.jpg"
        borderColor="border border-light"
        borderRadius="rounded-xl"
        shadow="shadow-xl"
        ctaText="Toma el control de tu bienestar emocional. Aprende a gestionar el estrés y la ansiedad con herramientas efectivas."
        buttonText="Reserva tu cita ahora"
        phoneNumber="+593995818023"
        buttonVariant="btn-rounded"
        buttonBgColor="bg-primary"
        buttonTextColor="text-white"
        buttonBorderColor="border border-light"
        buttonHoverColor="hover:bg-dark hover:text-white"
      />
      <Slider
        slides={slidesData}
        componentTitle="Mis Servicios Destacados"
        titleColor="text-dark"
        titleSize="text-3xl sm:text-4xl"
        titleFontWeight="font-semibold"
        componentBgColor="bg-transparent"
        carouselBorderColor="border border-light"
        carouselBorderRadius="rounded-xl"
        carouselShadow="shadow-xl"
        imageSize="w-3/4 sm:w-1/2"
        animationSpeed={1.0}
        buttonBgColor="bg-blue-500"
        buttonTextColor="text-white"
        buttonBorderColor="border border-gray-500"
        buttonHoverColor="hover:bg-blue-700"
        loop={true}
        autoplay={true}
        autoplaySpeed={4000}
        showIndicators={false}
      />
      <div className="w-100% bg-secondary" id="info_pago">
        <BankInfo
          banks={banksData}
          componentTitle="Métodos de Pago"
          componentTitleColor="text-dark"
          componentTitleSize="text-3xl sm:text-4xl"
          componentBgColor="Transparent"
          layout="row" // "row" para horizontal, "column" para vertical
          iconSize={80} // Tamaño de los íconos
          borderColor="border border-light" // Color del borde de los íconos
          modalBgColor="bg-primary" // Fondo del modal
          modalTextColor="text-dark" // Color del texto en el modal
          modalButtonType="btn-rounded" // Tipo de botón (btn-outline, btn-flat, etc.)
          modalButtonBgColor="bg-secondary" // Color de fondo del botón
          modalButtonTextColor="text-light" // Color del texto del botón
          modalButtonBorderColor="border border-secondary" // Color del borde del botón
          modalButtonHoverColor="hover:transparent" // Color al hacer hover en el botón
          modalCopyButtonText="Copiar" // Texto del botón copiar
        />
      </div>
      <QRDisplay
        componentTitle="Mi Código QR"
        titleColor="text-dark"
        titleSize="text-3xl sm:text-4xl"
        titleFontWeight="font-semibold"
        componentBgColor="bg-transparent"
        qrImage="/assets/images/qrcode.png"
        qrSize="w-56 h-56"
        qrBorderColor="border border-red"
        qrBorderRadius="rounded-xl"
        qrShadow="shadow-size-4"
        gap="gap-6"
      />
      <CallToAction
        ctaTitle="Únete a Nuestro Equipo"
        titleColor="text-dark"
        titleSize="text-size-3 sm:text-size-8"
        titleFontWeight="font-semibold"
        fontType="font-serif"
        componentBgColor="bg-secondary"
        backgroundImage="/assets/images/cta-background.jpg"
        borderColor="border border-light"
        borderRadius="rounded-xl"
        shadow="shadow-xl"
        ctaText="Invierte en tu crecimiento personal. Aprende más sobre salud mental y herramientas para una vida equilibrada."
        buttonText=" Empieza tu transformación"
        phoneNumber="+593995818023"
        buttonType="btn-rounded"
        buttonBgColor="bg-primary"
        buttonTextColor="text-white"
        buttonBorderColor="border border-light"
        buttonHoverColor="hover:bg-dark hover:text-white"
      />
      
    </main>
  );
}
