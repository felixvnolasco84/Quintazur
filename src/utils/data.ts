
import {
  AchievementsSectionInterface,
} from "./interfaces";





import Independiente from "@/assets/img/slider/Independiente.png";
import Moderadadependencia from "@/assets/img/slider/Moderadadependencia.png";
import Altadependencia from "@/assets/img/slider/Altadependencia.png";
import Memorycare from "@/assets/img/slider/Memorycare.png";

export const achievementsSection: AchievementsSectionInterface = {
  title: "Cuidarte con amor es acompañarte en tu indeependencia.",
  description: "CUIDADOS",
  achievements: [
    {
      title: "Independiente",
      image: Independiente,
      description:
        "Claritas est etiam processusa icus, nuiser sequitur mutationem",
    },
    {
      title: "Moderada dependencia",
      image: Moderadadependencia,
      description:
        "Claritas est etiam processusa icus, nuiser sequitur mutationem",
    },
    {
      title: "Alta dependencia",
      image: Altadependencia,
      description:
        "Claritas est etiam processusa icus, nuiser sequitur mutationem",
    },
    {
      title: "Memory care",
      image: Memorycare,
      description:
        "Claritas est etiam processusa icus, nuiser sequitur mutationem",
    },
  ],
};






export type CompanySchemaInterface = {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    email: string;
    areaServed: string;
  };
};

// export const companySchema: CompanySchemaInterface = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "EPI Group",
//   url: "https://epigroup.mx",
//   logo: "https://epigroup.mx/epi-logo.svg",
//   description:
//     "Dedicada a construir proyectos de Generación, Almacenamiento y Distribución de Energía.",
//   address: {
//     "@type": "PostalAddress",
//     streetAddress: "Guillermo Gonzalez Camarena 1600 Int 3D",
//     addressLocality: "Santa Fe",
//     addressRegion: "Mexico City",
//     postalCode: "1600",
//     addressCountry: "Mexico",
//   },
//   contactPoint: {
//     "@type": "ContactPoint",
//     telephone: "+52-55-5812-5581",
//     contactType: "customer service",
//     email: "info@epigroup.mx",
//     areaServed: "Worldwide",
//   },
//   // sameAs: [
//   //   "https://facebook.com/yourcompany",
//   //   "https://twitter.com/yourcompany",
//   //   "https://linkedin.com/company/yourcompany",
//   // ],
// };

export const epiEquiposcompanySchema: CompanySchemaInterface = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EPI Equipos",
  url: "https://epigroup.mx/epi",
  logo: "https://epigroup.mx/epi-logo.svg",
  description:
    "Proveedora de Ingeniería, Diseño y Construcción de plantas industriales.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Guillermo Gonzalez Camarena 1600 Int 3D",
    addressLocality: "Santa Fe",
    addressRegion: "Mexico City",
    postalCode: "1600",
    addressCountry: "Mexico",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-55-5812-5581",
    contactType: "customer service",
    email: "info@epigroup.mx",
    areaServed: "Worldwide",
  },
  // sameAs: [
  //   "https://facebook.com/yourcompany",
  //   "https://twitter.com/yourcompany",
  //   "https://linkedin.com/company/yourcompany",
  // ],
};
