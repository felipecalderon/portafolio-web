"use client"
import { URL } from "@/contants/envs"
import { ContactForm } from "@/interfaces/global.interfaces"
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { RiMailSendFill } from "react-icons/ri"
import { toast } from "sonner"

const initialForm = { correo: "", nombre: "", asunto: "", mensaje: "" }

export default function Contacto() {
    const [form, setForm] = useState<ContactForm>(initialForm)
    const [selected, setSelected] = useState(1)
    const [isValid, setValid] = useState(false)
    const [isLoading, setLoading] = useState(false)

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let asunto
        if (selected === 1) asunto = "Necesito un sitio web simple (no tienda)"
        if (selected === 2) asunto = "Necesito una tienda online sin pasarela de pagos"
        if (selected === 3) asunto = "Necesito una tienda online con pasarela de pagos"
        if (selected === 4) asunto = "Necesito un sistema interno a medida"

        if (!isValid) {
            return toast.error("Debe completar todos los campos", { className: "bg-red-600 text-white" })
        }
        try {
            setLoading(true)
            const res = await fetch(`${URL}/api/mail`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...form, asunto: selected !== 5 ? asunto : form.asunto }),
            })
            if (res.ok) {
                toast.success("Enviado exitosamente, ¡muchas gracias!", { className: "bg-green-600 text-white" })
                setForm(initialForm)
            } else {
                toast.error("Hubo un error al enviar el mensaje", { className: "bg-red-600 text-white" })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const selection = Number(e.target.value)
        setSelected(selection)
        setForm({ ...form, asunto: "Quiero..." })
    }

    useEffect(() => {
        const isValid = Object.values(form).every((value) => {
            return value.trim() !== ""
        })
        setValid(isValid)
    }, [form])

    return (
        <section id='contact' className='text-center'>
            <h2 className='text-2xl font-semibold'>¿Quieres pasar al siguiente nivel digital?</h2>
            <p className='mb-4'>Escríbeme y nos reunimos online</p>
            <div>
                <form onSubmit={handleSubmitForm} className='space-y-3'>
                    <Input name='correo' type='email' label='Correo' value={form.correo} onChange={handleInputChange} />
                    <Input name='nombre' label='Nombre completo' value={form.nombre} onChange={handleInputChange} />
                    <Select label='Seleccione una opción' onChange={handleSelectChange} defaultSelectedKeys={[selected.toString()]}>
                        <SelectItem key={1}>Necesito un sitio web simple (sin tienda)</SelectItem>
                        <SelectItem key={2}>Necesito una tienda online sin pasarela de pagos</SelectItem>
                        <SelectItem key={3}>Necesito una tienda online con pasarela de pagos</SelectItem>
                        <SelectItem key={4}>Necesito un sistema interno a medida</SelectItem>
                        <SelectItem key={5}>Necesito otro tipo de asistencia digital</SelectItem>
                    </Select>
                    {selected === 5 && <Input name='asunto' label='¿Que tipo de servicio digital necesita?' value={form.asunto} onChange={handleInputChange} />}
                    <Textarea
                        name='mensaje'
                        label='Detalle de la solicitud'
                        placeholder='Ej. Necesito una página para mi tienda de...'
                        value={form.mensaje}
                        onChange={handleInputChange}
                    />
                    <Button color='primary' type='submit' isDisabled={isLoading} isLoading={isLoading} endContent={<RiMailSendFill className='text-lg' />}>
                        {!isLoading ? "Enviar" : "Enviando"}
                    </Button>
                </form>
            </div>
        </section>
    )
}
