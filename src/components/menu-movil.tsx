"use client"
import { Button, ButtonGroup, Tooltip } from "@nextui-org/react"
import { GiBrain } from "react-icons/gi"
import { IoChatbubbles } from "react-icons/io5"
import { PiUserCircleCheckFill } from "react-icons/pi"
import DarkModeSwitcher from "./darkmode"

export default function FloatingMenuMovil() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth", // Desplazamiento suave
            })
        }
    }

    return (
        <>
            <nav className='md:hidden fixed bottom-3 w-full z-30'>
                <ul className='flex flex-row justify-center items-center gap-2'>
                    <li>
                        <ButtonGroup variant='shadow'>
                            <Button
                                size='sm'
                                startContent={<PiUserCircleCheckFill className='text-lg text-white' />}
                                radius='full'
                                className='bg-sky-500 dark:bg-amber-500 text-white'
                                onClick={() => scrollTo("about")}
                            >
                                Sobre mí
                            </Button>

                            <Button
                                size='sm'
                                startContent={<GiBrain className='text-lg text-white' />}
                                radius='full'
                                className='bg-sky-500 dark:bg-amber-500 text-white'
                                onClick={() => scrollTo("exp")}
                            >
                                Proyectos
                            </Button>
                            <Button
                                startContent={<IoChatbubbles className='text-lg text-white' />}
                                size='sm'
                                radius='full'
                                className='bg-sky-500 dark:bg-amber-500 text-white'
                                onClick={() => scrollTo("chat")}
                            >
                                Contacto
                            </Button>
                        </ButtonGroup>
                    </li>
                </ul>
            </nav>
            <div className='fixed md:hidden top-10 right-1 drop-shadow-md z-40'>
                <DarkModeSwitcher />
            </div>
        </>
    )
}
