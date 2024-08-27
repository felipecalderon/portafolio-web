import { IconType } from "react-icons"
import { AiOutlineGlobal } from "react-icons/ai"
import { FaBehance, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export interface PartnersInterface {
    name: string
    place: string
    image: string
    description: string
    social: {
        name: string
        Icon: IconType
        url: string
    }[]
}

export const partners: PartnersInterface[] = [
    {
        name: "Bárbara Manquilef",
        place: "Temuco, Chile",
        image: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/partners/ec4rymvqivj3u8bq8olu",
        description:
            "Abogada, Licenciada en Ciencias Jurídicas. Dedicación en el área de Derecho Animal y Derecho de Familia. Enfocada en la protección sin distinción de especie y en el reconocimiento de las familias multiespecie.",
        social: [
            {
                name: "LinkedIn",
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/barbara-manquilef/",
            },
        ],
    },
    {
        name: "Lucas Id Betan",
        place: "Rosario, Santa Fe, Argentina",
        image: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/partners/lp1iaglgso2p9p1rdu5b",
        description:
            "Frontend Developer: HTML, CSS , Javascript, Typescript, React, NextJs, Vite, Astro, TailwindCSS, NextUI, Sass, Bootstrap, Zustand, Redux Toolkit, Context API, Git/Github, Firebase.",
        social: [
            {
                name: "Github",
                Icon: FaGithub,
                url: "https://github.com/Lidbetan/",
            },
            {
                name: "LinkedIn",
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/lucas-id-betan-dev/",
            },
        ],
    },
    {
        name: "Rodrigo Ruiz",
        place: "Miramar, Argentina",
        image: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/partners/ysjra96tqspb5n92rsk2",
        description:
            "Comunicador Visual / UI UX Designer con bases en Diseño Gráfico y Front-end. Soluciono los problemas desde la posición y vivencia del usuario de la forma más humana y práctica posible.",
        social: [
            {
                name: "Behance",
                Icon: FaBehance,
                url: "https://www.behance.net/uirodriruiz/",
            },
            {
                name: "LinkedIn",
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/uirodriruiz/",
            },
        ],
    },
    {
        name: "Kevin Grassi",
        place: "Montevideo, Uruguay",
        image: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/partners/kfpfunrrjyzprkdvlsph",
        description:
            "Diseñador Gráfico y Web con 3+ años de experiencia, con 1+ año enfocado en Diseño UI/UX. Experiencias: Figma, Adobe XD, Photoshop e Illustrator, Hootsuite, Tweetdeck, Gramblr, HTML, CSS, Javascript, PHP y MySQL",
        social: [
            {
                name: "LinkedIn",
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/kevin-grassi-ui-designer/",
            },
            {
                name: "Sitio web",
                Icon: AiOutlineGlobal,
                url: "https://kggrassi.com/",
            },
        ],
    },
    {
        name: "Sandra Rodriguez",
        place: "Medellín, Colombia",
        image: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/partners/lqvrjsepclj2ylva9qmk",
        description:
            "10+ años en Project Management y 5+ años liderando equipos como Scrum Master, he trabajado en proyectos utilizando metodologías Waterfall y Ágiles. Certificada en Project Management y Scrum Master, me destaco por ser organizada y enfocada",
        social: [
            {
                name: "LinkedIn",
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/sandra-rodriguez-pm/",
            },
        ],
    },
    {
        name: "Héctor Sandoval",
        place: "Temuco, Chile",
        image: "https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/partners/urunbnt2kkqlj88jnkga",
        description:
            "Ing. en Computación e Informática, Scrum Master y KMP I-II +4 años de experiencia en el cargo. +5 años de experiencia en desarrollo de software. Scrum y Kanban, descubriendo siempre nuevas necesidades y formas de agregar valor a los productos.",
        social: [
            {
                name: "Github",
                Icon: FaGithub,
                url: "https://github.com/hcotrena/",
            },
            {
                name: "LinkedIn",
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/hector-sandoval-cotrena/",
            },
        ],
    },
]
