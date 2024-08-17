import { Habilidadestxt } from "@/interfaces/global.interfaces"

interface Experiencias {
    nombre: string
    fecha: string
    lugar: string
    web: string
    habilidades: Habilidadestxt[]
    descripcion: string
    img: string
}

export const experiencias: Experiencias[] = [
    {
        nombre: "Sitio web a medida para Abogada",
        fecha: "2024-01",
        lugar: "Asesoría Manquilef",
        web: "https://asesoriamanquilef.cl",
        habilidades: ["IA - Openai", "Git / GitHub", "NextJS", "NodeJS", "TailwindCSS", "Rest API", "React"],
        descripcion: "Sitio web personalizado para abogada con chatbot de inteligencia artificial capacitado para atender consultas básicas legales en Chile.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/xt2ujbm0kqfgclrl4wt2",
    },
    {
        nombre: "Sistema médico para doctores y donantes",
        fecha: "2024-07",
        lugar: "Ley Justina Argentina",
        web: "https://justinaio.vercel.app",
        habilidades: ["Desarrollo Ágil", "Git / GitHub", "NextJS", "NodeJS", "TailwindCSS", "Rest API", "React"],
        descripcion: "Portal web para conectar médicos, pacientes y donantes de sangre, en torno a la ley Justina de Argentina.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/h0cn3z1jyqsvhc3kpxww",
    },
    {
        nombre: "Desarrollo de Software ERP",
        fecha: "2023-03",
        lugar: "Calzados D3SI",
        web: "https://desiapp.vercel.cl",
        habilidades: ["Desarrollo Ágil", "Git / GitHub", "NextJS", "NodeJS", "TailwindCSS", "Rest API", "React"],
        descripcion: "Sistema ERP para franquicia: Gestión de ventas, órdenes de compra, tiendas filiales y multi-usuarios.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/niq0gtyimwdqqmjec3oa",
    },
    {
        nombre: "Diseño de sitio web ecommerce",
        fecha: "2022-12",
        lugar: "Librería Fenix, Temuco",
        web: "https://libreriafenix.cl",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Encargado de la gestión con el equipo de marketing para SEO y SEM. Desarrollo de sitio web y generación de ecommerce.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/hcm3uxofqm2woi6ivpa3",
    },
    {
        nombre: "Desarrollo de Ecommerce y API",
        fecha: "2018-11",
        web: "https://geoconstructor.cl",
        lugar: "Geoconstructor",
        habilidades: ["Wordpress", "Woocommerce", "Desarrollo Ágil", "Rest API", "NodeJS"],
        descripcion: "Desarrollo de sitio web para empresa de construcción, gestionando la presencia online y la interacción con clientes.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/arlkq3f9b85yl2w0l03a",
    },
    {
        nombre: "Desarrollo de sitio web",
        fecha: "2016-06",
        web: "https://terremotochile.cl",
        lugar: "Terremoto Chile",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Diseño y desarrollo de sitio web para promoción de productos de la empresa. Implementación de ecommerce.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/quhh9pt1cywexucejof8",
    },
    {
        nombre: "Desarrollo de sitio web",
        fecha: "2017-10",
        web: "https://productosmulpun.cl",
        lugar: "Mulpun",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Sitio web, generación de ecommerce, administración de redes sociales y diseño de publicaciones.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/o7gmdbmsudra3tbrbvnx",
    },
    {
        nombre: "Desarrollo de sitio web para ONG",
        fecha: "2022-03",
        web: "https://ayupec.org",
        lugar: "Ayupec",
        habilidades: ["Wordpress", "Desarrollo Ágil", "Git / GitHub"],
        descripcion: "Diseño de sitio web para ONG 'Derecho Animal', gestionando comunidad y portal de noticias.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/qexsrpdgybhdwiucxzz0",
    },
    {
        nombre: "Desarrollo de sitio web para ONG",
        fecha: "2020-06",
        web: "https://web.fiscaliadelconsumidor.cl",
        lugar: "Fiscalía del Consumidor",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Portal web para ONG 'Derecho de Consumo', gestionando comunidad y portal de noticias. Sitio web en WordPress.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/yxigbuxya1nqkilq33xq",
    },
]
