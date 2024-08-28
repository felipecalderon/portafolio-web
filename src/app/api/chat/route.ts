import OpenAI from "openai"
import { NextRequest, NextResponse } from "next/server"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import { mailPresupuesto } from "./mailPresupuesto"
import { getChats, saveChat } from "@/utils/save-db"
import { initialPrompt } from "./initialPrompt"

const ia = new OpenAI({ apiKey: process.env.OPENAIKEY ?? "" })
const model = process.env.OPENAIMODEL ?? "gpt-4o-mini"

export const POST = async (req: NextRequest) => {
    try {
        const { chats }: { chats: ChatCompletionMessageParam[] } = await req.json()
        const ip = req.headers.get("x-forwarded-for") || req.ip || "unknown"
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
        const keyRedis = `chats:${ip.includes("::1") ? "localhost" : ip}`
        await saveChat(keyRedis, [...chats, openaiRes.choices[0].message])
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

export const GET = async (req: NextRequest) => {
    try {
        const key = req.nextUrl.searchParams.get("key") || ""
        const chats = await getChats(key)
        return NextResponse.json(chats)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 })
    }
}
