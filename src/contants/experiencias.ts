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
        habilidades: ["Desarrollo Ágil", "IA - Openai", "NextJS", "NodeJS", "TailwindCSS", "Rest API", "React"],
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
        nombre: "Juego de cartas",
        fecha: "2024-05",
        lugar: "Lectura del Tarot",
        web: "https://lecturatarot.vercel.app",
        habilidades: ["IA - Openai", "TailwindCSS", "NextJS", "React", "Typescript"],
        descripcion: "Desarrollo personal de juego interactivo para obtener una lectura de tarot potenciada con IA.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/vbdwnm0i4bsf8z995qfb",
    },
    {
        nombre: "Creación de tienda online",
        fecha: "2024-02",
        lugar: "Vinos el Canelo",
        web: "https://canelospirits.cl",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Creación y diseño del ecommerce, portal de vinos online con pasarela de pago Webpay Plus.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/gdvuwejiuwl4bhbka9hs",
    },
    {
        nombre: "Sistema tickets de ayuda (TO-DO)",
        fecha: "2024-05",
        lugar: "DIAC Temuco",
        web: "https://diac-client.vercel.app",
        habilidades: ["Desarrollo Ágil", "NextJS", "NodeJS", "TailwindCSS", "Rest API", "React"],
        descripcion: "Sistema personalizado para crear y atender tickets de ayuda (soporte al cliente).",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/v20qpnh5ksuol1p8xpvo",
    },
    {
        nombre: "Diseño de sitio web ecommerce",
        fecha: "2022-12",
        lugar: "Librería Fenix",
        web: "https://libreriafenix.cl",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Encargado de la gestión con el equipo de marketing para SEO y SEM. Desarrollo de sitio web y generación de ecommerce.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/hcm3uxofqm2woi6ivpa3",
    },
    {
        nombre: "Sitio web para ONG Derecho de Consumidores",
        fecha: "2020-06",
        web: "https://web.fiscaliadelconsumidor.cl",
        lugar: "Fiscalía del Consumidor",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Portal web para ONG 'Derecho de Consumo', gestionando comunidad y portal de noticias. Sitio web en WordPress.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/yxigbuxya1nqkilq33xq",
    },
    {
        nombre: "Sitio web para ONG Derecho de los animales",
        fecha: "2022-03",
        web: "https://ayupec.org",
        lugar: "Ayupec",
        habilidades: ["Wordpress", "Desarrollo Ágil", "Git / GitHub"],
        descripcion: "Diseño de sitio web para ONG 'Derecho Animal', gestionando comunidad y portal de noticias.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/qexsrpdgybhdwiucxzz0",
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
        fecha: "2017-10",
        web: "https://productosmulpun.cl",
        lugar: "Mulpun",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Sitio web, generación de ecommerce, administración de redes sociales y diseño de publicaciones.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/o7gmdbmsudra3tbrbvnx",
    },
    {
        nombre: "Creación de formulario online",
        fecha: "2016-06",
        web: "https://terremotochile.cl",
        lugar: "Terremoto Chile",
        habilidades: ["Wordpress", "Woocommerce"],
        descripcion: "Diseño y desarrollo de sitio web para promoción de productos de la empresa. Implementación de ecommerce.",
        img: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/quhh9pt1cywexucejof8",
    },
]
