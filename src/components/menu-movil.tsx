"use client"
import { Button, ButtonGroup, Tooltip } from "@nextui-org/react"
import { GiBrain } from "react-icons/gi"
import { IoChatbubbles } from "react-icons/io5"
import { PiUserCircleCheckFill } from "react-icons/pi"
import DarkModeSwitcher from "./darkmode"
import { FaUsers } from "react-icons/fa6"

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
            <nav className='md:hidden fixed bottom-1 shadow-2xl w-full z-30'>
                <ul className='flex flex-row justify-center items-center gap-2'>
                    <li>
                        <ButtonGroup variant='shadow' radius='md' size='md'>
                            <Button className='bg-sky-500 dark:bg-amber-500 text-white text-xs inline-flex flex-col' onPress={() => scrollTo("about")}>
                                <PiUserCircleCheckFill className='text-lg text-white translate-y-1' />
                                <span className='-translate-y-1'>Sobre mí</span>
                            </Button>
                            <Button className='bg-sky-500 dark:bg-amber-500 text-white text-xs inline-flex flex-col' onPress={() => scrollTo("chat")}>
                                <IoChatbubbles className='text-lg text-white translate-y-1' />
                                <span className='-translate-y-1'>Hablemos</span>
                            </Button>
                            <Button className='bg-sky-500 dark:bg-amber-500 text-white text-xs inline-flex flex-col' onPress={() => scrollTo("exp")}>
                                <GiBrain className='text-lg text-white translate-y-1' />
                                <span className='-translate-y-1'>Proyectos</span>
                            </Button>
                            <Button className='bg-sky-500 dark:bg-amber-500 text-white text-xs inline-flex flex-col' onPress={() => scrollTo("partners")}>
                                <FaUsers className='text-lg text-white translate-y-1' />
                                <span className='-translate-y-1'>Partners</span>
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
