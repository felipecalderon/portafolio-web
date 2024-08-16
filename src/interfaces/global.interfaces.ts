export type Habilidadestxt =
    | "Wordpress"
    | "Woocommerce"
    | "Typescript"
    | "React"
    | "Redux"
    | "IA - Openai"
    | "TailwindCSS"
    | "NextJS"
    | "Git / GitHub"
    | "Rest API"
    | "NodeJS"
    | "Desarrollo Ágil"

export interface ContactForm {
    correo: string
    nombre: string
    asunto: string
    mensaje: string
}
