import { SG_APIKEY } from "@/contants/envs"
import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(SG_APIKEY ?? "")

interface DataPresupuesto {
    nombre: string
    correo: string
    ubicacion: string
    requerimiento: string
    plazo: string
    presupuesto: string
}

export const mailPresupuesto = async (args: string) => {
    const data: DataPresupuesto = JSON.parse(args)
    const mailtoAdmin = {
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
    }

    const mailtoClient = {
        from: "felipe@geobosques.com",
        to: data.correo,
        subject: `${data.nombre}, muchas gracias por cotizar online.`,
        replyTo: "felipe.calderon321@gmail.com",
        html: `<p>Agradezco enormemente tu preferencia, sólo te pido un poco de paciencia para analizar bien tu caso y pronto tendrás respuestas mías.</p>
                    <p>Información recibida de tu solicitud.</p>
                    <p>Nombre: ${data.nombre}</p>
                    <p>Correo: ${data.correo}</p>
                    <p>Correo: ${data.ubicacion}</p>
                    <p>Requermiento: ${data.requerimiento}</p>
                    <p>Plazo: ${data.plazo}</p>
                    <p>Presupuesto: ${data.presupuesto}</p>
                    <p>Si deseas agregar más detalles, como archivos o necesitas contactarme directamente, puedes responder este correo.</p>
                    <p>Te deseo un estupendo día, estamos en contacto!</p>
                    <p>Felipe Calderón | Webmaster</p>
                    `,
    }

    await sendgrid.send(mailtoAdmin)
    await sendgrid.send(mailtoClient)

    return data
}
