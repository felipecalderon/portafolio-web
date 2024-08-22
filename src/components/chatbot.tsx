"use client"
import { URL } from "@/contants/envs"
import { Button, Input, ScrollShadow } from "@nextui-org/react"
import { marked } from "marked"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"

export default function ChatBot() {
    const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSendMessage = async () => {
        try {
            setLoading(true)
            setInput("")
            const msgUser: ChatCompletionMessageParam = { role: "user", content: input }
            setMessages([...messages, msgUser])
            const res = await fetch(`${URL}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chats: [...messages, msgUser] }),
            })
            if (res.ok) {
                const msgResponse: ChatCompletionMessageParam = await res.json()
                setMessages([...messages, msgUser, msgResponse])
            }
        } catch (error) {
            console.log(error)
            toast.error("No se pudo enviar el mensaje, espere un momento o recargue el sitio")
        } finally {
            setLoading(false)
        }
    }

    // Crear referencia para el contenedor de mensajes
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Función para hacer scroll hacia el final del chat
    const scrollToBottom = () => {
        const scrollContainer = messagesEndRef.current
        if (scrollContainer) {
            scrollContainer.scrollTo({
                top: scrollContainer.scrollHeight,
                behavior: "smooth", // Desplazamiento suave
            })
        }
    }

    // Hacer scroll cada vez que cambien los mensajes
    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return (
        <div className='rounded-lg space-y-3 py-3 bg-slate-100 dark:bg-sky-600 px-2 shadow-lg'>
            <ScrollShadow className='h-80 sm:h-96' size={10} ref={messagesEndRef}>
                <div className='flex-1'>
                    <div className='flex justify-start'>
                        <div className='p-3 rounded-lg max-w-xs break-words bg-amber-100 dark:bg-sky-700 text-gray-800 dark:text-slate-100'>
                            <p className='text-xs italic'>Asesor Digital</p>
                            <p>¡Hola, conversemos! ¿Que necesitas?</p>
                        </div>
                    </div>
                    {messages.map((message) => (
                        <div key={message.content as string} className={`flex my-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`p-3 rounded-lg max-w-xs break-words ${
                                    message.role === "user"
                                        ? "dark:bg-amber-600 text-gray-800 dark:text-slate-100"
                                        : "dark:bg-sky-700 text-gray-800 dark:text-slate-100"
                                }`}
                            >
                                {message.role === "user" ? (
                                    <p className='text-xs italic text-righ w-fullt'>Cliente</p>
                                ) : (
                                    <p className='text-xs italic'>Asesor Digital</p>
                                )}
                                <div dangerouslySetInnerHTML={{ __html: marked(message.content as string) }} />
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollShadow>
            <div className='flex flex-row justify-center gap-2'>
                <Input
                    type='text'
                    color='warning'
                    radius='lg'
                    placeholder={loading ? "...Cargando" : "Para enviar presiona ENTER o ->"}
                    classNames={{
                        description: "#000",
                    }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
            </div>
        </div>
    )
}
