import Contacto from "@/components/contacto"
import Experiencias from "@/components/experiencia"
import Habilidades from "@/components/habilidades"
import Header from "@/components/header"
import Clima from "@/components/ipguide"
import SobreMi from "@/components/sobre-mi"
import { Image } from "@nextui-org/react"

export default function Home() {
    return (
        <>
            <Header />
            <div className='absolute inset-0 flex justify-center'>
                <Image
                    radius='full'
                    className='w-52 h-52 object-cover transform left-1/2 -translate-x-[104px] translate-y-1 top-36 drop-shadow-2xl border-t-8 border-t-yellow-400 border-b-8 border-b-sky-600'
                    src='https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/fa45nfrjf2hyhdzpbryu'
                />
            </div>
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
