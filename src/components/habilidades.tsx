"use server"
import { habilidades } from "@/contants/habildades"
import NewTooltip from "./newTooltip"

export default async function Habilidades() {
    return (
        <section id='habs'>
            <h2 className='text-2xl font-semibold text-center mb-2'>Habilidades & Conocimientos</h2>
            <p className='text-center mb-4 px-6'>
                La presente lista es un breve resumen de mis tecnologías/habilidades preferidas, me siento muy cómodo trabajando principalmente con:
            </p>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
                {habilidades.map((habilidad) => (
                    <NewTooltip key={habilidad.nombre} nombre={habilidad.nombre}>
                        <habilidad.Icono className='text-2xl dark:text-amber-50' />
                    </NewTooltip>
                ))}
            </div>
        </section>
    )
}
