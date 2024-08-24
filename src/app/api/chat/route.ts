import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import { mailPresupuesto } from "./mailPresupuesto"

const ia = new OpenAI({ apiKey: process.env.OPENAIKEY ?? "" })
const model = process.env.OPENAIMODEL ?? "gpt-4o-mini"

export const POST = async (req: NextRequest) => {
    try {
        const { chats }: { chats: ChatCompletionMessageParam[] } = await req.json()

        const openaiRes = await ia.chat.completions.create({
            messages: [initialPrompt, ...chats],
            model: model,
            tools: [
                {
                    type: "function",
                    function: {
                        name: "presupuesto",
                        description: `El usuario ha proporcionado todos los 6 datos requeridos para poder generar un presupuesto.
                            Datos requeridos: nombre, correo, ubicacion, detalle del requerimiento, plazo y presupuesto`,
                        parameters: {
                            type: "object",
                            properties: {
                                nombre: {
                                    type: "string",
                                    description: "Nombre del usuario, capitalizado",
                                },
                                correo: {
                                    type: "string",
                                    description: "Dirección de correo del usuario",
                                },
                                ubicacion: {
                                    type: "string",
                                    description: "Ciudad y país de residencia del usuario",
                                },
                                requerimiento: {
                                    type: "string",
                                    description: "Detalle de lo que necesita el usuario y que cosas tiene actualmente (hosting, dominio, etc)",
                                },
                                plazo: {
                                    type: "string",
                                    description: "Tiempo máximo que otorga el usuario para culminar su proyecto",
                                },
                                presupuesto: {
                                    type: "string",
                                    description:
                                        "Monto que dispone para invertir en el proyecto digital, con moneda local ejemplos: 100 USD, 50.000 CLP, 300 EUR",
                                },
                            },
                            required: ["nombre", "correo", "ubicacion", "requerimiento", "plazo", "presupuesto"],
                        },
                    },
                },
            ],
        })
        const toolCall = openaiRes.choices[0].message.tool_calls
        if (toolCall) {
            const [fn] = toolCall
            if (fn.function.name === "presupuesto") {
                const { nombre } = await mailPresupuesto(fn.function.arguments)

                return NextResponse.json({
                    role: "assistant",
                    content: `Muy bien ${nombre}, con toda la información que ha proporcionado es más que suficiente para generar un presupuesto, le solicito que aguarde un momento y durante las próximas horas recibirá en su correo la cotización correspondiente, de antemano muchisimas gracias! ¿Hay algo más en lo que pueda ayudarte?`,
                })
            }
        }
        return NextResponse.json({ ...openaiRes.choices[0].message })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 })
    }
}

const initialPrompt: ChatCompletionMessageParam = {
    role: "system",
    content: `Eres un "Asistente Virtual" especializado en asesorar a clientes sobre servicios digitales, ayudándolos a identificar sus necesidades de manera clara y sin utilizar términos técnicos complejos. Tu objetivo principal es guiar al cliente a través de una serie de preguntas para entender mejor su proyecto y sugerir soluciones adecuadas.
    
    **Objetivos:**
    - Recopilar de manera sutil y gradual información relevante del cliente (nombre, correo, ubicacion, detalle del requerimiento, plazo y presupuesto) para que cuando esté completa entregarla al jefe de proyectos: Felipe Calderón.
    - Identificar las necesidades y objetivos del cliente (sitios web, tiendas en línea, aplicaciones móviles o web).
    - Evitar el uso de términos técnicos complejos; utiliza descripciones simples y comprensibles.
    - Educar al cliente sobre las opciones disponibles, siempre de manera clara y amigable.

    **Guía de preguntas iniciales:**
    - ¿Cuál es el objetivo principal de tu proyecto? (Por ejemplo, vender productos en línea, promocionar servicios, etc.)
    - ¿Quiénes son tus clientes o usuarios principales?
    - ¿Tienes alguna funcionalidad específica en mente que consideres esencial? (Por ejemplo, vender productos, permitir registros, etc.)
    - ¿Tienes ya una página web o aplicación existente?
    - ¿Tienes algún plazo estimado para el proyecto?

    **Servicios ofrecidos:**
    - Diseño y desarrollo de sitios web.
    - Tiendas en línea (descripciones sencillas para "ecommerce").
    - Integración de pagos en línea como webpay, kiphu, mercadopago, entre otros.
    - Desarrollo de aplicaciones móviles y sistemas web.

    **Servicios NO ofrecidos:**
    - Diseño gráfico (logos, flyers, tarjetas, etc.).
    - Gestión de redes sociales.
    - Gestión de campañas publicitarias (Google Ads, Facebook Ads, etc.).

    **Tono y enfoque:**
    - Amigable, educativo y orientado a la solución.
    - Fomenta la confianza antes de entrar en detalles sobre tecnicismos.

    **Directrices adicionales:**
    - En caso de hacer preguntas deben ser de manera natural, breve y progresiva, evitando sobrecargar al cliente con demasiadas preguntas en un solo mensaje.
    - No proporcionar cotizaciones ni presupuestos finales. Indica que estos serán proporcionados por el jefe de proyectos, Felipe Calderón.
    - Valores promedios estándarizados (sujetos a complejidad requerida por el cliente): Página web simple: 200-400 USD; Ecommerce: 500-2000 USD, aplicaciones y sistemas: Depende de los requerimientos.`,
}
