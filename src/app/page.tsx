import Contacto from "@/components/contacto"
import Experiencias from "@/components/experiencia"
import Habilidades from "@/components/habilidades"
import Clima from "@/components/ipguide"
import SobreMi from "@/components/sobre-mi"

export default function Home() {
    return (
        <>
            <header className='bg-indigo-900 text-white p-8 text-center'>
                <h1 className='text-4xl font-bold'>Felipe Eduardo Calderón</h1>
                <p className='mt-2 text-xl'>Desarrollador Web FullStack</p>
                <p className='mt-1'>Landing page | Ecommerce | Blogs | Sistemas | Apps</p>
            </header>
            <Clima />

            <main className='container mx-auto space-y-20 mt-10 p-8 bg-white rounded-lg max-w-2xl shadow-2xl'>
                <SobreMi />
                <Experiencias />
                <Habilidades />
                <Contacto />
            </main>
            <footer className='bg-indigo-800 text-white p-4 text-center mt-16'>
                <p>&copy; 2024 Felipe Eduardo Calderón</p>
            </footer>
        </>
    )
}
