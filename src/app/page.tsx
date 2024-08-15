import Contacto from "@/components/contacto"
import Experiencias from "@/components/experiencia"
import Habilidades from "@/components/habilidades"
import Header from "@/components/header"
import Clima from "@/components/ipguide"
import SobreMi from "@/components/sobre-mi"

export default function Home() {
    return (
        <>
            <Header />
            <Clima />

            <main className='container mx-auto space-y-10 mt-10 p-8 bg-white rounded-lg max-w-2xl shadow-2xl'>
                <SobreMi />
                <Experiencias />
                <Habilidades />
                <Contacto />
            </main>
            <footer className='bg-indigo-800 text-white p-4 text-center md:mt-16'>
                <p>&copy; 2024 Felipe Eduardo Calderón</p>
            </footer>
        </>
    )
}
