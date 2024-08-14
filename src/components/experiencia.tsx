"use client"
import { experiencias } from "@/contants/experiencias"
import { formatoFecha } from "@/utils/formatoFecha"
import { Button, Chip, Pagination } from "@nextui-org/react"
import Link from "next/link"
import { AiOutlineGlobal } from "react-icons/ai"
import ModalImg from "./modal-img"
import { Habilidadestxt } from "@/interfaces/global.interfaces"
import { useState } from "react"

export default function Experiencias() {
    const [habilidades, _setHabilidades] = useState<Habilidadestxt[]>(["NextJS", "React", "Wordpress", "Woocommerce"])
    const [habilidad, setHabilidad] = useState<Habilidadestxt | null>(null)
    const [page, setPage] = useState(1)
    const [size, _setSize] = useState(3)

    const filterExps = experiencias.filter((exp) => {
        if (!habilidad) return true
        return exp.habilidades.includes(habilidad)
    })

    return (
        <>
            <section className='text-center'>
                <h2 className='text-2xl font-semibold mb-4'>Experiencias</h2>
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
                        color='warning'
                        radius='full'
                        size='sm'
                        className='cursor-pointer hover:scale-105 transition-all focus:bg-blue-800'
                    >
                        Ver Todo ({experiencias.length})
                    </Button>
                </div>
                <div className='flex justify-center my-3'>
                    <Pagination total={Math.ceil(filterExps.length / size)} page={page} initialPage={1} onChange={setPage} showControls />
                </div>
                <div className='space-y-4'>
                    {filterExps
                        .map(({ nombre, descripcion, lugar, fecha, web, img, habilidades }) => {
                            const { anio, mesNombre } = formatoFecha(fecha)
                            return (
                                <div key={descripcion} className='p-4 bg-gray-50 border rounded-lg shadow-sm'>
                                    <div className='flex gap-2 justify-between'>
                                        <div>
                                            <h3 className='text-lg font-bold text-blue-800'>{nombre}</h3>
                                            <Link href={web} target='_blank' className='flex gap-1 items-center text-blue-600'>
                                                <AiOutlineGlobal /> <p>{lugar}</p>
                                            </Link>
                                            <p className='text-gray-600'>
                                                {mesNombre} | {anio}
                                            </p>
                                        </div>
                                        <ModalImg img={img} />
                                    </div>
                                    <p className='my-2'>{descripcion}</p>
                                    <div className='flex flex-wrap gap-2'>
                                        {habilidades.map((h) => (
                                            <Chip key={h} color='warning' size='sm' className='opacity-80 cursor-default'>
                                                {h}
                                            </Chip>
                                        ))}
                                    </div>
                                </div>
                            )
                        })
                        .slice((page - 1) * size, size * page)}
                </div>
            </section>
        </>
    )
}
