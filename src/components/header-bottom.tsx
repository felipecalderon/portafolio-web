"use client"
import Image from "next/image"

export default function HeaderBottom({ children }: { children: React.ReactNode }) {
    return (
        <div className='relative pt-20 pb-6 bg-amber-500 text-white rounded-b-medium md:rounded-b-3xl md:shadow-2xl z-0'>
            {children}
            <Image
                width={250}
                loading='lazy'
                height={250}
                alt='Imagen de perfil de Felipe Calderón'
                className='absolute inset-0 mx-auto z-0 w-56 h-56 rounded-full object-cover -top-[112px] drop-shadow-2xl border-t-8 border-t-amber-400 border-b-8 border-b-sky-700'
                src='https://res.cloudinary.com/duwncbe8p/image/upload/f_auto,q_auto/v1/portfolio/fa45nfrjf2hyhdzpbryu'
            />
        </div>
    )
}
