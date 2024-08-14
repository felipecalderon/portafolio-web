import { Habilidadestxt } from "@/interfaces/global.interfaces"
import { IconType } from "react-icons"
import { AiFillOpenAI } from "react-icons/ai"
import { DiScrum } from "react-icons/di"
import { FaGithub, FaNodeJs, FaReact, FaWordpress } from "react-icons/fa6"
import { RiNextjsFill } from "react-icons/ri"
import { SiRedux, SiTailwindcss, SiTypescript, SiWoo } from "react-icons/si"
import { TbApi } from "react-icons/tb"

interface Habilidades {
    nombre: Habilidadestxt
    Icono: IconType
}

export const habilidades: Habilidades[] = [
    {
        nombre: "Wordpress",
        Icono: FaWordpress,
    },
    {
        nombre: "Woocommerce",
        Icono: SiWoo,
    },
    {
        nombre: "Typescript",
        Icono: SiTypescript,
    },
    {
        nombre: "React",
        Icono: FaReact,
    },
    {
        nombre: "Redux",
        Icono: SiRedux,
    },
    {
        nombre: "IA - Openai",
        Icono: AiFillOpenAI,
    },
    {
        nombre: "TailwindCSS",
        Icono: SiTailwindcss,
    },
    {
        nombre: "NextJS",
        Icono: RiNextjsFill,
    },
    {
        nombre: "Git / GitHub",
        Icono: FaGithub,
    },
    {
        nombre: "Rest API",
        Icono: TbApi,
    },
    {
        nombre: "NodeJS",
        Icono: FaNodeJs,
    },
    {
        nombre: "Desarrollo Ágil",
        Icono: DiScrum,
    },
]
