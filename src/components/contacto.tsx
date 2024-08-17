"use client"
import { URL } from "@/contants/envs"
import { ContactForm } from "@/interfaces/global.interfaces"
import { Button, Input, Textarea } from "@nextui-org/react"
import { FormEvent, useEffect, useState } from "react"
import { RiMailSendFill } from "react-icons/ri"
import { toast } from "sonner"

export default function Contacto() {
    const [form, setForm] = useState<ContactForm>({
        correo: "",
        nombre: "",
        asunto: "",
        mensaje: "",
    })

    const [isValid, setValid] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!isValid) return toast.error("Debe completar todos los campos", { className: "bg-red-600 text-white" })
        try {
            setLoading(true)
            const res = await fetch(`${URL}/api/mail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                toast.success("Enviado exitosamente, ¡muchas gracias!", { className: "bg-green-600 text-white" })
                setForm({ asunto: "", correo: "", mensaje: "", nombre: "" })
            } else {
                toast.error("Hubo un error al enviar el mensaje", { className: "bg-red-600 text-white" })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const isValid = Object.values(form).every((value) => value.trim() !== "")
        setValid(isValid)
    }, [form])
    return (
        <section id='contact' className='text-center'>
            <h2 className='text-2xl font-semibold'>¿Quieres pasar al siguiente nivel digital?</h2>
            <p className='mb-4'>Escríbeme y nos reunimos online</p>
            <div>
                <form onSubmit={handleSubmitForm} className='space-y-3'>
                    <Input name='correo' type='email' label='Correo' value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })} />
                    <Input name='nombre' label='Nombre completo' value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
                    <Input name='asunto' label='Asunto' value={form.asunto} onChange={(e) => setForm({ ...form, asunto: e.target.value })} />
                    <Textarea
                        label='Detalle de la solicitud'
                        placeholder='Ej. Necesito una página para mi tienda de...'
                        value={form.mensaje}
                        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    />
                    <Button color='primary' type='submit' isDisabled={isLoading} isLoading={isLoading} endContent={<RiMailSendFill className='text-lg' />}>
                        {!isLoading ? "Enviar" : "Enviando"}
                    </Button>
                </form>
            </div>
            <p className='mt-4'>
                Encuéntrame en{" "}
                <a href='https://github.com/felipecalderon' className='text-indigo-600'>
                    GitHub
                </a>
            </p>
        </section>
    )
}
