import Contacto from "@/components/contacto"
import Experiencias from "@/components/experiencia"
import Habilidades from "@/components/habilidades"
import HeaderBottom from "@/components/header-bottom"
import HeaderTop from "@/components/header-top"
import Clima from "@/components/ipguide"
import SobreMi from "@/components/sobre-mi"
import { Image } from "@nextui-org/react"

export default function Home() {
    return (
        <>
            <div id='header' className='relative'>
                <HeaderTop>
                    <Clima />
                    <h1 className='text-3xl font-bold'>Felipe Eduardo Calderón</h1>
                    <p className='mt-2 text-xl'>Desarrollador Web FullStack</p>
                    <p className='mt-1 text-xs uppercase'>Landing page | Ecommerce | Blogs | Sistemas | Apps</p>
                </HeaderTop>
                <HeaderBottom>
                    <div className='absolute inset-0 flex justify-center'>
                        <Image
                            radius='full'
                            className='w-52 h-52 object-cover -top-[104px] drop-shadow-2xl border-t-8 border-t-amber-400 border-b-8 border-b-sky-700'
                            src='https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/fa45nfrjf2hyhdzpbryu'
                        />
                    </div>
                    <SobreMi />
                </HeaderBottom>
            </div>

            <main className='container mx-auto space-y-20 md:space-y-10 md:mt-10 p-8 bg-white rounded-lg max-w-2xl shadow-2xl'>
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
