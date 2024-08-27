import ChatBot from "@/components/chatbot"
import Experiencias from "@/components/experiencia"
import Habilidades from "@/components/habilidades"
import HeaderBottom from "@/components/header-bottom"
import HeaderTop from "@/components/header-top"
import Clima from "@/components/ipguide"
import Partners from "@/components/partners"
import SobreMi from "@/components/sobre-mi"
import VSCodeDemostracion from "@/components/vscode/demovscode"

export default function Home() {
    return (
        <>
            <section className='relative'>
                <Clima />
                <VSCodeDemostracion />
                <HeaderTop />
                <HeaderBottom>
                    <SobreMi />
                </HeaderBottom>
            </section>
            <main className='container mx-auto space-y-20 md:space-y-10 md:mt-10 py-8 px-4 max-w-2xl'>
                <ChatBot />
                <Experiencias />
                <Habilidades />
                <Partners />
            </main>
            <footer className='bg-sky-800 text-white p-4 text-center md:mt-3'>
                <p>2024 &copy; Felipe Calderón</p>
                <p className='max-w-3xl mx-auto px-4 text-pretty text-xs font-light pb-9 md:pb-2'>
                    Todos los derechos reservados sobre las imágenes y textos personales. Los íconos y otros elementos gráficos utilizados en este sitio son
                    propiedad de sus respectivos autores y están sujetos a las licencias internacionales correspondientes. La reproducción de imágenes y textos
                    personales sin permiso está prohibida, el uso no autorizado puede resultar en acciones legales.
                </p>
            </footer>
        </>
    )
}
