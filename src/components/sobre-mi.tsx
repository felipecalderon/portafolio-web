import Link from "next/link"
import { Button } from "@nextui-org/react"
import { RiKakaoTalkFill } from "react-icons/ri"
import SocialPages from "./socials"

export default function SobreMi() {
    return (
        <section className='text-center space-y-4 text-pretty -mt-10 max-w-4xl mx-auto px-6 z-20 bg-sky-500/80 dark:bg-sky-600/80 pt-20 pb-6 rounded-lg'>
            <h1 className='text-3xl font-bold drop-shadow-md shadow-black'>Felipe Calderón Espinoza</h1>
            <p className='mt-2 text-xl'>Desarrollador Web ¿FullStack?</p>
            <p className='text-sm'>Prefiero llamarle Front con conocimientos en Back (API Rest y Database)</p>
            <SocialPages />
            <p className='text-xs uppercase'>Experto en diseño web e implementación de E-commerce (tiendas en línea).</p>
            <p className='mt-1 text-xs uppercase'>Landing page | Ecommerce | Blogs | Sistemas | Apps</p>
            <p className='text-sm text-pretty'>
                ¡Desde Chile para el Mundo! Tengo 32 años, he trabajado de forma independiente hace más de 8 años, fundador y cofundador de varias pymes locales
                como Softem <span className='text-xs italic'>(agencia de marketing digital - 2015)</span>, Soy Cervecero SpA{" "}
                <span className='text-xs italic'>(venta de licores - 2017)</span> y Ecobabylon{" "}
                <span className='text-xs italic'>(agencia de turismo - 2017)</span>.
            </p>
            <p className='italic font-semibold md:px-24'>
                Poseo una gran paciencia y capacidad para comprender lógica de negocios, encuentro soluciones sencillas a problemas complejos.
            </p>
            <div className='z-30'>
                <Link href='https://cert.efset.org/KJgm5v' target='_blank'>
                    <Button variant='faded' size='sm' endContent={<RiKakaoTalkFill className='text-2xl' />}>
                        Nivel de inglés: C1 (avanzado)
                    </Button>
                </Link>
            </div>
        </section>
    )
}
