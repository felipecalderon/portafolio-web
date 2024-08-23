"use client"
import { experiencias } from "@/contants/experiencias"
import { formatoFecha } from "@/utils/formatoFecha"
import { Button, Chip, Pagination } from "@nextui-org/react"
import Link from "next/link"
import { AiOutlineGlobal } from "react-icons/ai"
import ModalImg from "./modal-img"
import { Habilidadestxt } from "@/interfaces/global.interfaces"
import { useState } from "react"
import { BsCalendar3 } from "react-icons/bs"

export default function Experiencias() {
    const [habilidades, _setHabilidades] = useState<Habilidadestxt[]>(["React", "Wordpress", "IA - Openai"])
    const [habilidad, setHabilidad] = useState<Habilidadestxt | null>(null)
    const [page, setPage] = useState(1)
    const [size, _setSize] = useState(3)

    const filterExps = experiencias.filter((exp) => {
        if (!habilidad) return true
        return exp.habilidades.includes(habilidad)
    })

    return (
        <>
            <section id='exp'>
                <h2 className='text-2xl font-semibold mb-4 text-center'>Experiencias</h2>
                <div className='flex flex-wrap justify-center gap-2 mb-2'>
                    {habilidades.map((h) => (
                        <Button
                            key={h}
                            onClick={() => {
                                setPage(1)
                                setHabilidad(h)
                            }}
                            color='primary'
                            radius='full'
                            size='sm'
                            className='cursor-pointer hover:scale-105 transition-all focus:bg-blue-800'
                        >
                            {h}
                        </Button>
                    ))}
                    <Button
                        onClick={() => {
                            setPage(1)
                            setHabilidad(null)
                        }}
                        color='primary'
                        radius='full'
                        size='sm'
                        className='cursor-pointer hover:scale-105 transition-all focus:bg-blue-800'
                    >
                        Ver Todo ({experiencias.length})
                    </Button>
                </div>
                <div className='space-y-4'>
                    {filterExps
                        .map(({ nombre, descripcion, lugar, fecha, web, img, habilidades }) => {
                            const { anio, mesNombre } = formatoFecha(fecha)
                            return (
                                <div key={descripcion} className='p-4 bg-gray-50 dark:bg-sky-600 rounded-lg shadow-sm'>
                                    <div className='flex gap-2 justify-between'>
                                        <div>
                                            <h3 className='text-lg font-bold text-blue-800 dark:text-slate-50'>{nombre}</h3>
                                            <Link href={web} target='_blank' className='flex gap-1 items-center text-blue-600 dark:text-slate-100'>
                                                <AiOutlineGlobal className='w-6' />{" "}
                                                <p>
                                                    {lugar} <span className='text-sm'>(ver sitio)</span>
                                                </p>
                                            </Link>
                                            <p className='text-gray-600 inline-flex items-center gap-1 dark:text-slate-100'>
                                                <BsCalendar3 className='w-6' /> {mesNombre} | {anio}
                                            </p>
                                        </div>
                                        <ModalImg img={img} />
                                    </div>
                                    <p className='my-2 dark:text-slate-100 text-gray-900'>{descripcion}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {habilidades.map((h) => (
                                            <Chip key={h} variant='bordered' size='sm' className='opacity-80 cursor-default dark:text-white'>
                                                {h}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>
                            )
                        })
                        .slice((page - 1) * size, size * page)}
                </div>
                <div className='flex justify-center my-3'>
                    <Pagination color='default' total={Math.ceil(filterExps.length / size)} page={page} initialPage={1} onChange={setPage} showControls />
                </div>
            </section>
        </>
    )
}
