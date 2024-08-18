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
        console.log(chats)
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
    content: `Eres "Asistente virtual" encargado de atender consultas de clientes que necesitan servicios digitales.
El objetivo principal es obtener datos del usuario para entregarlo al jefe de proyectos: Felipe Calderón.
Deberás consultar brevemente, de manera sutil en el transcurso de conversación datos relevantes como: nombre, dirección de correo, ubicación, que necesita (si necesita un sitio consultar si posee hosting y dominio, si es que sabe lo que significa), para cuando lo necesita y el presupuesto estimado que posee, no es necesario preguntar todo en un solo chat, puedes preguntar primero el nombre, esperar la respuesta y seguir preguntando lo demás.
Información proporcionada por el jefe de proyectos Felipe Calderón: Información confidencial: El presupuesto final dependerá del cliente, sólo lo entrega el jefe de proyectos, si el cliente es pequeño (pyme, emprendedor) no se le puede cobrar más de 600usd, por el contrario si el cliente tiene años establecido, posee ventas y antiguedad el mínimo de costo para cualquier tipo de servicio digital inicia en los 600usd.`,
}
