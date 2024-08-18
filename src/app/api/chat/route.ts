import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import { SG_APIKEY } from "@/contants/envs"
import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(SG_APIKEY ?? "")

const ia = new OpenAI({ apiKey: process.env.OPENAIKEY ?? "" })
const model = process.env.OPENAIMODEL ?? "gpt-4o-mini"

interface DataPresupuesto {
    nombre: string
    correo: string
    ubicacion: string
    requerimiento: string
    plazo: string
    presupuesto: string
}

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
                        description:
                            "El usuario ha proporcionado todos los 6 datos necesarios para poder generar un presupuesto (nombre, correo, ubicacion, detalle del requerimiento, plazo y presupuesto)",
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
                                    description: "Resumen de lo que necesita el usuario",
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
                const data: DataPresupuesto = JSON.parse(fn.function.arguments)
                await sendgrid.send({
                    from: "felipe@geobosques.com",
                    to: "felipe.calderon321@gmail.com",
                    subject: `${data.nombre} ha cotizado online`,
                    replyTo: data.correo,
                    html: `<p>Un cliente necesita servicios digitales</p>
                    <p>Nombre: ${data.nombre}</p>
                    <p>Correo: ${data.correo}</p>
                    <p>Correo: ${data.ubicacion}</p>
                    <p>Requermiento: ${data.requerimiento}</p>
                    <p>Plazo: ${data.plazo}</p>
                    <p>Presupuesto: ${data.presupuesto}</p>
                    `,
                })

                return NextResponse.json({
                    role: "assistant",
                    content: `Muy bien ${data.nombre}, con toda la información que ha proporcionado es más que suficiente para generar un presupuesto, le solicito que aguarde un momento y durante las próximas horas recibirá en su correo la cotización correspondiente, de antemano muchisimas gracias! ¿Hay algo más en lo que pueda ayudarte?`,
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
    content: `Eres un "Asistente Virtual" especializado en atender consultas sobre servicios digitales. Tu función principal es guiar al cliente en sus necesidades relacionadas con:

    **Servicios ofrecidos:**
    - Diseño y desarrollo de sitios web.
    - Tiendas en línea (ecommerce).
    - Integración de pasarelas de pago.
    - Desarrollo de aplicaciones y sistemas (móviles y web).

    **Servicios NO ofrecidos:**
    - Diseño gráfico (logos, flyers, tarjetas, etc.).
    - Gestión de redes sociales.
    - Gestión de campañas publicitarias (Google Ads, Facebook Ads, etc.).

    **Objetivo:** Recopilar de manera sutil y gradual información relevante del cliente para entregarla al jefe de proyectos, Felipe Calderón. Esta información debe incluir:
    - Nombre.
    - Correo electrónico.
    - Ubicación (ciudad y país).
    - Descripción del servicio requerido junto con los datos extra que entregue el usuario (por ejemplo si tiene dominio y no tiene hosting).
    - Si necesita un sitio web, preguntar si posee hosting y dominio, y si entiende estos conceptos.
    - Fecha deseada de entrega.
    - Presupuesto estimado.

    **Directrices adicionales:**
    - Haz preguntas de manera natural y progresiva, evitando sobrecargar al cliente con demasiadas preguntas en un solo mensaje.
    - No proporcionar cotizaciones ni presupuestos finales. Indica que estos serán proporcionados por el jefe de proyectos, Felipe Calderón.
    - Si el cliente es una pyme o emprendedor pequeño, no sugerir un costo mayor a $600 USD.
    - Para clientes más grandes (empresas establecidas con ventas y antigüedad), el costo mínimo para cualquier servicio digital es $600 USD.`,
}
