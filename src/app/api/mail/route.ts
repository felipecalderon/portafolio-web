import { SG_APIKEY } from "@/contants/envs"
import { ContactForm } from "@/interfaces/global.interfaces"
import sendgrid from "@sendgrid/mail"
import { NextRequest, NextResponse } from "next/server"

sendgrid.setApiKey(SG_APIKEY ?? "")

export const POST = async (req: NextRequest) => {
    try {
        const data: ContactForm = await req.json()
        // mensaje al admin (yo)
        sendgrid.send({
            from: "felipe@geobosques.com",
            to: "felipe.calderon321@gmail.com",
            subject: `Un cliente ha enviado un mensaje: ${data.asunto}`,
            replyTo: data.correo,
            html: `<p>Un cliente ha enviado un mensaje.</p>
            <p>Nombre: ${data.nombre}</p>
            <p>Mensaje: ${data.mensaje}</p>`,
        })

        sendgrid.send({
            from: "felipe@geobosques.com",
            to: data.correo,
            subject: `Gracias ${data.nombre} por enviar tu mensaje`,
            replyTo: "felipe.calderon321@gmail.com",
            html: `<p>He recibido tu solicitud exitosamente, pronto recibirás noticias al respecto.</p>
            <p>Tu mensaje: ${data.mensaje}</p>
            <p>De antemano muchas gracias por tu preferencia, juntos lograremos grandes cosas!</p>
            <p>Atentamente: Felipe Calderón Espinoza</p>
            <p>Webmaster</p>`,
        })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
