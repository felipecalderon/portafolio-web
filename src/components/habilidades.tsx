export default function Habilidades() {
    return (
        <section>
            <h2 className='text-2xl font-semibold mb-4'>Habilidades</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>
                {habilidades.map((h) => (
                    <div key={h} className='bg-gray-50 p-4 border rounded-lg shadow-sm'>
                        <p className='font-semibold'>{h}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

const habilidades = [
    "Diseño gráfico",
    "Desarrollo web",
    "Gestión de equipos",
    "Excel avanzado",
    "Adobe Illustrator",
    "Photoshop",
    "Git / Github",
    "Next.js",
    "React",
    "TailwindCSS",
    "Typescript",
]
