// src/data/cv-data.js
export const CV_DATA = {
  navigation: [
    { name: "Experiencia", url: "#experiencia" },
    { name: "Proyectos", url: "#proyectos" },
    { name: "Certificaciones", url: "#certificaciones" },
    { name: "Habilidades", url: "#habilidades" },
  ],
  profile: {
    name: "Diego Pacheco",
    title: "Data Engineer | Experto en Cloud & DevOps",
    email: "contacto@diegopacheco.cl",
    linkedin: "https://www.linkedin.com/in/diego-pacheco-navarro/",
    github: "https://github.com/ElMapuchito",
    location: "Santiago, Chile",
    about: "Ingeniero de Datos y Cloud con más de 3 años de experiencia liderando la transformación de ecosistemas de datos. Me especializo en la migración de sistemas legados (on-premise, SAP ABAP) a arquitecturas nativas en Google Cloud Platform (GCP) o Amazon Web Services (AWS), construyendo y optimizando pipelines ETL robustos y automatizados. Mi enfoque se centra en la creación de productos de datos gobernados y de alto valor. Apasionado por la cultura DevOps y la automatización de infraestructura con CI/CD."
  },
  experience: [
    {
      title: "AI & Data Engineer",
      company: "Deloitte",
      date: "Agosto 2025 - Presente",
      description: "Mi rol se centra en la creación de productos de datos de alto valor, modernizando el ecosistema analítico de la compañía. Coperativamente llevamos la compleja tarea de re-arquitectar y migrar lógicas de negocio críticas desde sistemas SAP ABAP o Access a una arquitectura nativa en Google Cloud Platform (GCP), desbloqueando datos antes inaccesibles. Para garantizar la integridad y calidad de estos nuevos activos, donde se implemento un marco de gobernanza de datos utilizando Google Dataplex, automatizando el descubrimiento, la catalogación y la aplicación de políticas de seguridad. Además, desarrolle agentes inteligentes con Google ADK y el modelo Gemini para automatizar tareas de procesamiento y facilitar la consulta de datos en lenguaje natural."
    },
    {
      title: "Data Engineer JR",
      company: "Banco Itau",
      date: "Febrero 2024 - Agosto 2025",
      description: "Fui responsable del ciclo de vida completo de los pipelines de datos en el datalake de AWS. Diseñé y desarrollé nuevos procesos de ingesta, y mi rol incluyó la mejora continua del framework central, aplicando modificaciones que optimizaron su rendimiento y escalabilidad. Uno de mis principales logros fue la implementación de un sistema de 'ingesta ágil', que permitió a diferentes equipos de la compañía incorporar nuevas fuentes de datos de forma autónoma y rápida. Además, gestioné la estabilización y depuración de los flujos de trabajo existentes para garantizar la máxima fiabilidad de los datos."
    },
    {
      title: "Data Engineer - Practica Profesional",
      company: "Banco BICE",
      date: "Septiembre 2023 - Diciembre 2023",
      description: "Lideré la modernización de la infraestructura de datos mediante la migración de procesos ETL Salesforce Marketing Cloud a Google Cloud Platform (GCP). Diseñé y desarrollé pipelines automatizados para la ingesta de datos, integrando diversas APIs de marketing directamente con BigQuery. Este proyecto finalizo con una optimización significativa de los flujos de trabajo, mejorando la eficiencia y la disponibilidad de los datos para el análisis de negocio."
    }
  ],
  projects: [
    {
      title: "Mi Portafolio Personal",
      description: "Este mismo sitio web, construido con Astro, TailwindCSS y desplegado en Google Cloud Run con un pipeline de CI/CD automatizado.",
      link: "https://github.com/ElMapuchito/website_diegopacheco"
    }
  ],
  skills: ["Amazon Web Services", "Google Cloud", "CI/CD", "Docker", "TypeScript", "Node.js", "React", "Astro"],
  certifications: [
    {
      title: "AWS Certified Data Engineer - Associate",
      issuer: "Amazon Web Services",
      date: "Diciembre 2025 - Diciembre 2028",
      link: "https://www.credly.com/badges/eb8e25e0-1d5b-45ee-a444-a0a0c0627bfc/public_url",
      badge: '/badges/aws-certified-data-engineer-associate.png' 
    }
  ]
};