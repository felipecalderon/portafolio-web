import { SG_APIKEY } from "@/contants/envs"
import { ContactForm } from "@/interfaces/global.interfaces"
import sendgrid from "@sendgrid/mail"
import { NextRequest, NextResponse } from "next/server"

sendgrid.setApiKey(SG_APIKEY ?? "")

export const POST = async (req: NextRequest) => {
    try {
        const data: ContactForm = await req.json()
        // mensaje al admin (yo)
        await sendgrid.send({
            from: "felipe@geobosques.com",
            to: "felipe.calderon321@gmail.com",
            subject: `Un cliente ha enviado un mensaje: ${data.asunto}`,
            replyTo: data.correo,
            html: `<p>Un cliente ha enviado un mensaje.</p>
            <p>Nombre: ${data.nombre}</p>
            <p>Mensaje: ${data.mensaje}</p>
            `,
        })
        // mensaje al cliente
        // sendgrid.send({
        //     from: "felipe@geobosques.com",
        //     to: "felipe.calderon321@gmail.com",
        //     subject: data.asunto,
        //     replyTo: data.correo,
        //     text: data.mensaje,
        // })
        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 })
    }
}
