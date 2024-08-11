export default function Experiencias() {
    return (
        <>
            <section>
                <h2 className='text-2xl font-semibold mb-4'>Experiencia</h2>
                <ul className='space-y-4'>
                    {experiencias.map(({ nombre, descripcion, lugar }) => (
                        <li key={descripcion} className='p-4 bg-gray-50 border rounded-lg shadow-sm'>
                            <h3 className='text-xl font-bold'>{nombre}</h3>
                            <p className='text-gray-600'>{lugar}</p>
                            <p className='mt-2'>{descripcion}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

const experiencias = [
    {
        nombre: "Diseño de sitio web ecommerce",
        lugar: "Rukacu, Temuco",
        descripcion: "Encargado de la gestión con el equipo de marketing para SEO y SEM. Desarrollo de sitio web y generación de ecommerce.",
    },
    {
        nombre: "Desarrollo de sitio web",
        lugar: "Geoconstructor",
        descripcion: "Desarrollo de sitio web para empresa de construcción, gestionando la presencia online y la interacción con clientes.",
    },
    {
        nombre: "Desarrollo de sitio web",
        lugar: "Terremoto Chile",
        descripcion: "Diseño y desarrollo de sitio web para promoción de productos de la empresa. Implementación de ecommerce.",
    },
    {
        nombre: "Desarrollo de sitio web",
        lugar: "Mulpun",
        descripcion: "Desarrollo de sitio web, generación de ecommerce, administración de redes sociales y diseño de publicaciones.",
    },
    {
        nombre: "Desarrollo de sitio web para ONG",
        lugar: "Ayupec",
        descripcion: "Diseño de sitio web para ONG 'Derecho Animal', gestionando comunidad y portal de noticias.",
    },
    {
        nombre: "Desarrollo de sitio web para ONG",
        lugar: "Fiscalía del Consumidor",
        descripcion: "Diseño de sitio web para ONG 'Derecho de Consumo', gestionando comunidad y portal de noticias. Sitio web en WordPress.",
    },
]
