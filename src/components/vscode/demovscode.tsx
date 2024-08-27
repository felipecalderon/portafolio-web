"use client"
import { useEffect, useRef, useState } from "react"
import Precode from "./precode"
import { chatCode, pageCode, readmeCode, utilCode } from "./precode-constants"

export default function VSCodeDemostracion() {
    const [writing, setWriting] = useState(false)
    const [selected, setSelected] = useState("page.tsx")
    const [codigo, setCodigo] = useState("")
    const timeoutRef = useRef<number | null>(null)

    const generateCode = (codigo: string) => {
        // Si hay un timeout activo, lo limpia antes de iniciar uno nuevo
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        let index = 0
        setCodigo("") // Reinicia el código mostrado
        setWriting(true)

        const writeCode = () => {
            if (index <= codigo.length) {
                setCodigo(codigo.slice(0, index))
                index++
                timeoutRef.current = window.setTimeout(writeCode, 10) // Guarda el ID del timeout
            } else {
                setWriting(false)
            }
        }

        writeCode() // Inicia el proceso de escritura
    }

    useEffect(() => {
        generateCode(pageCode) // Inicializa con el código deseado

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current) // Limpia el timeout al desmontar el componente
            }
        }
    }, [])

    return (
        <div className='overflow-hidden w-[150%] md:w-full absolute'>
            <div className='flex flex-col bg-slate-50 dark:bg-slate-900 dark:text-[#d4d4d4] text-black font-mono cursor-default difuminado transform'>
                <div className='flex items-center h-10 bg-gray-200 dark:bg-gray-800 px-2 text-sm shadow-xl'>
                    <span className='menu-item mr-4 hover:font-black'>File</span>
                    <span className='menu-item mr-4 hover:font-black'>Edit</span>
                    <span className='menu-item mr-4 hover:font-black'>View</span>
                    <span className='menu-item mr-4 hover:font-black'>Go</span>
                    <span className='menu-item mr-4 hover:font-black'>Run</span>
                    <span className='menu-item mr-4 hover:font-black'>Terminal</span>
                    <span className='menu-item mr-4 hover:font-black'>Help</span>
                </div>

                <div className='flex flex-grow'>
                    <div className='w-1/6 bg-gray-100 dark:bg-slate-950 p-4 text-sm'>
                        <h3 className='font-semibold text-black dark:text-[#dcdcdc]'>Explorer</h3>
                        <ul className='mt-4 space-y-2'>
                            <li
                                className='hover:font-black p-1 hover:bg-slate-200 dark:hover:bg-slate-800 hover:cursor-pointer'
                                onClick={() => {
                                    generateCode(pageCode)
                                    setSelected("page.tsx")
                                }}
                            >
                                page.tsx
                            </li>
                            <li
                                className='hover:font-black p-1 hover:bg-slate-200 dark:hover:bg-slate-800 hover:cursor-pointer'
                                onClick={() => {
                                    generateCode(utilCode)
                                    setSelected("generate-code.ts")
                                }}
                            >
                                utils/generate-code.ts
                            </li>
                            <li
                                className='hover:font-black p-1 hover:bg-slate-200 dark:hover:bg-slate-800 hover:cursor-pointer'
                                onClick={() => {
                                    generateCode(chatCode)
                                    setSelected("chatbot.tsx")
                                }}
                            >
                                components/chatbot.tsx
                            </li>
                            <li
                                className='hover:font-black p-1 hover:bg-slate-200 dark:hover:bg-slate-800 hover:cursor-pointer'
                                onClick={() => {
                                    generateCode(readmeCode)
                                    setSelected("README.md")
                                }}
                            >
                                README.md
                            </li>
                        </ul>
                    </div>

                    <div className='flex-1 bg-white dark:bg-slate-900 p-4'>
                        <div className='bg-gray-200 dark:bg-gray-800 w-fit hover:font-black h-8 p-2 flex items-center text-sm text-black dark:text-[#dcdcdc] border-b dark:border-[#3a3d41]'>
                            <span>{selected}</span>
                        </div>

                        <div className='mt-4 bg-gray-100 dark:bg-slate-900 px-4 h-full rounded-md overflow-auto border dark:border-[#3a3d41] flex'>
                            {/* Columna de números de línea */}
                            <div className='pr-4 text-right text-gray-500 dark:text-[#6A6A6A]'>
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div key={i} className='leading-6'>
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                            <Precode code={codigo} />
                        </div>
                    </div>
                </div>

                <div className='bg-gray-100 dark:bg-slate-950 h-40 p-4'>
                    <div className='bg-gray-200 dark:bg-gray-800 h-8 p-2 flex items-center text-sm text-black dark:text-[#dcdcdc] border-b dark:border-[#3a3d41]'>
                        <span>Terminal</span>
                    </div>
                    <div className='bg-white dark:bg-slate-900 p-2 h-full text-sm'>
                        <pre className={`whitespace-pre-wrap text-blue-600 dark:text-[#9cdcfe]`}>felipe@localhost:~$ npm start</pre>
                    </div>
                </div>
            </div>
        </div>
    )
}
