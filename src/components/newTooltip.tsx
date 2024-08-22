"use client"
import { Tooltip } from "@nextui-org/react"
import { useState } from "react"

export default function NewTooltip({ nombre, children }: { nombre: string; children: React.ReactNode }) {
    const [isOpen, setOpen] = useState(false)
    return (
        <Tooltip isOpen={isOpen} content={nombre} color='primary' key={nombre} placement='bottom' showArrow>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className='bg-gray-50 dark:bg-sky-600 p-2 flex items-center justify-center gap-2 rounded-lg shadow-sm hover:scale-110 hover:text-blue-700 transition-all'
            >
                {children}
            </div>
        </Tooltip>
    )
}
