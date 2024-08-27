"use client"
import { Button, Tooltip } from "@nextui-org/react"
import { GiBrain } from "react-icons/gi"
import { IoChatbubbles } from "react-icons/io5"
import { PiUserCircleCheckFill } from "react-icons/pi"
import DarkModeSwitcher from "./darkmode"
import { FaUsers } from "react-icons/fa6"

export default function FloatingMenuDesktop() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({
                behavior: "smooth", // Desplazamiento suave
            })
        }
    }

    return (
        <nav className='hidden md:block fixed top-1/3 right-0 mr-6'>
            <ul className='flex flex-col gap-6 drop-shadow-xl'>
                <li>
                    <Tooltip content='Acerca de mí' placement='left' shadow='lg' size='lg' showArrow>
                        <Button isIconOnly size='lg' className='bg-sky-500 dark:bg-amber-500' onClick={() => scrollTo("about")}>
                            <PiUserCircleCheckFill className='text-2xl text-white' />
                        </Button>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content='Conversemos' placement='left' shadow='lg' size='lg' showArrow>
                        <Button isIconOnly size='lg' className='bg-sky-500 dark:bg-amber-500' onClick={() => scrollTo("chat")}>
                            <IoChatbubbles className='text-2xl text-white' />
                        </Button>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content='Experiencias y proyectos' placement='left' shadow='lg' size='lg' showArrow>
                        <Button isIconOnly size='lg' className='bg-sky-500 dark:bg-amber-500' onClick={() => scrollTo("exp")}>
                            <GiBrain className='text-2xl text-white' />
                        </Button>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip content='Partners' placement='left' shadow='lg' size='lg' showArrow>
                        <Button isIconOnly size='lg' className='bg-sky-500 dark:bg-amber-500' onClick={() => scrollTo("partners")}>
                            <FaUsers className='text-2xl text-white' />
                        </Button>
                    </Tooltip>
                </li>
                <li>
                    <DarkModeSwitcher />
                </li>
            </ul>
        </nav>
    )
}
