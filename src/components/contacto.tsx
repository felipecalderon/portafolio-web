"use client"
import { URL } from "@/contants/envs"
import { ContactForm } from "@/interfaces/global.interfaces"
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react"
import { RiMailSendFill } from "react-icons/ri"
import { toast } from "sonner"

const SUBJECT_OPTIONS = [
    { key: "simple", label: "Necesito un sitio web simple (sin tienda)" },
    { key: "store-no-payment", label: "Necesito una tienda online sin pasarela de pagos" },
    { key: "store-with-payment", label: "Necesito una tienda online con pasarela de pagos" },
    { key: "custom-system", label: "Necesito un sistema interno a medida" },
    { key: "other", label: "Otro tipo de asistencia digital" },
] as const

const initialForm = {
    correo: "",
    nombre: "",
    asunto: "",
    mensaje: "",
}

export default function Contacto() {
    const [formData, setFormData] = useReducer((state: ContactForm, newState: Partial<ContactForm>) => ({ ...state, ...newState }), initialForm)

    const [isLoading, setLoading] = useState(false)
    // Validación de formulario memoizada
    const isValid = useMemo(() => {
        const { correo, nombre, asunto, mensaje } = formData
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

        return (
            emailRegex.test(correo) &&
            nombre.trim() !== "" &&
            asunto.trim() !== "" &&
            mensaje.trim() !== "" &&
            (asunto !== "other" || (asunto === "other" && formData.asunto?.trim() !== ""))
        )
    }, [formData])

    // Manejadores de eventos memoizados
    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ [name]: value })
    }, [])

    const handleSelectChange = useCallback((value: string) => {
        setFormData({
            asunto: value,
        })
    }, [])

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            if (!isValid) {
                return toast.error("Debe completar todos los campos correctamente", {
                    className: "bg-red-600 text-white",
                })
            }

            try {
                setLoading(true)
                const dataToSend = {
                    ...formData,
                    asunto: formData.asunto,
                }

                const res = await fetch(`${URL}/api/mail`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dataToSend),
                })

                if (!res.ok) throw new Error("Error en el envío")

                toast.success("Enviado exitosamente, ¡muchas gracias!", {
                    className: "bg-green-600 text-white",
                })
                setFormData(initialForm)
            } catch (error) {
                console.error(error)
                toast.error("Hubo un error al enviar el mensaje", {
                    className: "bg-red-600 text-white",
                })
            } finally {
                setLoading(false)
            }
        },
        [formData, isValid]
    )

    return (
        <section id='contact' className='text-center'>
            <p className='mb-4'>Envía tu mensaje, esto llegará directamente a mi casilla de correo, atenderé tu solicitud con la mayor antelación posible.</p>
            <form onSubmit={handleSubmit} className='space-y-3'>
                <Input name='correo' type='email' label='Correo' value={formData.correo} onChange={handleInputChange} />

                <Input name='nombre' label='Nombre completo' value={formData.nombre} onChange={handleInputChange} />

                <Select
                    label='Seleccione el asunto'
                    selectedKeys={formData.asunto ? [formData.asunto] : []}
                    onChange={(e) => handleSelectChange(e.target.value)}
                >
                    {SUBJECT_OPTIONS.map((option) => (
                        <SelectItem key={option.label}>{option.label}</SelectItem>
                    ))}
                </Select>

                <Textarea
                    name='mensaje'
                    label='Detalle de la solicitud'
                    placeholder='Ej. Necesito una página para mi tienda de...'
                    value={formData.mensaje}
                    onChange={handleInputChange}
                />
                <Button
                    color='primary'
                    type='submit'
                    isDisabled={!isValid || isLoading}
                    isLoading={isLoading}
                    endContent={<RiMailSendFill className='text-lg' />}
                >
                    {isLoading ? "Enviando" : "Enviar"}
                </Button>
            </form>
        </section>
    )
}
