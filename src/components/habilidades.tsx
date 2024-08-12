import { habilidades } from "@/contants/habildades"
import { Tooltip } from "@nextui-org/react"

export default function Habilidades() {
    return (
        <section>
            <h2 className='text-2xl font-semibold mb-4 text-blue-900'>Conocimientos</h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
                {habilidades.map(({ Icono, nombre }) => (
                    <Tooltip content={nombre} color='primary' key={nombre} placement='bottom' showArrow>
                        <div className='bg-gray-50 p-2 flex items-center justify-center gap-2 border rounded-lg shadow-sm hover:scale-110 hover:text-blue-700 transition-all'>
                            <Icono className='text-2xl' />
                        </div>
                    </Tooltip>
                ))}
            </div>
        </section>
    )
}
